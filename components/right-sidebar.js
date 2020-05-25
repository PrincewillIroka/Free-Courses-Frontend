import React from "react";

import NotificationIcon from "mdi-react/NotificationsIcon";

export default function RightSidebar() {
  return (
    <div className="flex-column mt-6">
      <div className="flex align-center justify-between w-full px-4">
        <span className="font-medium">Notifications</span>
        <NotificationIcon/>
      </div>
      <h3 className="flex justify-center border-b-2 mx-1 mt-20 pb-1">Categories</h3>
    </div>
  );
}
