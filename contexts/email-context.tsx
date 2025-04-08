"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface EmailContextType {
  canSendEmail: boolean
  lastEmailSent: number | null
  setLastEmailSent: (timestamp: number) => void
}

const EmailContext = createContext<EmailContextType | undefined>(undefined)

const COOLDOWN_TIME = 10 * 60 * 1000 // 10 minutos em milissegundos

export function EmailProvider({ children }: { children: ReactNode }) {
  const [lastEmailSent, setLastEmailSent] = useState<number | null>(null)
  const [canSendEmail, setCanSendEmail] = useState(true)

  useEffect(() => {
    if (lastEmailSent) {
      setCanSendEmail(false)
      const timer = setTimeout(() => {
        setCanSendEmail(true)
      }, COOLDOWN_TIME)

      return () => clearTimeout(timer)
    }
  }, [lastEmailSent])

  return (
    <EmailContext.Provider value={{ canSendEmail, lastEmailSent, setLastEmailSent }}>
      {children}
    </EmailContext.Provider>
  )
}

export function useEmail() {
  const context = useContext(EmailContext)
  if (context === undefined) {
    throw new Error("useEmail must be used within an EmailProvider")
  }
  return context
} 