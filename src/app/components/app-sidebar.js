"use client";

import { useState } from "react";
import {
  Home,
  PieChart,
  Users,
  MapPin,
  Settings,
  Sun,
  Moon,
  Menu,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: PieChart, label: "Reports", href: "/reports" },
  { icon: Users, label: "User Management", href: "/users" },
  { icon: MapPin, label: "Stall Locations", href: "/admin" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Determine background and text color based on the theme
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const hoverColor =
    theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700";

  // Sidebar button styles based on the theme
  const buttonBgColor = theme === "light" ? "bg-blue-500" : "bg-gray-700";
  const buttonTextColor = "text-white";
  const buttonHoverColor =
    theme === "light" ? "hover:bg-blue-400" : "hover:bg-gray-600";

  return (
    <>
      <div className="">
        <button
          className="md:hidden fixed top-4 left-4 z-20 btn btn-primary border"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
        <motion.aside
          className={`${bgColor} ${textColor} w-64 min-h-screen p-4 fixed left-0 top-0 z-10 transform transition-all  ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold">LOGO</h1>
            <button
              className={`btn ${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} p-2 rounded transition-colors `}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center p-2 rounded ${hoverColor} transition-colors `}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.aside>
      </div>
    </>
  );
}
