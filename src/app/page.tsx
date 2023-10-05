"use client"
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/auth";

export default function App() {
  return (
    <main className="">
      <AuthProvider>
        <Navbar></Navbar>
      </AuthProvider>
        <div className="mt-20">
          <h1>Aqui va toda la información del home</h1>
        </div>     
    </main>
  )
}
