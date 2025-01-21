"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Header } from "../components/header";
import { Header3 } from "../components/loginHeader";
import { useForm } from "react-hook-form";
import { signUp } from "../../service/userAction";
import Cookies from "js-cookie";
import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

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

export default function SignUp() {
  const [api, contextHolder] = notification.useNotification();

  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const openNotification = () => {
    api.open({
      message: "Account Update",
      description:
        " Your Account has been created wait for saylani to accept your request",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const onSubmit = async (data1) => {
    let { data } = await signUp(data1);

    if (data !== null) {
      reset();
      openNotification();
      console.log(data);
      // window.location.href = "/login";
    }
  };

  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const inputBgColor = theme === "light" ? "bg-gray-100" : "bg-gray-800";
  const buttonBgColor =
    theme === "light"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-green-500 hover:bg-green-600";

  return (
    <div
      className={`${bgColor} min-h-screen flex flex-col transition-all duration-500`}
    >
      {contextHolder}
      <Header3 />
      <motion.main
        className={`flex-1 flex items-center justify-center p-6 ${textColor}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full max-w-md" variants={containerVariants}>
          <motion.h1
            className="text-3xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            Sign Up
          </motion.h1>
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name")}
                className={`w-full px-3 py-2 rounded-md ${inputBgColor} ${textColor}`}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                className={`w-full px-3 py-2 rounded-md ${inputBgColor} ${textColor}`}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
                className={`w-full px-3 py-2 rounded-md ${inputBgColor} ${textColor}`}
                required
              />
            </div>
            {/* <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-3 py-2 rounded-md ${inputBgColor} ${textColor}`}
                required
              />
            </div> */}
            <motion.button
              type="submit"
              className={`w-full ${buttonBgColor} text-white font-bold py-2 px-4 rounded-md`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.main>
    </div>
  );
}
