"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { GoogleIcon } from "../../../public/brand-assets/icons/google-icon"
import { FacebookIcon } from "../../../public/brand-assets/icons/facebook-icon"
import { AgendosLogo } from "@/components/brand/logo/AgendosLogo"

export default function LoginPage() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  const handleSocialLoginClick = (provider: string) => {
    setSelectedFeature(`${provider} Login`)
    setComingSoonOpen(true)
  }

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1E3A52] flex flex-col justify-center items-center p-4 overflow-hidden">
        <div className="w-full max-w-md">
          <div className="flex justify-center items-center gap-3 mb-8">
            <AgendosLogo variant="dark" className="text-3xl" href="/" />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h1 className="text-xl font-bold text-charcoal-black mb-1">Welcome Back!</h1>
            <p className="text-charcoal-black/60 mb-6">Sign in to continue your AGENDOS.</p>

            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Link href="/dashboard">
                <Button className="w-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold py-3">
                  Sign In
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
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="font-semibold text-electric-blue hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ComingSoonModal open={comingSoonOpen} onOpenChange={setComingSoonOpen} featureName={selectedFeature} />
    </>
  )
}
