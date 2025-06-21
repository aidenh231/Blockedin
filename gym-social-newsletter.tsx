import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dumbbell, Instagram, Twitter, Shield, Zap, Users, Target } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-6">
          {/* Brand Logo */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-gray-900">Join FitBlock Beta</CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed">
              The social fitness app that blocks distractions, tracks progress, and keeps you accountable with friends.
            </CardDescription>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600">Workout Streaks</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs text-gray-600">Friend Challenges</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600">Focus Mode</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Sign-up Options */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or sign up with email</span>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-11 bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium"
            >
              Get Early Access
            </Button>
          </form>

          {/* Beta Info */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-700 font-medium mb-1">🚀 Limited Beta Access</p>
            <p className="text-xs text-gray-600">
              Be among the first to experience distraction-free workouts and social accountability
            </p>
          </div>

          {/* Additional Links */}
          <div className="text-center space-y-2">
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                Terms
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                Privacy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                Support
              </a>
            </div>
          </div>

          {/* Trust Indicator Footer */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Your data stays private. No spam, ever.</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
