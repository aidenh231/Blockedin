"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  Dumbbell,
  Shield,
  MapPin,
  Plus,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Target,
  Timer,
  Users,
} from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("feed")
  const [blockingEnabled, setBlockingEnabled] = useState(true)
  const [autoDetection, setAutoDetection] = useState(true)

  const blockedApps = [
    { name: "Instagram", icon: "📷", blocked: true },
    { name: "TikTok", icon: "🎵", blocked: true },
    { name: "Twitter", icon: "🐦", blocked: true },
    { name: "YouTube", icon: "📺", blocked: false },
    { name: "Snapchat", icon: "👻", blocked: true },
    { name: "Facebook", icon: "📘", blocked: true },
    { name: "Netflix", icon: "🎬", blocked: true },
    { name: "Games", icon: "🎮", blocked: true },
  ]

  const allowedApps = [
    { name: "FitBlock", icon: "💪", reason: "Workout logging" },
    { name: "Spotify", icon: "🎧", reason: "Music" },
    { name: "Phone", icon: "📞", reason: "Emergency calls" },
    { name: "Messages", icon: "💬", reason: "Emergency texts" },
  ]

  const todaysWorkout = {
    name: "Push Day",
    exercises: [
      { name: "Bench Press", sets: "4 x 8-10", weight: "185lbs" },
      { name: "Overhead Press", sets: "3 x 8-10", weight: "135lbs" },
      { name: "Incline Dumbbell Press", sets: "3 x 10-12", weight: "70lbs" },
      { name: "Tricep Dips", sets: "3 x 12-15", weight: "Bodyweight" },
    ],
    duration: "60-75 min",
    calories: "400-500",
  }

  if (activeTab === "planner") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-md mx-auto flex">
            <button
              onClick={() => setActiveTab("feed")}
              className="flex-1 py-4 text-center text-sm font-medium text-gray-500"
            >
              <Users className="w-5 h-5 mx-auto mb-1" />
              Friends
            </button>
            <button
              onClick={() => setActiveTab("planner")}
              className="flex-1 py-4 text-center text-sm font-medium text-blue-600 border-b-2 border-blue-600"
            >
              <Calendar className="w-5 h-5 mx-auto mb-1" />
              Plan
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4 space-y-4">
          {/* Today's Workout */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Today's Workout</CardTitle>
                <Badge className="bg-green-100 text-green-700">
                  <Calendar className="w-3 h-3 mr-1" />
                  Scheduled
                </Badge>
              </div>
              <p className="text-sm text-gray-600">Tuesday, Dec 21 • 6:00 PM</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{todaysWorkout.name}</h3>
                  <Dumbbell className="w-6 h-6 text-blue-600" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Timer className="w-4 h-4 text-gray-600" />
                    <span>{todaysWorkout.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-gray-600" />
                    <span>{todaysWorkout.calories}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">Exercises</h4>
                {todaysWorkout.exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-sm">{exercise.name}</p>
                      <p className="text-xs text-gray-500">{exercise.sets}</p>
                    </div>
                    <p className="text-sm text-gray-700">{exercise.weight}</p>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <MapPin className="w-4 h-4 mr-2" />
                Start Workout at Gym
              </Button>
            </CardContent>
          </Card>

          {/* Focus Mode Settings */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Shield className="w-5 h-5 mr-2 text-orange-500" />
                Focus Mode
              </CardTitle>
              <p className="text-sm text-gray-600">Control app blocking during workouts</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Master Toggle */}
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Enable Focus Mode</p>
                  <p className="text-xs text-gray-600">Block distracting apps at the gym</p>
                </div>
                <Switch checked={blockingEnabled} onCheckedChange={setBlockingEnabled} />
              </div>

              {blockingEnabled && (
                <>
                  {/* Auto Detection */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Auto-detect gym location</p>
                      <p className="text-xs text-gray-600">Automatically activate when at gym</p>
                    </div>
                    <Switch checked={autoDetection} onCheckedChange={setAutoDetection} />
                  </div>

                  <Separator />

                  {/* Blocked Apps */}
                  <div>
                    <h4 className="font-medium text-sm mb-3 flex items-center">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Blocked Apps
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {blockedApps.map((app, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 p-2 rounded-lg border ${
                            app.blocked ? "bg-red-50 border-red-200" : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <span className="text-lg">{app.icon}</span>
                          <span className="text-sm font-medium flex-1">{app.name}</span>
                          <Switch checked={app.blocked} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Always Allowed */}
                  <div>
                    <h4 className="font-medium text-sm mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Always Allowed
                    </h4>
                    <div className="space-y-2">
                      {allowedApps.map((app, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                          <span className="text-lg">{app.icon}</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{app.name}</p>
                            <p className="text-xs text-gray-600">{app.reason}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency Override */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800">Emergency Override</p>
                        <p className="text-xs text-yellow-700 mt-1">
                          Hold power button + volume up for 3 seconds to disable blocking in emergencies
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Gym Locations */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                Gym Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Gold's Gym Downtown</p>
                  <p className="text-xs text-gray-600">0.2 miles away • Primary gym</p>
                </div>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Planet Fitness</p>
                  <p className="text-xs text-gray-600">1.5 miles away</p>
                </div>
                <Switch size="sm" />
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add New Gym Location
              </Button>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="bg-white shadow-sm border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-500" />
                This Week's Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { day: "Mon", workout: "Rest Day", completed: true },
                { day: "Tue", workout: "Push Day", scheduled: true },
                { day: "Wed", workout: "Pull Day", upcoming: true },
                { day: "Thu", workout: "Legs", upcoming: true },
                { day: "Fri", workout: "Push Day", upcoming: true },
                { day: "Sat", workout: "Pull Day", upcoming: true },
                { day: "Sun", workout: "Rest Day", upcoming: true },
              ].map((day, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-medium">{day.day}</span>
                    </div>
                    <span className="text-sm font-medium">{day.workout}</span>
                  </div>
                  {day.completed && <CheckCircle className="w-4 h-4 text-green-600" />}
                  {day.scheduled && <Badge className="bg-blue-100 text-blue-700 text-xs">Today</Badge>}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Return the original friends feed for the "feed" tab
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex">
          <button
            onClick={() => setActiveTab("feed")}
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
        <p className="text-center text-gray-500 mt-8">Friends feed content would go here...</p>
        <Button onClick={() => setActiveTab("planner")} className="w-full mt-4">
          View Workout Planner
        </Button>
      </div>
    </div>
  )
}
