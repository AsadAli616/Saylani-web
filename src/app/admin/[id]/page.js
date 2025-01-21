"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Edit, MapPin, Users, Utensils, Clock } from "lucide-react";
import { Header } from "../../components/header";
import { EditModal } from "./modale";
import {
  branchFInd,
  createDinner,
  findBruch,
  findDinner,
  findLunch,
  findMeal,
} from "../../../service/userAction";
import NiceModal from "@ebay/nice-modal-react";
import CreateMeal from "../../components/Mealmodale";
import Createbreakfast from "../../components/Createbreakfast";
import CreateLunch from "../../components/CreateLunch";
import CreateDinner from "../../components/Createdinner";

import { Button } from "antd";
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

// Sample stall data - in a real app, this would come from an API
const stallData = {
  id: 1,
  name: "Karachi Central Food Distribution",
  location: "Block 7, Gulshan-e-Iqbal, Karachi",
  coordinates: "24.9028° N, 67.0794° E",
  operatingHours: "11:00 AM - 8:00 PM",
  dailyCapacity: 63000,
  currentMeals: [
    {
      name: "Chicken Biryani",
      servingTime: "12:00 PM - 3:00 PM",
      portions: 2000,
    },
    {
      name: "Daal Chawal",
      servingTime: "3:00 PM - 6:00 PM",
      portions: 1500,
    },
    {
      name: "Roti with Curry",
      servingTime: "6:00 PM - 8:00 PM",
      portions: 1800,
    },
  ],
  volunteers: 25,
  lastUpdated: "2024-01-13T14:30:00Z",
};

