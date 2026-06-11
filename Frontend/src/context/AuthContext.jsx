//Savoir qui est connecté, et l'afficher
import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const savedToken = localStorage.getItem('token')
        if (savedToken) {
            try {
                const payload = JSON.parse(atob(savedToken.split('.')[1]))
                setToken(savedToken)
                setUser(payload)
            } catch {
                localStorage.removeItem('token')
            }
        }
    }, [])

    const login = (newToken) => {
        localStorage.setItem('token', newToken)
        setToken(newToken)
        const payload = JSON.parse(atob(newToken.split('.')[1]))
        setUser(payload)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            user,
            token,
            login,
            logout,
            isAuthenticated: !!token,
            isAdmin: user?.role === 'admin'
        }}>
            {children}
        </AuthContext.Provider>
    )
}