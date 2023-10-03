"use client"
import Sidebar from '@/components/Sidebar';

import { ChatProvider } from '@/context/chats';

import BodyChat from '@/components/bodyChat';

export default function Home() {
  

  return (
    <main className="mt-20 flex">
      <ChatProvider>
      
        <Sidebar/>

        <BodyChat/>
      </ChatProvider>
    </main>
  )
}