export default function StallDetails({ params }) {
  const { id } = React.use(params);
  const [data, setdata] = useState(null);
  const [button, setbutton] = useState(false);
  const [meal, setmeal] = useState(null);
  const [Luch, setluch] = useState(null);
  const [brunch, setbrunch] = useState(null);
  const [dinner, setdinner] = useState(null);

  const [Message, setMessage] = useState("");
  const showAntdModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(CreateMeal, { id: id, setbutton: setbutton, button });
  };
  const showbreakfastModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(Createbreakfast, {
      id: meal.id,
      setbutton: setbutton,
      button,
    });
  };
  const showLunchModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(CreateLunch, { id: meal.id, setbutton: setbutton, button });
  };
  const showDinnerModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(CreateDinner, { id: meal.id, setbutton: setbutton, button });
  };
  useEffect(() => {
    const findbranch = async () => {
      const obj = {
        branchId: id,
      };
      const { data } = await branchFInd(obj);

      if (data == null) {
        return setMessage("branch not found");
      }
      if (data.mealid !== null) {
        const obj = {
          id: data.mealid,
        };

        const meal = await findMeal(obj);

        const bog = {
          mealId: data.mealid,
        };
        console.log(bog);
        const findluch = await findLunch(bog);
        const findbruch = await findBruch(bog);
        const fndDinner = await findDinner(bog);
        setbrunch(findbruch.data);
        setluch(findluch.data);
        setdinner(fndDinner.data);
        setmeal(meal.data);
      }

      setdata(data);
      // console.log(data);
    };
    findbranch();
  }, [button]);
  console.log(meal);
  // console.log(Luch);
  // console.log(brunch);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();

  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const cardBgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";

  const handleEditSubmit = (data) => {
    console.log("Updated stall data:", data);
    // Here you would typically make an API call to update the stall data
    setIsModalOpen(false);
  };
  console.log(data);
  return (
    <>
      {data ? (
        <div
          className={`${bgColor} min-h-screen flex flex-col transition-all duration-500`}
        >
          <Header />
          <motion.div
            className="relative h-[300px] overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9KWW03jygbGhOnqvsAYnATiOX6113V.png"
              alt="Food Distribution Center"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">{data.branchName}</h1>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <p className="text-xl">{stallData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.main
            className={`flex-1 p-6 ${textColor}`}
            variants={containerVariants}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Stall Information</h2>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors`}
                  onClick={() => setIsModalOpen(true)}
                >
                  <Edit className="w-4 h-4" />
                  Edit Details
                </motion.button> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className={`${cardBgColor} border ${borderColor} rounded-lg p-6`}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    Quick Statistics
                  </h3>
                  {meal != null ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            Daily Capacity
                          </p>
                          <p className="font-semibold">
                            {meal?.totalPeopleMeal} people
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            Operating Hours
                          </p>
                          <p className="font-semibold">
                            {stallData.operatingHours}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            Active Volunteers
                          </p>
                          <p className="font-semibold">
                            {stallData.volunteers} volunteers
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=" p-10 flex justify-center ">
                      <button
                        onClick={() => showAntdModal()}
                        className=" p-4 bg-blue-700 rounded-2xl"
                      >
                        Create Meal
                      </button>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className={`${cardBgColor} border ${borderColor} rounded-lg p-6`}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold mb-4">Today's Meals</h3>
                  <div className="space-y-4">
                    {Luch ? (
                      <div className="flex items-start gap-3 border">
                        <Utensils className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <p className="font-semibold">{Luch.mealName}</p>
                          <p className="text-sm text-gray-500">
                            Serving Time: {Luch.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            Portions:{" "}
                            {Luch.userName
                              ? Luch.userName
                              : "updated by the Staff"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="border flex justify-center items-center p-2">
                        <Button
                          disabled={meal && false}
                          type="primary"
                          color="primary"
                          onClick={() => showbreakfastModal()}
                          // ghost={false}
                          // className="border bg-blue-800 text-white"
                          // disabled={true}
                        >
                          Create BreakFast
                        </Button>
                      </div>
                    )}
                    {brunch ? (
                      <div className="flex items-start gap-3 border">
                        <Utensils className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <p className="font-semibold">{brunch.mealName}</p>
                          <p className="text-sm text-gray-500">
                            Serving Time: {brunch.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            Portions:{" "}
                            {brunch.userName
                              ? brunch.userName
                              : "updated by the Staff"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="border flex justify-center items-center p-2">
                        <Button
                          type="primary"
                          color="primary"
                          onClick={() => showLunchModal()}
                          // ghost={false}
                          // className="border bg-blue-800 text-white"
                          // disabled={true}
                        >
                          Create Lunch
                        </Button>
                      </div>
                    )}
                    {dinner ? (
                      <div className="flex items-start gap-3 border">
                        <Utensils className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <p className="font-semibold">{dinner.mealName}</p>
                          <p className="text-sm text-gray-500">
                            Serving Time: {dinner.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            Portions:{" "}
                            {dinner.userName
                              ? dinner.userName
                              : "updated by the Staff"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="border flex justify-center items-center p-2">
                        <Button
                          type="primary"
                          color="primary"
                          onClick={() => showDinnerModal()}
                          // ghost={false}
                          // className="border bg-blue-800 text-white"
                          // disabled={true}
                        >
                          Create Dinner
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  className={`${cardBgColor} border ${borderColor} rounded-lg p-6 md:col-span-2`}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    Location Details
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-500">Full Address:</p>
                    <p className="font-medium">{data.branchName}</p>
                    <p className="text-gray-500 mt-4">Coordinates:</p>
                    <p className="font-medium">
                      {data.latitude + "° N" + " " + data.longitude + "° N"}
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-sm text-gray-500 mt-6 text-center"
              >
                Last updated: {new Date(stallData.lastUpdated).toLocaleString()}
              </motion.p>
            </div>
          </motion.main>
          <EditModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            stallData={stallData}
            onSubmit={handleEditSubmit}
          />
          <button onClick={() => showAntdModal()}>asad</button>
        </div>
      ) : (
        <div>{Message}</div>
      )}
    </>
  );
}
