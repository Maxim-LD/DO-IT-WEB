"use client"

import { useRouter } from "next/navigation"
import { createContext, useContext, useState } from "react"

interface User {
    id: string
    name: string
    email: string
}

interface AuthContextType {
    user: User | null
    accessToken: string | null
    login: (userData: User, token: string) => void
    logout?: () => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null)
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    
    const login = (userData: User, token: string) => {
        setUser(userData)
        setAccessToken(token)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    return <AuthContext.Provider value={{
        user,
        accessToken,
        login,
        isLoading
    }}>{children}
    </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}