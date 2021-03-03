import React from "react";

import NotificationIcon from "mdi-react/NotificationsIcon";

export default function RightSidebar() {
  return (
    <div className="flex-column mt-6">
      <div className="flex align-center justify-between w-full px-4">
        <span className="font-medium">Notifications</span>
        <NotificationIcon />
      </div>
      <h3 className="flex justify-center border-b-2 mx-1 mt-20 pb-1">
        Categories
      </h3>
      <div className="flex-col px-4">
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          Artificial Intelligence
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          Cloud Computing
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          Data Science
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          Database Management
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          DevOps
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          Programming
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          Machine Learning
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          Robotics
        </span>
        <span className="text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200">
          UI/UX
        </span>
      </div>
    </div>
  );
}
