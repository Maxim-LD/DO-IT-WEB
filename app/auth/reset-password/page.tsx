"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, CheckCircle, AlertCircle, Lock, ArrowLeft, Check, X } from "lucide-react"
import { toast } from "sonner"
import { AgendosLogo } from "@/components/brand/logo/AgendosLogo"

function ResetPasswordForm() {
    const [newPassword, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")
    const [paramsReady, setParamsReady] = useState(false)
    const [resetToken, setToken] = useState("")
    const [email, setEmail] = useState("")
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        letter: false,
        number: false,
        specialChar: false,
    })

    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const tokenParam = searchParams.get("token")
        const emailParam = searchParams.get("email")

        if (!tokenParam || !emailParam) {
            // Let the UI handle showing the invalid link message.
        } else {
            setToken(tokenParam)
            setEmail(emailParam) 
        }
        setParamsReady(true)
    }, [searchParams, router])

    const checkPasswordStrength = (password: string) => {
        setPasswordStrength({
          length: password.length >= 6,
          letter: /[a-zA-Z]/.test(password),
          number: /[0-9]/.test(password),
          specialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
        })
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        checkPasswordStrength(newPassword)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        const { length, letter, number, specialChar } = passwordStrength
        if (!length || !letter || !number || !specialChar) {
            let errorMsg = "Password does not meet all requirements."
            if (!length) errorMsg = "Password must be at least 6 characters."
            else if (!letter) errorMsg = "Password must contain a letter."
            else if (!number) errorMsg = "Password must contain a number."
            else if (!specialChar) errorMsg = "Password must contain a special character."

            setError(errorMsg)
            return
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setIsLoading(true)

        try {
            const response = await fetch("http://localhost:3200/api/v1/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    resetToken,
                    newPassword,
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setIsSuccess(true)
                toast.success("Password reset successful", { description: "Your password has been updated successfully." })

                // Redirect to login after 3 seconds
                setTimeout(() => {
                    router.push("/auth/login")
                }, 3000)
                
            } else {
                setError(data.message || "Failed to reset password. Please try again.")
            }
        } catch (error) {
            setError("Network error. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    // Show success message
    if (isSuccess) {
            return (
            <div className="relative min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1E3A52] flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden">
                <div className="w-full max-w-6xl">
                    <div className="flex justify-center items-center gap-3 mb-8">
                        <AgendosLogo variant="dark" className="text-3xl" href="/" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <h1 className="text-2xl font-bold text-charcoal-black">Password Reset Complete</h1>
                                <p className="text-charcoal-black/60 mt-2">
                                    Your password has been successfully updated. You can now log in with your new password.
                                </p>
                            </div>
                            <div className="my-8">
                                <Alert>
                                    <CheckCircle className="h-4 w-4" />
                                    <AlertDescription>Redirecting to login page in a few seconds...</AlertDescription>
                                </Alert>
                            </div>
                            <Button asChild className="w-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold py-3">
                                <Link href="/auth/login">Go to Login</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
        
    // Show error if invalid link
    if (paramsReady && (!resetToken || !email)) {
        return (
            <div className="relative min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1E3A52] flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden">
                <div className="w-full max-w-6xl">
                    <div className="flex justify-center items-center gap-3 mb-8">
                        <AgendosLogo variant="dark" className="text-3xl" href="/" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                    <AlertCircle className="h-6 w-6 text-red-600" />
                                </div>
                                <h1 className="text-2xl font-bold text-charcoal-black">Invalid Reset Link</h1>
                                <p className="text-charcoal-black/60 mt-2">This password reset link is invalid or has expired.</p>
                            </div>
                            <Button asChild className="w-full mt-8 bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold py-3">
                                <Link href="/auth/forgot-password">Request New Reset Link</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1E3A52] flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div className="w-full max-w-6xl">
                <div className="flex justify-center items-center gap-3 mb-8">
                    <AgendosLogo variant="dark" className="text-3xl" href="/" />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full">
                    <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl font-bold text-charcoal-black mb-1">Reset Your Password</h1>
                            <p className="text-charcoal-black/60 mb-8">Enter and confirm your new password below.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}
                            <div className="space-y-2">
                                <Label htmlFor="password">New Password</Label>
                                <div className="relative">
                                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter new password" value={newPassword} onChange={handlePasswordChange} onFocus={() => setIsPasswordFocused(true)} onBlur={() => setIsPasswordFocused(false)} required disabled={isLoading} />
                                    <Button type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)} disabled={isLoading}>
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                                {isPasswordFocused && newPassword.length > 0 && (
                                    <div className="mt-2 space-y-1 text-xs">
                                        <PasswordRequirement label="At least 8 characters" met={passwordStrength.length} />
                                        <PasswordRequirement label="Contains a letter" met={passwordStrength.letter} />
                                        <PasswordRequirement label="Contains a number" met={passwordStrength.number} />
                                        <PasswordRequirement label="Contains a special character" met={passwordStrength.specialChar} />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <div className="relative">
                                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required disabled={isLoading} />
                                    <Button type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent" onClick={() => setShowConfirmPassword(!showConfirmPassword)} disabled={isLoading}>
                                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <Button type="submit" className="w-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold py-3" disabled={isLoading || !newPassword || !confirmPassword}>
                                {isLoading ? "Resetting Password..." : "Reset Password"}
                            </Button>
                            <Button asChild variant="ghost" className="w-full">
                                <Link href="/auth/login">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Login
                                </Link>
                            </Button>
                        </form>
                    </div>
                    <div className="hidden lg:flex flex-col items-center text-center text-white max-w-sm">
                        <div className="bg-white/10 p-8 rounded-full mb-8">
                            <Lock className="w-32 h-32 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold">Secure Your Account</h2>
                        <p className="text-white/70 mt-2">Choose a strong, unique password to keep your account safe.</p>
                    </div>
                </div>
        
            </div>
        </div>

    )
}

function PasswordRequirement({ met, label }: { met: boolean; label: string }) {
    return (
      <div className={`flex items-center transition-colors ${met ? "text-green-600" : "text-red-500"}`}>
        {met ? <Check className="w-4 h-4 mr-2" /> : <X className="w-4 h-4 mr-2" />}
        {label}
      </div>
    )
}


export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="relative min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1E3A52] flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  )
}
