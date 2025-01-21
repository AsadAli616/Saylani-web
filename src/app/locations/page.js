"use client";

import { motion } from "framer-motion";
import { Header } from "../components/header";
// import { MapPin, Navigation } from "lucide-react";
import { useTheme } from "next-themes";
import Map1 from "../components/map";
const mockEntries = [
  {
    id: 4,
    title: "Clifton Beach, Karachi",
    lat: 24.8233,
    lng: 67.032,
    country: "Pakistan",
  },
  {
    id: 5,
    title: "Karachi Marina Club",
    lat: 24.8178,
    lng: 67.0348,
    country: "Pakistan",
  },
  {
    id: 6,
    title: "Faisal Mosque, Karachi",
    lat: 24.9056,
    lng: 67.125,
    country: "Pakistan",
  },
  {
    id: 7,
    title: "Mazar-e-Quaid, Karachi",
    lat: 24.8589,
    lng: 67.0581,
    country: "Pakistan",
  },
  {
    id: 8,
    title: "Manora Island, Karachi",
    lat: 24.808,
    lng: 66.9757,
    country: "Pakistan",
  },
  {
    id: 9,
    title: "Karachi Zoo",
    lat: 24.8765,
    lng: 67.069,
    country: "Pakistan",
  },
  {
    id: 10,
    title: "Shahrah-e-Faisal, Karachi",
    lat: 24.86,
    lng: 67.08,
    country: "Pakistan",
  },
  {
    id: 11,
    title: "The National Museum of Pakistan, Karachi",
    lat: 24.8585,
    lng: 67.0332,
    country: "Pakistan",
  },
  {
    id: 12,
    title: "Karachi Beach Park",
    lat: 24.843,
    lng: 67.075,
    country: "Pakistan",
  },
  {
    id: 13,
    title: "Hawke's Bay Beach, Karachi",
    lat: 24.8278,
    lng: 67.1773,
    country: "Pakistan",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const LocationsPage = () => {
  const { theme } = useTheme();

  // Placeholder function for the "Current Location" button

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <Header />
      <motion.div
        className="container flex-1 py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mb-6"
        >
          <h1
            className={`text-3xl font-bold ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Stall Locations
          </h1>
          <div className="flex space-x-4">
            <button
              className={`btn btn-primary ${
                theme === "light" ? "bg-blue-500" : "bg-blue-700"
              }`}
            >
              Add Location
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="card w-full flex-1 flex items-center justify-center"
        >
          <Map1 markers={mockEntries} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LocationsPage;
