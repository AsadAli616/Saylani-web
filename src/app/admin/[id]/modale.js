"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "next-themes";

export function EditModal({ isOpen, onClose, stallData, onSubmit }) {
  const { theme } = useTheme();
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const inputBg = theme === "light" ? "bg-gray-50" : "bg-gray-700";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 border"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div
            className={`relative w-full max-w-2xl p-6 ${bgColor} ${textColor} rounded-lg shadow-xl`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold mb-6">Edit Stall Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Stall Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={stallData.name}
                    className={`w-full p-2 rounded-md border ${borderColor} ${inputBg}`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={stallData.location}
                    className={`w-full p-2 rounded-md border ${borderColor} ${inputBg}`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Operating Hours
                    </label>
                    <input
                      type="text"
                      name="operatingHours"
                      defaultValue={stallData.operatingHours}
                      className={`w-full p-2 rounded-md border ${borderColor} ${inputBg}`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Daily Capacity
                    </label>
                    <input
                      type="number"
                      name="dailyCapacity"
                      defaultValue={stallData.dailyCapacity}
                      className={`w-full p-2 rounded-md border ${borderColor} ${inputBg}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Coordinates
                  </label>
                  <input
                    type="text"
                    name="coordinates"
                    defaultValue={stallData.coordinates}
                    className={`w-full p-2 rounded-md border ${borderColor} ${inputBg}`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Number of Volunteers
                  </label>
                  <input
                    type="number"
                    name="volunteers"
                    defaultValue={stallData.volunteers}
                    className={`w-full p-2 rounded-md border ${borderColor} ${inputBg}`}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
