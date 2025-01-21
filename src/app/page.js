"use client"

import { motion } from "framer-motion"
import { Header } from "./components/header"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { useTheme } from "next-themes"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 }
]

const recentActivities = [
  {
    id: 1,
    user: "John Doe",
    action: "added 100 meals",
    stall: "Karachi Central",
    time: "2 hours ago"
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "updated stall info",
    stall: "Lahore North",
    time: "4 hours ago"
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "reported an issue",
    stall: "Islamabad East",
    time: "6 hours ago"
  },
  {
    id: 4,
    user: "Sarah Brown",
    action: "added new volunteers",
    stall: "Peshawar South",
    time: "8 hours ago"
  }
]

export default function Home() {
  const { theme } = useTheme()

  // Determine background, text color, chart color based on the theme
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900"
  const textColor = theme === "light" ? "text-black" : "text-white"
  const cardBgColor = theme === "light" ? "bg-white" : "bg-gray-800"
  const hoverColor = theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
  const boxShadow = theme === "light" ? "shadow-lg" : "shadow-none" // Add shadow in light theme
  const chartColor = theme === "light" ? "#3498db" : "#2ecc71" // Light theme: blue, Dark theme: green

  return (
    <div className={`${bgColor} min-h-screen flex flex-col transition-all duration-500`}>
      <Header />
      <motion.main
        className={`flex-1 p-6 ${textColor} transition-all duration-100`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {[ 
            {
              title: "Total Stalls",
              value: "1,234",
              change: "+20% from last month"
            },
            {
              title: "People Served Today",
              value: "15,678",
              change: "+5% from yesterday"
            },
            {
              title: "Active Cities",
              value: "50",
              change: "+2 new cities this week"
            },
            {
              title: "Total Donors",
              value: "3,567",
              change: "+12% from last month"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`card ${cardBgColor} ${hoverColor} p-4 rounded-lg ${boxShadow} transition-all duration-300`}
              variants={itemVariants}
            >
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-3xl font-bold mb-1">{item.value}</p>
              <p className="text-sm text-gray-400">{item.change}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="grid gap-6 mt-6 md:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div className={`card ${cardBgColor} ${hoverColor} p-6 ${boxShadow}`} variants={itemVariants}>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill={chartColor} /> {/* Dynamic chart color */}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          <motion.div className={`card ${cardBgColor} ${hoverColor} p-6 ${boxShadow}`} variants={itemVariants}>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              {recentActivities.map(activity => (
                <li key={activity.id} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{activity.user}</p>
                    <p className="text-sm text-gray-400">
                      {activity.action} at {activity.stall}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  )
}
