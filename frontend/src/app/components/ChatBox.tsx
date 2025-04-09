'use client'

export default function ChatBox() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Chat Ativo ✅</h2>
      <div className="border p-2 mb-2">Aqui vão as mensagens...</div>
      <input type="text" placeholder="Digite sua mensagem" className="border p-2 w-full" />
    </div>
  )
}

