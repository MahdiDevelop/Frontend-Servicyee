// app/login/page.tsx or pages/login.tsx depending on routing
import dynamic from "next/dynamic"
import React from "react"

// Dynamically import LoginForm only if it's client-side only
const LoginForm = dynamic(() => import('@/components/users/auth/login/LoginForm'), {
  loading: () => <div>Loading...</div>, // Optional loading UI
})

export const metadata = {
  title: "Login | Serviceyee",
  description: "Secure login page for users to access their dashboard.",
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6 md:p-10">
      <section className="w-full max-w-sm flex flex-col dark:bg-gray-900">
        <LoginForm />
      </section>
    </main>
  )
}
