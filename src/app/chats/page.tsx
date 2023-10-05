"use client"
import Sidebar from '@/components/Sidebar';
import { ChatProvider } from '@/context/chats';
import BodyChat from '@/components/bodyChat';
import { AuthProvider } from '@/context/auth';

export default function Chat () {  

  return (
    <main className="mt-20 flex">
      <AuthProvider>
        <ChatProvider>
          <Sidebar/>
          <BodyChat/>
        </ChatProvider>
      </AuthProvider>
    </main>
  )
}
