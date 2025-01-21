"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"
import { Download } from "lucide-react"
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

export default function ReportsPage() {
  const { theme } = useTheme()

  // Determine background, text color, and hover color based on the theme
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900"
  const textColor = theme === "light" ? "text-white" : "text-white"
  const hover = theme === "light" ? "hover:text-white" : "text-white"

  const cardBgColor = theme === "light" ? "bg-white" : "bg-gray-800"
  const hoverColor = theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
  const boxShadow = theme === "light" ? "shadow-lg" : "shadow-none" // Add shadow in light theme

  return (
    <div className={`${bgColor} min-h-screen flex flex-col transition-all duration-500`}>
      <Header />
      <motion.div
        className={`container flex-1 py-6 ${textColor} transition-all duration-500`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-6">
          Reports
        </motion.h1>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {["Monthly Report", "Quarterly Report", "Annual Report"].map(
            (report, index) => (
              <motion.div
                key={report}
                variants={itemVariants}
                className={`card ${cardBgColor} ${hoverColor} p-4 rounded-lg ${boxShadow} transition-all duration-300`}
              >
                <h2 className="text-xl font-semibold mb-2">{report}</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Last generated: {index + 1} {index === 0 ? "day" : "days"} ago
                </p>
                <button className="btn btn-primary">
                  <Download className="inline-block w-4 h-4 mr-2" />
                  Download
                </button>
              </motion.div>
            )
          )}
        </motion.div>
        <motion.div variants={itemVariants} className={`card mt-6 ${cardBgColor} ${boxShadow}`}>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p>
            Here you can add charts or graphs to show an overview of your
            reports.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
