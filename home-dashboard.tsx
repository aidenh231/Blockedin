"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  Calendar,
  Users,
  Clock,
  TrendingUp,
  Target,
  Flame,
  Trophy,
  Zap,
  Timer,
  BarChart3,
  Medal,
  ChevronRight,
} from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("home")

  const weeklyStats = {
    totalTime: "8h 45m",
    sessions: 5,
    avgSession: "1h 45m",
    efficiency: 87,
    streak: 15,
  }

  const friendsComparison = [
    {
      name: "You",
      avatar: "YU",
      time: "8h 45m",
      sessions: 5,
      efficiency: 87,
      isUser: true,
      streak: 15,
    },
    {
      name: "Mike",
      avatar: "MJ",
      time: "7h 30m",
      sessions: 4,
      efficiency: 92,
      isUser: false,
      streak: 12,
    },
    {
      name: "Sarah",
      avatar: "SF",
      time: "6h 15m",
      sessions: 4,
      efficiency: 89,
      isUser: false,
      streak: 8,
    },
    {
      name: "Alex",
      avatar: "AB",
      time: "5h 20m",
      sessions: 3,
      efficiency: 78,
      isUser: false,
      streak: 6,
    },
  ]

  const todaysSummary = {
    timeAtGym: "1h 32m",
    focusTime: "1h 28m",
    distractions: 2,
    workoutCompleted: true,
  }

  if (activeTab === "home") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-md mx-auto flex">
            <button
              onClick={() => setActiveTab("home")}
              className="flex-1 py-4 text-center text-sm font-medium text-blue-600 border-b-2 border-blue-600"
            >
              <Home className="w-5 h-5 mx-auto mb-1" />
              Home
            </button>
            <button
              onClick={() => setActiveTab("friends")}
              className="flex-1 py-4 text-center text-sm font-medium text-gray-500"
            >
              <Users className="w-5 h-5 mx-auto mb-1" />
              Friends
            </button>
            <button
              onClick={() => setActiveTab("planner")}
              className="flex-1 py-4 text-center text-sm font-medium text-gray-500"
            >
              <Calendar className="w-5 h-5 mx-auto mb-1" />
              Plan
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4 space-y-4">
          {/* Welcome Header */}
          <div className="text-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
            <p className="text-gray-600 mt-1">Ready to crush today's workout?</p>
          </div>

          {/* Today's Summary */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Today's Session</h3>
                <Badge className="bg-white/20 text-white border-white/30">
                  {todaysSummary.workoutCompleted ? "Complete" : "In Progress"}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm opacity-90">Total Time</span>
                  </div>
                  <p className="text-xl font-bold">{todaysSummary.timeAtGym}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm opacity-90">Focus Time</span>
                  </div>
                  <p className="text-xl font-bold">{todaysSummary.focusTime}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="opacity-90">Efficiency: 96%</span>
                  <span className="opacity-90">{todaysSummary.distractions} distractions blocked</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Stats */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                This Week's Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">{weeklyStats.totalTime}</p>
                  <p className="text-sm text-gray-600">Total Time</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">{weeklyStats.sessions}</p>
                  <p className="text-sm text-gray-600">Sessions</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Session</span>
                  <span className="font-semibold">{weeklyStats.avgSession}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Time Efficiency</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={weeklyStats.efficiency} className="w-16 h-2" />
                    <span className="font-semibold text-green-600">{weeklyStats.efficiency}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Current Streak</span>
                  <div className="flex items-center space-x-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="font-semibold">{weeklyStats.streak} days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Friends Leaderboard */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                  Squad Leaderboard
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  <span className="text-sm">View All</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <p className="text-sm text-gray-600">This week's gym time</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {friendsComparison.map((friend, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    friend.isUser ? "bg-blue-50 border border-blue-200" : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="relative">
                      {index === 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Medal className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>{friend.avatar}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className={`font-semibold text-sm ${friend.isUser ? "text-blue-700" : "text-gray-900"}`}>
                          {friend.name}
                        </p>
                        {friend.isUser && <Badge className="bg-blue-100 text-blue-700 text-xs">You</Badge>}
                      </div>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-600">{friend.sessions} sessions</span>
                        <span className="text-xs text-gray-600">{friend.efficiency}% efficiency</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{friend.time}</p>
                      <div className="flex items-center space-x-1">
                        <Flame className="w-3 h-3 text-orange-500" />
                        <span className="text-xs text-gray-600">{friend.streak}d</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Efficiency Breakdown */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Timer className="w-5 h-5 mr-2 text-purple-600" />
                Time Efficiency
              </CardTitle>
              <p className="text-sm text-gray-600">How you spend your gym time</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Active Workout Time</span>
                    <span className="text-sm font-semibold text-green-600">7h 35m (87%)</span>
                  </div>
                  <Progress value={87} className="h-2 bg-gray-200">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "87%" }} />
                  </Progress>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Rest Between Sets</span>
                    <span className="text-sm font-semibold text-blue-600">55m (10%)</span>
                  </div>
                  <Progress value={10} className="h-2 bg-gray-200">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "10%" }} />
                  </Progress>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Distractions Blocked</span>
                    <span className="text-sm font-semibold text-red-600">15m (3%)</span>
                  </div>
                  <Progress value={3} className="h-2 bg-gray-200">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: "3%" }} />
                  </Progress>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Great efficiency!</span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  You're 12% more efficient than last week. Keep up the focused workouts!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button className="h-12 bg-blue-600 hover:bg-blue-700">
              <Target className="w-4 h-4 mr-2" />
              Start Workout
            </Button>
            <Button variant="outline" className="h-12">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Stats
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Placeholder for other tabs
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex">
          <button
            onClick={() => setActiveTab("home")}
            className="flex-1 py-4 text-center text-sm font-medium text-gray-500"
          >
            <Home className="w-5 h-5 mx-auto mb-1" />
            Home
          </button>
          <button
            onClick={() => setActiveTab("friends")}
            className="flex-1 py-4 text-center text-sm font-medium text-blue-600 border-b-2 border-blue-600"
          >
            <Users className="w-5 h-5 mx-auto mb-1" />
            Friends
          </button>
          <button
            onClick={() => setActiveTab("planner")}
            className="flex-1 py-4 text-center text-sm font-medium text-gray-500"
          >
            <Calendar className="w-5 h-5 mx-auto mb-1" />
            Plan
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        <p className="text-center text-gray-500 mt-8">Other tab content...</p>
        <Button onClick={() => setActiveTab("home")} className="w-full mt-4">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
