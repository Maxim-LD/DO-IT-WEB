"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GoogleIcon } from "../../../public/brand-assets/icons/google-icon"
import { FacebookIcon } from "../../../public/brand-assets/icons/facebook-icon"
import { AgendosLogo } from "@/components/brand/logo/AgendosLogo"
import { AgendosIcon } from "@/components/brand/logo/AgendosIcon"
import { Eye, EyeOff, AlertCircle, Check, X, CheckCircle2 } from "lucide-react"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignUpPage() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirm_password: '',
    username: '',
    phone: '',
    status: '',
    occupation: '',
    date_of_birth: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    letter: false,
    number: false,
    specialChar: false,
  })
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const router = useRouter()

  const handleSocialLoginClick = (provider: string) => {
    setSelectedFeature(`${provider} Login`)
    setComingSoonOpen(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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
    setFormData({ ...formData, password: newPassword })
    checkPasswordStrength(newPassword)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFormError(null)

    if (formData.password !== formData.confirm_password) {
      setFormError("Passwords do not match.")
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch('http://localhost:3200/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      
      const result = await res.json()
      if (result.success) {
        toast.success("Sign Up Successful! 🎉", {
          description: `Welcome to AGENDOS, ${result.data.fullname}!`,
          duration: 2000,
          onAutoClose: () => router.push("/dashboard"),
          // Also navigate if the user manually dismisses the toast
          onDismiss: () => router.push("/dashboard"),
        });

      } else {
        setFormError(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Sign up error:", error)
      setFormError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1E3A52] flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="w-full max-w-6xl">
          <div className="flex justify-center items-center gap-3 mb-8">
            <AgendosLogo variant="dark" className="text-3xl" href="/" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full">
            {/* Left side: Form */}
            <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold text-charcoal-black mb-1">Get Started</h1>
                <p className="text-charcoal-black/60 mb-8">It's free to sign up and only takes a minute.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="fullname"
                      name="fullname"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullname}
                      className="placeholder:text-charcoal-black/40"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      className="placeholder:text-charcoal-black/40"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        className="placeholder:text-charcoal-black/40"
                        onChange={handlePasswordChange}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    {isPasswordFocused &&
                      formData.password.length > 0 && (
                        <div className="mt-2 space-y-1 text-xs">
                          <PasswordRequirement label="At least 6 characters" met={passwordStrength.length} />
                          <PasswordRequirement label="Contains a letter" met={passwordStrength.letter} />
                          <PasswordRequirement label="Contains a number" met={passwordStrength.number} />
                          <PasswordRequirement label="Contains a special character" met={passwordStrength.specialChar} />
                        </div>
                      )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center">
                      Confirm Password
                      {formData.password && formData.password === formData.confirm_password}
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirm_password"
                        name="confirm_password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirm_password}
                        className="placeholder:text-charcoal-black/40"
                        onChange={handleChange}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="johndoe"
                      className="placeholder:text-charcoal-black/40"
                      value={formData.username}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g., 08012345678 or +2348012345678"
                      className="placeholder:text-charcoal-black/40"
                      value={formData.phone}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    name="occupation"
                    type="text"
                    placeholder="e.g. Software Engineer"
                    className="placeholder:text-charcoal-black/40"
                    value={formData.occupation}
                    onChange={handleChange}
                    // required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date_of_birth">Date of Birth</Label>
                    <Input
                      id="date_of_birth"
                      name="date_of_birth"
                      type="date"
                      placeholder=""
                      className="placeholder:text-charcoal-black/40"
                      value={formData.date_of_birth}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Input
                      id="status"
                      name="status"
                      type="text"
                      placeholder="e.g. Student, Employed"
                      className="placeholder:text-charcoal-black/40"
                      value={formData.status}
                      onChange={handleChange}
                      // required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold py-3" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                {formError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{formError}</AlertDescription>
                  </Alert>
                )}
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-charcoal-black/60">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center gap-2" onClick={() => handleSocialLoginClick("Google")}>
                  <GoogleIcon className="w-5 h-5" />
                  Google
                </Button>
                <Button variant="outline" className="flex items-center gap-2" onClick={() => handleSocialLoginClick("Facebook")}>
                  <FacebookIcon className="w-5 h-5" />
                  Facebook
                </Button>
              </div>

              <p className="mt-6 text-center text-sm text-charcoal-black/60">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-semibold text-electric-blue hover:underline">
                  Sign In
                </Link>
              </p>
            </div>

            {/* Right side: Icon and Text */}
            <div className="hidden lg:flex flex-col items-center text-center text-white max-w-sm">
              <div className="bg-white/10 p-8 rounded-full mb-8">
                <AgendosIcon className="w-32 h-32 text-white" variant="light" />
              </div>
              <h2 className="text-3xl font-bold">Create Your Account</h2>
              <p className="text-white/70 mt-2">Join a community of productive individuals and take control of your day.</p>
            </div>
          </div>
        </div>
      </div>
      <ComingSoonModal open={comingSoonOpen} onOpenChange={setComingSoonOpen} featureName={selectedFeature} />
    </>
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
