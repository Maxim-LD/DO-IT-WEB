"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { Bell, Lock, Palette, HelpCircle, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SettingsPage() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  const handleFeatureClick = (featureName: string) => {
    setSelectedFeature(featureName)
    setComingSoonOpen(true)
  }

  const settingsSections = [
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { label: "Push Notifications", toggle: true },
        { label: "Email Notifications", toggle: true },
        { label: "Task Reminders", toggle: true },
      ],
    },
    {
      title: "Appearance",
      icon: Palette,
      items: [
        { label: "Theme", action: () => handleFeatureClick("Theme Settings") },
        { label: "Language", action: () => handleFeatureClick("Language Settings") },
      ],
    },
    {
      title: "Security",
      icon: Lock,
      items: [
        { label: "Two-Factor Authentication", action: () => handleFeatureClick("2FA") },
        { label: "Connected Devices", action: () => handleFeatureClick("Connected Devices") },
      ],
    },
  ]

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-charcoal-black">Settings</h1>
          <p className="text-charcoal-black/60 mt-1">Welcome back! Here's your app settings overview.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-charcoal-black">Coming Soon</h2>
          <p className="text-charcoal-black/60 mt-2">Your personalized settings is under construction. Stay tuned!</p>
        </div>
      </div>
    </AppShell>
  )

  // return (
  //   <AppShell>
  //     <div className="space-y-6">
  //       {/* Header */}
  //       <div>
  //         <h1 className="text-3xl font-bold text-charcoal-black">Settings</h1>
  //         <p className="text-charcoal-black/60 mt-1">Manage your setup and preferences</p>
  //       </div>

  //       {/* Settings Sections */}
  //       <div className="space-y-4">
  //         {settingsSections.map((section, index) => (
  //           <motion.div
  //             key={section.title}
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ delay: index * 0.1 }}
  //             className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
  //           >
  //             <div className="flex items-center gap-2 mb-4">
  //               <section.icon className="w-5 h-5 text-electric-blue" />
  //               <h3 className="text-lg font-bold text-charcoal-black">{section.title}</h3>
  //             </div>
  //             <div className="space-y-3">
  //               {section.items.map((item) => (
  //                 <div key={item.label} className="flex items-center justify-between py-2">
  //                   <span className="text-charcoal-black/80">{item.label}</span>
  //                   {"toggle" in item ? (
  //                     <Switch />
  //                   ) : (
  //                     <button
  //                       onClick={"action" in item ? item.action : undefined}
  //                       className="text-electric-blue hover:text-electric-blue/80 transition-colors"
  //                     >
  //                       <ChevronRight className="w-5 h-5" />
  //                     </button>
  //                   )}
  //                 </div>
  //               ))}
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>

  //       {/* Additional Options */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 0.4 }}
  //         className="space-y-2"
  //       >
  //         <Button
  //           variant="outline"
  //           className="w-full justify-between bg-transparent"
  //           onClick={() => handleFeatureClick("Help & Support")}
  //         >
  //           <span className="flex items-center gap-2">
  //             <HelpCircle className="w-5 h-5 text-charcoal-black/70" />
  //             Help & Support
  //           </span>
  //           <ChevronRight className="w-5 h-5" />
  //         </Button>
  //       </motion.div>
  //     </div>

  //     <ComingSoonModal open={comingSoonOpen} onOpenChange={setComingSoonOpen} featureName={selectedFeature} />
  //   </AppShell>
  // )
}
