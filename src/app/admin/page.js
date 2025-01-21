"use client";
import { motion } from "framer-motion";
import { Header } from "../components/header";
// import { MapPin, Navigation } from "lucide-react";
import { useTheme } from "next-themes";
import { MapPin, Search, Edit, Trash2 } from "lucide-react";
import Map1 from "../components/map";
import { useEffect, useState } from "react";
import { branch } from "../../service/userAction";
import { useRouter } from "next/router";
import Link from "next/link";
const mockEntries = [
  {
    id: 1,
    title: "Clifton Beach, Karachi",
    lat: 24.8233,
    lng: 67.032,
    country: "Pakistan",
  },
  {
    id: 2,
    title: "Karachi Marina Club",
    lat: 24.8178,
    lng: 67.0348,
    country: "Pakistan",
  },
  {
    id: 3,
    title: "Faisal Mosque, Karachi",
    lat: 24.9056,
    lng: 67.125,
    country: "Pakistan",
  },
  {
    id: 4,
    title: "Mazar-e-Quaid, Karachi",
    lat: 24.8589,
    lng: 67.0581,
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

const containerVariants1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants1 = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const locations = [
  {
    id: 1,
    name: "Karachi Central",
    address: "123 Main St, Karachi",
    manager: "John Doe",
  },
  {
    id: 2,
    name: "Lahore North",
    address: "456 Oak Rd, Lahore",
    manager: "Jane Smith",
  },
  {
    id: 3,
    name: "Islamabad East",
    address: "789 Pine Ave, Islamabad",
    manager: "Bob Johnson",
  },
  {
    id: 4,
    name: "Peshawar South",
    address: "101 Elm Blvd, Peshawar",
    manager: "Alice Brown",
  },
  {
    id: 5,
    name: "Quetta West",
    address: "202 Cedar Ln, Quetta",
    manager: "Charlie Davis",
  },
];

const Admin = () => {
  const [drop, setdrop] = useState([]);
  const { theme } = useTheme();
  useEffect(() => {
    const branchdata = async () => {
      const { data } = await branch();
      setdrop(data);
      console.log(data);
    };
    branchdata();
  }, []);
  console.log(drop);
  return (
    <>
      {" "}
      <div
        className={`flex flex-col min-h-screen ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        }`}
      >
        <div
          className={`flex flex-col ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          }`}
        >
          <Header />
          <motion.div
            className="container flex-1 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-between mt-10 items-center "
            >
              <h1
                className={`text-3xl font-bold  ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                Admin{" "}
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
              className="card w-full flex-1 flex mt-2 items-center justify-center"
            >
              <Map1 markers={mockEntries} />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="container  "
          variants={containerVariants1}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants1} className="card">
            <div className="flex mb-4">
              <input className="input mr-2" placeholder="Search locations..." />
              <button
                className={`btn btn-secondary ${
                  theme === "light" ? "bg-gray-300" : "bg-gray-700"
                }`}
              >
                <Search className="inline-block w-4 h-4 mr-2" /> Search
              </button>
            </div>
            <table className={`table  `}>
              <thead>
                <tr>
                  <th className={`${theme === "light" && "text-white"}`}>
                    Name
                  </th>
                  <th className={`${theme === "light" && "text-white"}`}>
                    Address
                  </th>
                  <th className={`${theme === "light" && "text-white"}`}>
                    Meal
                  </th>
                  <th className={`${theme === "light" && "text-white"}`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {drop.map((location) => (
                  <tr key={location.id}>
                    <td className={`${theme === "light" && "text-white"}`}>
                      {location.branchName}
                    </td>
                    <td className={`${theme === "light" && "text-white"}`}>
                      {location.latitude + " " + location.longitude}
                    </td>
                    <td className={`${theme === "light" && "text-white"}`}>
                      {location.mealid ? location.mealid : "meal not created"}
                    </td>
                    <td>
                      <Link href={`/admin/${location.id}`}>
                        <button
                          className={`btn btn-secondary mr-2 ${
                            theme === "light" ? "bg-gray-300" : "bg-gray-700"
                          }`}
                        >
                          <Edit className="inline-block w-4 h-4" />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
export default Admin;
