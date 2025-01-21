"use client";

import { motion } from "framer-motion";
import { Bell, Check, Trash2, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";
import { clearHistory } from "../../service/revilidate";
import {
  Accept,
  branch,
  DeletNotification,
  findRequest,
} from "../../service/userAction";
import { set, useForm } from "react-hook-form";
const data1 = [
  {
    id: 1,
    branchName: "Saylani Karachi Main Branch",
    latitude: 24.8607, // Latitude for Karachi
    longitude: 67.0011,
  },
  {
    id: 2,
    branchName: "Saylani Karachi Korangi Branch",
    latitude: 24.8296, // Example latitude for Korangi
    longitude: 67.2604,
  },
  {
    id: 3,
    branchName: "Saylani Karachi Saddar Branch",
    latitude: 24.86, // Example latitude for Saddar
    longitude: 67.0091,
  },
  {
    id: 4,
    branchName: "Saylani Karachi Gulshan Branch",
    latitude: 24.9328, // Example latitude for Gulshan
    longitude: 67.07, // Example longitude for Gulshan
  },
];
export function Header() {
  const [isnotOpen, setisnotOpen] = useState(false);
  const [data, setdata] = useState([{}]);
  const [Effect, setEffect] = useState(true);
  const [drop, setdrop] = useState([{}]);
  const [id, setid] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [branch, setbaranch] = useState("");
  console.log(branch);
  const { theme, setTheme } = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log;
  const onSubmit = async (data13) => {
    const obj = {
      id: id,
      request: true,
      branchid: branch,
    };
    console.log(obj);
    const { message } = await Accept(obj);
    console.log(message);
    if (message[0] == 1) {
      setEffect(!Effect);
    }
  };

  useEffect(() => {
    const FindRequest = async () => {
      const { data } = await findRequest();
      setdata(data);
    };
    // const branchdata = async () => {
    //   const { data } = await branch();
    //   setdrop(data);
    //   console.log(data);
    // };
    // branchdata();

    FindRequest();
  }, [Effect]);

  const Delete = async (id) => {
    const obj = {
      id: id,
    };
    const { message } = await DeletNotification(obj);
    setEffect(!Effect);
    console.log(message);
  };
  const Logout = () => {
    Cookies.remove("User");
    clearHistory();
  };
  // Set background and text color based on the theme
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const hoverColor =
    theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700";

  // Button styles based on the theme
  const buttonBgColor = theme === "light" ? "bg-blue-500" : "bg-gray-700";
  const buttonTextColor = "text-white";
  const buttonHoverColor =
    theme === "light" ? "hover:bg-blue-400" : "hover:bg-gray-600";

  return (
    <motion.header
      className={`${bgColor} ${textColor} py-4 transition-all duration-300`} // Added transition-all
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.h2
          className={`text-2xl font-bold`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Dashboard
        </motion.h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className={`btn ${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} p-2 rounded transition-colors duration-300`}
              onClick={() => setisnotOpen(!isnotOpen)}
            >
              <Bell className="w-5 h-5" />
            </button>
            {isnotOpen && (
              <div
                className={`absolute z-10 right-0 mt-2  w-[35vw] ${
                  theme === "light" ? "bg-gray-100" : "bg-gray-700"
                } rounded-md shadow-lg`}
              >
                {data.map((data, ind) => (
                  <div>
                    <div
                      key={data.id}
                      className="flex gap-5 p-4 justify-between"
                    >
                      <div className="flex text-[.7vw] leading-vw] flex-col">
                        <span>Name:Asad</span>
                        <span>Email:Asad@gmail.con</span>
                      </div>
                      <form
                        className="flex gap-4 items-center"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="">
                          <select
                            className="border"
                            {...register("branchid")}
                            onChange={(e) => setbaranch(e.target.value)}
                          >
                            {data1.map((data, ind) => (
                              <option
                                key={ind}
                                name="branchid"
                                value={data.id}
                                // value={data.branchName}
                              >
                                {data.branchName}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex gap-4">
                          <button
                            onClick={() => {
                              setid(data.id);
                              Delete(data.id);
                            }}
                            className={`btn  ${
                              theme === "light" ? "bg-gray-300" : "bg-red-700"
                            }`}
                          >
                            <Trash2 className="inline-block w-4 h-4" />
                          </button>
                          <button
                            type="submit"
                            onClick={() => {
                              setid(data.id);
                            }}
                            className={`btn btn-secondary ${
                              theme === "light"
                                ? "bg-gray-300 hover:bg-gray-400"
                                : "bg-gray-700 hover:bg-gray-600"
                            } rounded-md p-2`}
                          >
                            <Check className="inline-block w-4 h-4" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className={`btn ${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} p-2 rounded transition-colors duration-300`}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <User className="w-5 h-5" />
            </button>
            {isProfileOpen && (
              <div
                className={`absolute z-10  right-0 mt-2 w-48 ${
                  theme === "light" ? "bg-gray-100" : "bg-gray-700"
                } rounded-md shadow-lg`}
              >
                <button className={`block px-4 py-2 text-sm ${hoverColor}`}>
                  Profile
                </button>
                <button className={`block px-4 py-2 text-sm ${hoverColor}`}>
                  Settings
                </button>
                <button
                  onClick={Logout}
                  className={`block px-4 py-2 text-sm ${hoverColor}`}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
