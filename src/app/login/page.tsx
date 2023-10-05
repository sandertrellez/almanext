"use client"
import LoginForm from "@/components/LoginForm";
import { AuthProvider } from "@/context/auth";

export default function Login() { 

  return (

    <main  className="">
      <AuthProvider>
        <LoginForm/>
      </AuthProvider>
    </main>
  )
}