import { DoItIcon } from "./do-it-logo"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, Flame, Trophy, Target } from "lucide-react"

export function DashboardMockup() {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-2xl p-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <DoItIcon size={48} />
          <h1 className="text-3xl font-bold text-[#1E1E1E]" style={{ fontFamily: "var(--font-poppins)" }}>
            DO-IT
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
            <Flame className="w-5 h-5 text-[#FF7A00]" />
            <span className="font-semibold text-[#1E1E1E]">12 Day Streak</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#007AFF] flex items-center justify-center text-white font-bold">
            JD
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="bg-white p-6 border-none shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-[#007AFF]" />
            </div>
            <span className="text-sm text-[#1E1E1E]/60">Tasks Today</span>
          </div>
          <p className="text-3xl font-bold text-[#1E1E1E]">8/12</p>
          <div className="w-full bg-[#F5F5F5] h-2 rounded-full mt-3">
            <div className="w-2/3 bg-[#007AFF] h-2 rounded-full" />
          </div>
        </Card>

        <Card className="bg-white p-6 border-none shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#FF7A00]/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-[#FF7A00]" />
            </div>
            <span className="text-sm text-[#1E1E1E]/60">Focus Time</span>
          </div>
          <p className="text-3xl font-bold text-[#1E1E1E]">3.5h</p>
          <p className="text-sm text-[#FF7A00] mt-2">+45min from yesterday</p>
        </Card>

        <Card className="bg-white p-6 border-none shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#FF7A00]/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-[#FF7A00]" />
            </div>
            <span className="text-sm text-[#1E1E1E]/60">Achievements</span>
          </div>
          <p className="text-3xl font-bold text-[#1E1E1E]">24</p>
          <p className="text-sm text-[#1E1E1E]/60 mt-2">Level 8 Achiever</p>
        </Card>
      </div>

      {/* Tasks List */}
      <Card className="bg-white p-6 border-none shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#1E1E1E]" style={{ fontFamily: "var(--font-poppins)" }}>
            Today's Tasks
          </h2>
          <Button className="bg-[#007AFF] hover:bg-[#007AFF]/90 text-white rounded-full px-6">+ Add Task</Button>
        </div>

        <div className="space-y-3">
          {[
            { title: "Review project proposal", done: true, priority: "high" },
            { title: "Team standup meeting", done: true, priority: "medium" },
            { title: "Update documentation", done: false, priority: "medium" },
            { title: "Code review for PR #234", done: false, priority: "high" },
            { title: "Prepare presentation slides", done: false, priority: "low" },
          ].map((task, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-colors">
              {task.done ? (
                <CheckCircle2 className="w-6 h-6 text-[#007AFF] flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 text-[#1E1E1E]/20 flex-shrink-0" />
              )}
              <span className={`flex-1 ${task.done ? "line-through text-[#1E1E1E]/40" : "text-[#1E1E1E]"}`}>
                {task.title}
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  task.priority === "high"
                    ? "bg-[#FF7A00]/10 text-[#FF7A00]"
                    : task.priority === "medium"
                      ? "bg-[#007AFF]/10 text-[#007AFF]"
                      : "bg-[#1E1E1E]/10 text-[#1E1E1E]/60"
                }`}
              >
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
