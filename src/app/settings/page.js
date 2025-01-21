"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"
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

export default function SettingsPage() {
  const { theme } = useTheme()

  // Determine background, text color, input, and button colors based on the theme
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900"
  const textColor = theme === "light" ? "text-black" : "text-white"
  const cardBgColor = theme === "light" ? "bg-white" : "bg-gray-800"
  const inputBgColor = theme === "light" ? "bg-gray-100" : "bg-gray-700"
  const inputTextColor = theme === "light" ? "text-black" : "text-white"
  const buttonColor = theme === "light" ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-700 hover:bg-blue-800"
  const boxShadow = theme === "light" ? "shadow-lg" : "shadow-none" // Add shadow in light theme

  return (
    <div className={`${bgColor} min-h-screen flex flex-col transition-colors duration-500`}>
      <Header />
      <motion.div
        className={`container flex-1 py-6 ${textColor} transition-colors duration-500 `}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="mt-5 text-3xl font-bold mb-6 ">
          Settings
        </motion.h1>

        {/* Account Settings */}
        <motion.div variants={itemVariants} className={`card ${cardBgColor} ${boxShadow} p-6 rounded-lg transition-all duration-300`}>
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className={`block mb-1 ${textColor}`}>
                Name
              </label>
              <input id="name" className={`input ${inputBgColor} ${inputTextColor} p-3 rounded-md transition-colors duration-300`} defaultValue="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className={`block mb-1 ${textColor}`}>
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`input ${inputBgColor} ${inputTextColor} p-3 rounded-md transition-colors duration-300`}
                defaultValue="john@example.com"
              />
            </div>
            <div className="flex items-center">
              <input id="notifications" type="checkbox" className="mr-2" />
              <label htmlFor="notifications" className={textColor}>Enable email notifications</label>
            </div>
            <button type="submit" className={`btn ${buttonColor} text-white w-full p-3 rounded-md transition-all duration-300`}>
              Save Changes
            </button>
          </form>
        </motion.div>

        {/* Security Settings */}
        <motion.div variants={itemVariants} className={`card ${cardBgColor} ${boxShadow} p-6 rounded-lg mt-6 transition-all duration-300`}>
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="current-password" className={`block mb-1 ${textColor}`}>
                Current Password
              </label>
              <input id="current-password" type="password" className={`input ${inputBgColor} ${inputTextColor} p-3 rounded-md transition-colors duration-300`} />
            </div>
            <div>
              <label htmlFor="new-password" className={`block mb-1 ${textColor}`}>
                New Password
              </label>
              <input id="new-password" type="password" className={`input ${inputBgColor} ${inputTextColor} p-3 rounded-md transition-colors duration-300`} />
            </div>
            <div>
              <label htmlFor="confirm-password" className={`block mb-1 ${textColor}`}>
                Confirm New Password
              </label>
              <input id="confirm-password" type="password" className={`input ${inputBgColor} ${inputTextColor} p-3 rounded-md transition-colors duration-300`} />
            </div>
            <button type="submit" className={`btn ${buttonColor} text-white w-full p-3 rounded-md transition-all duration-300`}>
              Update Password
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}
