
'use client'


import { useAuth } from '@/context/AuthContext'
import AuthForm from '@/components/AuthForm'
import ChatBox from '@/components/ChatBox'

export default function Home() {
  const { isAuthenticated } = useAuth()
  return <>{isAuthenticated ? <ChatBox /> : <AuthForm />}</>
}
