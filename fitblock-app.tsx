"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Home,
  Calendar,
  Users,
  Target,
  Trophy,
  BarChart3,
  Dumbbell,
  Shield,
  Plus,
  Camera,
  Scale,
  Ruler,
  UserPlus,
  Search,
  User,
  ArrowRight,
} from "lucide-react"

export default function Component() {
  // App state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [activeTab, setActiveTab] = useState("home")

  // User data (empty initially)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    profileComplete: false,
    stats: {
      weight: "",
      bodyFat: "",
      benchPress: "",
      squat: "",
      deadlift: "",
    },
    measurements: {
      chest: "",
      waist: "",
      arms: "",
      thighs: "",
    },
    goals: {
      weightGoal: "",
      fitnessGoal: "",
      workoutFrequency: "",
    },
  })

  // App settings (default values)
  const [appSettings, setAppSettings] = useState({
    blockingEnabled: false,
    autoDetection: false,
    focusModeActive: false,
    workoutInProgress: false,
  })

  // Empty data arrays
  const [friends, setFriends] = useState([])
  const [friendRequests, setFriendRequests] = useState([])
  const [workoutLog, setWorkoutLog] = useState([])
  const [userPosts, setUserPosts] = useState([])
  const [progressPhotos, setProgressPhotos] = useState([])
  const [gymLocations, setGymLocations] = useState([])
  const [blockedApps, setBlockedApps] = useState([
    { name: "Instagram", icon: "📷", blocked: false },
    { name: "TikTok", icon: "🎵", blocked: false },
    { name: "Twitter", icon: "🐦", blocked: false },
    { name: "YouTube", icon: "📺", blocked: false },
    { name: "Snapchat", icon: "👻", blocked: false },
    { name: "Facebook", icon: "📘", blocked: false },
    { name: "Netflix", icon: "🎬", blocked: false },
    { name: "Games", icon: "🎮", blocked: false },
  ])

  // Default workout template
  const [todaysWorkout, setTodaysWorkout] = useState({
    name: "",
    exercises: [],
    duration: "",
    calories: "",
  })

  // Login/Signup handlers
  const handleLogin = (e) => {
    e.preventDefault()
    if (userData.email && userData.password) {
      setIsLoggedIn(true)
      if (!userData.profileComplete) {
        setOnboardingStep(1)
      }
    }
  }

  const handleSignup = (e) => {
    e.preventDefault()
    if (userData.name && userData.email && userData.password) {
      setIsLoggedIn(true)
      setOnboardingStep(1) // Start onboarding
    }
  }

  const handleOnboardingNext = () => {
    if (onboardingStep < 4) {
      setOnboardingStep(onboardingStep + 1)
    } else {
      setUserData((prev) => ({ ...prev, profileComplete: true }))
      setOnboardingStep(0)
    }
  }

  const handleSkipOnboarding = () => {
    setUserData((prev) => ({ ...prev, profileComplete: true }))
    setOnboardingStep(0)
  }

  // Login/Signup Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold text-gray-900">
                {showSignup ? "Join FitBlock" : "Welcome Back"}
              </CardTitle>
              <p className="text-gray-600 leading-relaxed">
                {showSignup
                  ? "The social fitness app that blocks distractions and keeps you accountable"
                  : "Sign in to continue your fitness journey"}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={showSignup ? handleSignup : handleLogin} className="space-y-4">
              {showSignup && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={userData.name}
                    onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                    className="h-11 bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={userData.email}
                  onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                  className="h-11 bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={userData.password}
                  onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
                  className="h-11 bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium"
              >
                {showSignup ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="text-center">
              <button
                onClick={() => setShowSignup(!showSignup)}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                {showSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Onboarding Flow
  if (onboardingStep > 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${step <= onboardingStep ? "bg-orange-500" : "bg-gray-200"}`}
                />
              ))}
            </div>
            <CardTitle className="text-xl font-bold">
              {onboardingStep === 1 && "Tell us about yourself"}
              {onboardingStep === 2 && "Your fitness stats"}
              {onboardingStep === 3 && "Body measurements"}
              {onboardingStep === 4 && "Set your goals"}
            </CardTitle>
            <p className="text-sm text-gray-600">Step {onboardingStep} of 4 - Help us personalize your experience</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {onboardingStep === 1 && (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <Button variant="outline" className="mb-4">
                    <Camera className="w-4 h-4 mr-2" />
                    Add Profile Photo
                  </Button>
                </div>
                <div>
                  <Label className="text-sm font-medium">Age</Label>
                  <Input type="number" placeholder="25" className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm font-medium">Fitness Level</Label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            )}

            {onboardingStep === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Weight (lbs)</Label>
                    <Input
                      type="number"
                      placeholder="185"
                      value={userData.stats.weight}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          stats: { ...prev.stats, weight: e.target.value },
                        }))
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Body Fat %</Label>
                    <Input
                      type="number"
                      placeholder="18"
                      value={userData.stats.bodyFat}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          stats: { ...prev.stats, bodyFat: e.target.value },
                        }))
                      }
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Bench Press Max (lbs)</Label>
                  <Input
                    type="number"
                    placeholder="135"
                    value={userData.stats.benchPress}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        stats: { ...prev.stats, benchPress: e.target.value },
                      }))
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">Squat Max (lbs)</Label>
                  <Input
                    type="number"
                    placeholder="185"
                    value={userData.stats.squat}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        stats: { ...prev.stats, squat: e.target.value },
                      }))
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">Deadlift Max (lbs)</Label>
                  <Input
                    type="number"
                    placeholder="225"
                    value={userData.stats.deadlift}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        stats: { ...prev.stats, deadlift: e.target.value },
                      }))
                    }
                    className="mt-1"
                  />
                </div>
              </div>
            )}

            {onboardingStep === 3 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 text-center">
                  These measurements help track your progress over time
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Chest (inches)</Label>
                    <Input
                      type="number"
                      placeholder="38"
                      value={userData.measurements.chest}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          measurements: { ...prev.measurements, chest: e.target.value },
                        }))
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Waist (inches)</Label>
                    <Input
                      type="number"
                      placeholder="34"
                      value={userData.measurements.waist}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          measurements: { ...prev.measurements, waist: e.target.value },
                        }))
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Arms (inches)</Label>
                    <Input
                      type="number"
                      placeholder="14"
                      value={userData.measurements.arms}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          measurements: { ...prev.measurements, arms: e.target.value },
                        }))
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Thighs (inches)</Label>
                    <Input
                      type="number"
                      placeholder="22"
                      value={userData.measurements.thighs}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          measurements: { ...prev.measurements, thighs: e.target.value },
                        }))
                      }
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {onboardingStep === 4 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Weight Goal</Label>
                  <select
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    value={userData.goals.weightGoal}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        goals: { ...prev.goals, weightGoal: e.target.value },
                      }))
                    }
                  >
                    <option value="">Select your goal</option>
                    <option value="lose">Lose Weight</option>
                    <option value="maintain">Maintain Weight</option>
                    <option value="gain">Gain Weight</option>
                  </select>
                </div>
                <div>
                  <Label className="text-sm font-medium">Primary Fitness Goal</Label>
                  <select
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    value={userData.goals.fitnessGoal}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        goals: { ...prev.goals, fitnessGoal: e.target.value },
                      }))
                    }
                  >
                    <option value="">Select your goal</option>
                    <option value="strength">Build Strength</option>
                    <option value="muscle">Build Muscle</option>
                    <option value="endurance">Improve Endurance</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>
                <div>
                  <Label className="text-sm font-medium">Workout Frequency</Label>
                  <select
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    value={userData.goals.workoutFrequency}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        goals: { ...prev.goals, workoutFrequency: e.target.value },
                      }))
                    }
                  >
                    <option value="">How often do you plan to workout?</option>
                    <option value="2-3">2-3 times per week</option>
                    <option value="4-5">4-5 times per week</option>
                    <option value="6-7">6-7 times per week</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <Button variant="outline" onClick={handleSkipOnboarding} className="flex-1">
                Skip for now
              </Button>
              <Button onClick={handleOnboardingNext} className="flex-1 bg-orange-500 hover:bg-orange-600">
                {onboardingStep === 4 ? "Complete Setup" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Empty State Components
  const EmptyHomeTab = () => (
    <div className="max-w-md mx-auto p-4 space-y-4 pb-20">
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to FitBlock!</h1>
        <p className="text-gray-600 mt-2">Ready to start your fitness journey?</p>
      </div>

      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border-0">
        <CardContent className="p-6 text-center">
          <Dumbbell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Start Your First Workout</h3>
          <p className="text-sm opacity-90 mb-4">Begin tracking your fitness journey and build healthy habits</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            <Plus className="w-4 h-4 mr-2" />
            Create Workout Plan
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-0">
        <CardContent className="p-6 text-center">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Find Workout Partners</h3>
          <p className="text-sm text-gray-600 mb-4">Connect with friends to stay motivated and accountable</p>
          <Button variant="outline" onClick={() => setActiveTab("friends")}>
            <UserPlus className="w-4 h-4 mr-2" />
            Add Friends
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-0">
        <CardContent className="p-6 text-center">
          <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Enable Focus Mode</h3>
          <p className="text-sm text-gray-600 mb-4">Block distracting apps during workouts to stay focused</p>
          <Button variant="outline" onClick={() => setActiveTab("focus")}>
            <Shield className="w-4 h-4 mr-2" />
            Set Up Focus Mode
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const EmptyFriendsTab = () => (
    <div className="max-w-md mx-auto p-4 space-y-4 pb-20">
      <div className="text-center py-8">
        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">No Friends Yet</h2>
        <p className="text-gray-600">Connect with friends to share workouts and stay motivated together</p>
      </div>

      <Card className="bg-white shadow-sm border-0">
        <CardContent className="p-6">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Search className="w-4 h-4 mr-2" />
            Search for Friends
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-0">
        <CardHeader>
          <CardTitle className="text-lg">Get Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">1</span>
            </div>
            <div>
              <p className="font-medium text-sm">Search for friends</p>
              <p className="text-xs text-gray-600">Find people you know by username</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-bold text-sm">2</span>
            </div>
            <div>
              <p className="font-medium text-sm">Share your workouts</p>
              <p className="text-xs text-gray-600">Post progress and motivate each other</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-bold text-sm">3</span>
            </div>
            <div>
              <p className="font-medium text-sm">Challenge each other</p>
              <p className="text-xs text-gray-600">Keep each other accountable</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const EmptyWorkoutsTab = () => (
    <div className="max-w-md mx-auto p-4 space-y-4 pb-20">
      <div className="text-center py-8">
        <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">No Workouts Planned</h2>
        <p className="text-gray-600">Create your first workout plan to get started</p>
      </div>

      <Card className="bg-white shadow-sm border-0">
        <CardContent className="p-6">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
            <Plus className="w-4 h-4 mr-2" />
            Create Workout Plan
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">Or choose a template:</p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto p-3 flex-col">
                <Dumbbell className="w-6 h-6 mb-2" />
                <span className="text-xs">Push/Pull/Legs</span>
              </Button>
              <Button variant="outline" className="h-auto p-3 flex-col">
                <Target className="w-6 h-6 mb-2" />
                <span className="text-xs">Full Body</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const EmptyFocusTab = () => (
    <div className="max-w-md mx-auto p-4 space-y-4 pb-20">
      <div className="text-center py-8">
        <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Focus Mode Not Set Up</h2>
        <p className="text-gray-600">Block distracting apps during workouts to stay focused</p>
      </div>

      <Card className="bg-white shadow-sm border-0">
        <CardHeader>
          <CardTitle className="text-lg">Enable Focus Mode</CardTitle>
          <p className="text-sm text-gray-600">Get distraction-free workouts</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <div>
              <p className="font-medium text-sm">Block distracting apps</p>
              <p className="text-xs text-gray-600">Automatically during gym sessions</p>
            </div>
            <Switch
              checked={appSettings.blockingEnabled}
              onCheckedChange={(checked) => setAppSettings((prev) => ({ ...prev, blockingEnabled: checked }))}
            />
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            <Shield className="w-4 h-4 mr-2" />
            Set Up Focus Mode
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const EmptyProgressTab = () => (
    <div className="max-w-md mx-auto p-4 space-y-4 pb-20">
      <div className="text-center py-8">
        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">No Progress Data Yet</h2>
        <p className="text-gray-600">Start working out to track your fitness journey</p>
      </div>

      <Card className="bg-white shadow-sm border-0">
        <CardContent className="p-6 space-y-4">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            <Camera className="w-4 h-4 mr-2" />
            Add First Progress Photo
          </Button>

          <Button variant="outline" className="w-full">
            <Scale className="w-4 h-4 mr-2" />
            Log Starting Weight
          </Button>

          <Button variant="outline" className="w-full">
            <Ruler className="w-4 h-4 mr-2" />
            Record Body Measurements
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg border-0">
        <CardContent className="p-4 text-center">
          <Trophy className="w-8 h-8 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Your Journey Starts Here!</h3>
          <p className="text-sm opacity-90">Every fitness transformation begins with a single workout</p>
        </CardContent>
      </Card>
    </div>
  )

  // Tab Navigation Component
  const TabNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto flex">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex-1 py-3 text-center text-xs font-medium ${
            activeTab === "home" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Home className={`w-5 h-5 mx-auto mb-1 ${activeTab === "home" ? "text-blue-600" : "text-gray-500"}`} />
          Home
        </button>
        <button
          onClick={() => setActiveTab("friends")}
          className={`flex-1 py-3 text-center text-xs font-medium ${
            activeTab === "friends" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Users className={`w-5 h-5 mx-auto mb-1 ${activeTab === "friends" ? "text-blue-600" : "text-gray-500"}`} />
          Friends
        </button>
        <button
          onClick={() => setActiveTab("workouts")}
          className={`flex-1 py-3 text-center text-xs font-medium ${
            activeTab === "workouts" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Dumbbell
            className={`w-5 h-5 mx-auto mb-1 ${activeTab === "workouts" ? "text-blue-600" : "text-gray-500"}`}
          />
          Workouts
        </button>
        <button
          onClick={() => setActiveTab("focus")}
          className={`flex-1 py-3 text-center text-xs font-medium ${
            activeTab === "focus" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Shield className={`w-5 h-5 mx-auto mb-1 ${activeTab === "focus" ? "text-blue-600" : "text-gray-500"}`} />
          Focus
        </button>
        <button
          onClick={() => setActiveTab("progress")}
          className={`flex-1 py-3 text-center text-xs font-medium ${
            activeTab === "progress" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <BarChart3
            className={`w-5 h-5 mx-auto mb-1 ${activeTab === "progress" ? "text-blue-600" : "text-gray-500"}`}
          />
          Progress
        </button>
      </div>
    </div>
  )

  // Main App Content
  return (
    <div className="min-h-screen bg-gray-50">
      {activeTab === "home" && <EmptyHomeTab />}
      {activeTab === "friends" && <EmptyFriendsTab />}
      {activeTab === "workouts" && <EmptyWorkoutsTab />}
      {activeTab === "focus" && <EmptyFocusTab />}
      {activeTab === "progress" && <EmptyProgressTab />}

      <TabNavigation />
    </div>
  )
}
