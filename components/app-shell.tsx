"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DoItLogo, DoItWordmark } from "@/components/do-it-logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Settings, LogOut } from "lucide-react"

interface AppShellProps {
  children: React.ReactNode
}

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/settings", icon: Settings, label: "Settings" },
]

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen w-full bg-[#F5F5F5]">
      <aside className="fixed left-0 top-0 h-full w-64 border-r bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center gap-3 border-b px-6">
            <DoItLogo size={32} href="/"/>
            <DoItWordmark height={28} href="/"/>
          </div>
          <nav className="flex-1 space-y-2 p-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3",
                    pathname === item.href
                      ? "text-electric-blue"
                      : "text-charcoal-black/70",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t p-4">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start gap-3 text-red-600 hover:text-red-700">
                <LogOut className="h-5 w-5" />
                Log Out
              </Button>
            </Link>
          </div>
        </div>
      </aside>
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  )
}