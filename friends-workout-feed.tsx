"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Dumbbell,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  ThumbsUp,
  Flag,
  Users,
  Flame,
} from "lucide-react"

export default function Component() {
  const [showChallenge, setShowChallenge] = useState(false)
  const [isVerified, setIsVerified] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Friends Group Header */}
        <Card className="bg-white shadow-sm border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>SF</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="font-semibold text-sm">Gym Squad</p>
                  <p className="text-xs text-gray-500">3 friends • 2 active today</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700">
                <Users className="w-3 h-3 mr-1" />
                All Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Workout Post */}
        <Card className="bg-white shadow-sm border-0">
          {/* Post Header */}
          <div className="flex items-center justify-between p-4 pb-3">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">15</span>
                </div>
              </div>
              <div>
                <p className="font-semibold text-base">Mike</p>
                <p className="text-sm text-gray-600">Just finished • Gold's Gym</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    <Flame className="w-3 h-3 mr-1" />
                    15 Day Streak
                  </Badge>
                  {isVerified && (
                    <Badge className="text-xs bg-blue-100 text-blue-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Photo */}
          <div className="px-4 pb-3">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Workout progress"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                  <p className="text-sm font-medium mb-2">Leg Day Complete! 💪</p>
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div>
                      <Clock className="w-4 h-4 mx-auto mb-1" />
                      <p className="text-xs">1h 23m</p>
                    </div>
                    <div>
                      <Dumbbell className="w-4 h-4 mx-auto mb-1" />
                      <p className="text-xs">12 sets</p>
                    </div>
                    <div>
                      <Target className="w-4 h-4 mx-auto mb-1" />
                      <p className="text-xs">485 cal</p>
                    </div>
                    <div>
                      <TrendingUp className="w-4 h-4 mx-auto mb-1" />
                      <p className="text-xs">+5lbs PR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Alert */}
          {showChallenge && (
            <div className="mx-4 mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-800">Sarah is challenging this workout</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    "315lbs squat seems high for your last max. Can you show the video?"
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm" className="text-xs h-7 bg-blue-600 hover:bg-blue-700">
                      Share Video Proof
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      Explain
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Friend Reactions */}
          <div className="px-4 pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">2</span>
                  </div>
                </Button>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">3</span>
                  </div>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto text-red-600"
                onClick={() => setShowChallenge(true)}
              >
                <Flag className="w-4 h-4 mr-1" />
                <span className="text-sm">Challenge</span>
              </Button>
            </div>
          </div>

          {/* Friend Comments */}
          <div className="px-4 pb-4 space-y-3">
            <div className="flex items-start space-x-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">Alex</span> Nice work! That squat form looked solid 💪
                </p>
                <p className="text-xs text-gray-500 mt-1">2 min ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">Sarah</span> Wait, 315? Didn't you max at 275 last week? 🤔
                </p>
                <p className="text-xs text-gray-500 mt-1">5 min ago</p>
              </div>
            </div>

            {/* Add Comment */}
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>YU</AvatarFallback>
              </Avatar>
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 text-sm bg-gray-50 rounded-full px-3 py-2 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </Card>

        {/* Workout Summary */}
        <Card className="bg-white shadow-sm border-0">
          <CardContent className="p-4">
            <h3 className="font-semibold text-sm mb-3">Today's Workout</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Barbell Squat</span>
                <span className="font-medium">315lbs × 5</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Romanian Deadlift</span>
                <span className="font-medium">225lbs × 8</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Bulgarian Split Squat</span>
                <span className="font-medium">135lbs × 10</span>
              </div>
              <Button variant="ghost" className="w-full text-sm text-blue-600 mt-2">
                View Complete Log
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
