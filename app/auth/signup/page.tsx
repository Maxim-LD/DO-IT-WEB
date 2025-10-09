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

export default function SignUpPage() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
    username: '',
    fullname: '',
    status: '',
    occupation: '',
    phone: '',
    date_of_birth: ''
  })


  const handleSocialLoginClick = (provider: string) => {
    setSelectedFeature(`${provider} Login`)
    setComingSoonOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    
  }

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1E3A52] flex flex-col justify-center items-center p-4 overflow-hidden">
        <div className="w-full max-w-md">
          <div className="flex justify-center items-center gap-3 mb-8">
            <AgendosLogo variant="dark" className="text-3xl" href="/" />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h1 className="text-xl font-bold text-charcoal-black mb-1">Create an Account</h1>
            <p className="text-charcoal-black/60 mb-6">Start your productivity journey today.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Link href="/dashboard" className="w-full">
                <Button className="w-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold py-3">
                  Create Account
                </Button>
              </Link>
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
        </div>
      </div>
    </>
  )
}
