'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function ChatBox() {
  const [input, setInput] = useState('')
  const [chat, setChat] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chat])

  const handleSend = async () => {
    if (!input.trim()) return
    setChat([...chat, `Você: ${input}`, `AI: Respondendo à "${input}"...`])
    setInput('')
  }

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {chat.map((msg, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded">{msg}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded-l"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Digite sua mensagem..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}