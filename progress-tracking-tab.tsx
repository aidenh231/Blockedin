"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Calendar,
  Users,
  TrendingUp,
  Camera,
  Plus,
  Target,
  Scale,
  Ruler,
  Dumbbell,
  Trophy,
  Upload,
  ImageIcon,
  ChevronRight,
  BarChart3,
} from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("progress")

  const startingStats = {
    weight: 185,
    bodyFat: 18,
    benchPress: 135,
    squat: 185,
    deadlift: 225,
    date: "Jan 15, 2024",
  }

  const currentStats = {
    weight: 175,
    bodyFat: 12,
    benchPress: 225,
    squat: 315,
    deadlift: 405,
    date: "Dec 21, 2024",
  }

  const measurements = {
    starting: {
      chest: 38,
      waist: 34,
      arms: 14,
      thighs: 22,
    },
    current: {
      chest: 42,
      waist: 30,
      arms: 16,
      thighs: 24,
    },
  }

  const progressPhotos = [
    {
      id: 1,
      date: "Jan 15, 2024",
      type: "Starting",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 2,
      date: "Apr 15, 2024",
      type: "3 Months",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 3,
      date: "Aug 15, 2024",
      type: "6 Months",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 4,
      date: "Dec 21, 2024",
      type: "Current",
      image: "/placeholder.svg?height=200&width=150",
    },
  ]

  const achievements = [
    { title: "First 10lbs Lost", date: "Feb 2024", icon: "🎯" },
    { title: "Bench Press 200lbs", date: "May 2024", icon: "💪" },
    { title: "6 Month Streak", date: "Jul 2024", icon: "🔥" },
    { title: "Squat 300lbs", date: "Oct 2024", icon: "🏆" },
  ]

  if (activeTab === "progress") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Tab Navigation */}
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
            <button
              onClick={() => setActiveTab("progress")}
              className="flex-1 py-4 text-center text-sm font-medium text-blue-600 border-b-2 border-blue-600"
            >
              <BarChart3 className="w-5 h-5 mx-auto mb-1" />
              Progress
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4 space-y-4">
          {/* Progress Header */}
          <div className="text-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Your Journey</h1>
            <p className="text-gray-600 mt-1">11 months of transformation</p>
          </div>

          {/* Progress Photos */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-purple-600" />
                  Progress Photos
                </CardTitle>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Photo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {progressPhotos.map((photo) => (
                  <div key={photo.id} className="relative">
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt={`Progress photo ${photo.type}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <Badge className="w-full justify-center bg-black/70 text-white text-xs">{photo.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Photo Button */}
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Add your latest progress photo</p>
                <Button variant="outline" size="sm">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Upload Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Comparison */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Stats Transformation
              </CardTitle>
              <p className="text-sm text-gray-600">Starting vs Current</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Weight */}
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Scale className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-sm">Weight</p>
                    <p className="text-xs text-gray-600">
                      {startingStats.weight}lbs → {currentStats.weight}lbs
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">-10lbs</p>
                  <p className="text-xs text-gray-600">5.4% decrease</p>
                </div>
              </div>

              {/* Body Fat */}
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-sm">Body Fat</p>
                    <p className="text-xs text-gray-600">
                      {startingStats.bodyFat}% → {currentStats.bodyFat}%
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">-6%</p>
                  <p className="text-xs text-gray-600">33% decrease</p>
                </div>
              </div>

              {/* Strength Stats */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm flex items-center">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Strength Gains
                </h4>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bench Press</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{startingStats.benchPress}lbs</span>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                      <span className="font-semibold text-green-600">{currentStats.benchPress}lbs</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">+90lbs</Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Squat</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{startingStats.squat}lbs</span>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                      <span className="font-semibold text-green-600">{currentStats.squat}lbs</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">+130lbs</Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Deadlift</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{startingStats.deadlift}lbs</span>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                      <span className="font-semibold text-green-600">{currentStats.deadlift}lbs</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">+180lbs</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Body Measurements */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Ruler className="w-5 h-5 mr-2 text-orange-600" />
                Body Measurements
              </CardTitle>
              <p className="text-sm text-gray-600">Inches gained/lost</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Chest</p>
                  <p className="font-bold text-orange-600">
                    {measurements.starting.chest}" → {measurements.current.chest}"
                  </p>
                  <p className="text-xs text-green-600">+4"</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Waist</p>
                  <p className="font-bold text-blue-600">
                    {measurements.starting.waist}" → {measurements.current.waist}"
                  </p>
                  <p className="text-xs text-green-600">-4"</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Arms</p>
                  <p className="font-bold text-purple-600">
                    {measurements.starting.arms}" → {measurements.current.arms}"
                  </p>
                  <p className="text-xs text-green-600">+2"</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Thighs</p>
                  <p className="font-bold text-green-600">
                    {measurements.starting.thighs}" → {measurements.current.thighs}"
                  </p>
                  <p className="text-xs text-green-600">+2"</p>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Update Measurements
              </Button>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                Achievements
              </CardTitle>
              <p className="text-sm text-gray-600">Milestones reached</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.date}</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-700">Unlocked</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Journey Summary */}
          <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg border-0">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Amazing Transformation!</h3>
              <p className="text-sm opacity-90 mb-3">
                In 11 months, you've lost 10lbs, gained massive strength, and built incredible discipline.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">340</p>
                  <p className="text-xs opacity-90">Days Active</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">180</p>
                  <p className="text-xs opacity-90">Workouts</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">400</p>
                  <p className="text-xs opacity-90">lbs Total Gains</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
          <button
            onClick={() => setActiveTab("progress")}
            className="flex-1 py-4 text-center text-sm font-medium text-gray-500"
          >
            <BarChart3 className="w-5 h-5 mx-auto mb-1" />
            Progress
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        <p className="text-center text-gray-500 mt-8">Other tab content...</p>
        <Button onClick={() => setActiveTab("progress")} className="w-full mt-4">
          View Progress Tab
        </Button>
      </div>
    </div>
  )
}
