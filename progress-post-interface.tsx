"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
  Flame,
  Clock,
  Dumbbell,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Camera,
} from "lucide-react"

export default function Component() {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [showChallenge, setShowChallenge] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Post Card */}
        <Card className="bg-white shadow-sm border-0">
          {/* Post Header */}
          <div className="flex items-center justify-between p-4 pb-3">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <Flame className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-sm">mike_johnson</p>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    Day 15 🔥
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">Gold's Gym • 2 hours ago</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>

          {/* Post Image/Video */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Workout progress"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-black/70 text-white text-xs">
                <Camera className="w-3 h-3 mr-1" />
                Progress Photo
              </Badge>
            </div>
            <div className="absolute top-3 right-3">
              <Badge className="bg-orange-500 text-white text-xs">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            </div>
          </div>

          {/* Workout Stats Bar */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 m-4 rounded-lg">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-xs font-semibold text-gray-700">1h 23m</p>
                <p className="text-xs text-gray-500">Duration</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Dumbbell className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-xs font-semibold text-gray-700">12</p>
                <p className="text-xs text-gray-500">Exercises</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Target className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-xs font-semibold text-gray-700">485</p>
                <p className="text-xs text-gray-500">Calories</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                </div>
                <p className="text-xs font-semibold text-gray-700">+5lbs</p>
                <p className="text-xs text-gray-500">PR</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)} className="p-0 h-auto">
                <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
              </Button>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </Button>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Share className="w-6 h-6 text-gray-700" />
              </Button>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsSaved(!isSaved)} className="p-0 h-auto">
              <Bookmark className={`w-6 h-6 ${isSaved ? "fill-gray-700 text-gray-700" : "text-gray-700"}`} />
            </Button>
          </div>

          {/* Likes and Caption */}
          <div className="px-4 pb-3">
            <p className="font-semibold text-sm mb-2">247 likes</p>
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-semibold">mike_johnson</span> Crushed leg day! 💪 New squat PR at 315lbs. The
                grind never stops!
                <span className="text-blue-600">#LegDay #SquatPR #FitBlock #NeverSkipLegDay</span>
              </p>
            </div>
          </div>

          {/* Challenge Alert */}
          {showChallenge && (
            <div className="mx-4 mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-800">Workout Challenge</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    <span className="font-semibold">sarah_fit</span> is questioning if you really hit 315lbs. Provide
                    video proof to maintain your streak!
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      Upload Proof
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs h-7">
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Comments Preview */}
          <div className="px-4 pb-3">
            <Button variant="ghost" className="p-0 h-auto text-gray-500 text-sm">
              View all 23 comments
            </Button>
            <div className="mt-2 space-y-1">
              <p className="text-sm">
                <span className="font-semibold">sarah_fit</span> Beast mode! 🔥 But are you sure about that 315? 🤔
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto ml-2 text-xs text-red-600"
                  onClick={() => setShowChallenge(true)}
                >
                  Challenge
                </Button>
              </p>
              <p className="text-sm">
                <span className="font-semibold">gym_bro_alex</span> Respect! My legs are shaking just watching this 😅
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
          </div>

          <Separator />

          {/* Add Comment */}
          <div className="flex items-center space-x-3 p-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>
            <input type="text" placeholder="Add a comment..." className="flex-1 text-sm bg-transparent outline-none" />
            <Button variant="ghost" size="sm" className="text-blue-600 font-semibold text-sm">
              Post
            </Button>
          </div>
        </Card>

        {/* Workout Details Card */}
        <Card className="bg-white shadow-sm border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">Workout Details</h3>
              <Badge variant="outline" className="text-xs">
                Leg Day
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Barbell Squat</span>
                <span className="text-sm font-semibold">315lbs × 5 reps</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Romanian Deadlift</span>
                <span className="text-sm font-semibold">225lbs × 8 reps</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Bulgarian Split Squat</span>
                <span className="text-sm font-semibold">135lbs × 10 reps</span>
              </div>
              <Button variant="ghost" className="w-full text-sm text-blue-600">
                View Full Workout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
