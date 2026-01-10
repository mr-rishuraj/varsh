import { useState } from "react";

// data
import { restaurantData } from "./data";

// layout components
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import DashboardTabs from "./DashboardTabs";

export default function RestaurantDashboard({ onBack }) {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <DashboardHeader
          data={restaurantData}
          onBack={onBack}
        />

        {/* Top Stats */}
        <StatsCards data={restaurantData} />

        {/* Tabs + Content */}
        <DashboardTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          data={restaurantData}
        />

      </div>
    </div>
  );
}
