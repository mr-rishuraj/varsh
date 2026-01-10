import OverviewTab from "./tabs/OverviewTab";
import ScheduleTab from "./tabs/ScheduleTab";
import HistoryTab from "./tabs/HistoryTab";
import PaymentsTab from "./tabs/PaymentsTab";

export default function DashboardTabs({ selectedTab, setSelectedTab, data }) {
  const tabs = ["overview", "schedule", "history", "payments"];

  return (
    <div className="bg-white rounded-2xl shadow-lg">
      <div className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-4 font-semibold ${
              selectedTab === tab
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-600"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="p-8">
        {selectedTab === "overview" && <OverviewTab data={data} />}
        {selectedTab === "schedule" && <ScheduleTab data={data} />}
        {selectedTab === "history" && <HistoryTab data={data} />}
        {selectedTab === "payments" && <PaymentsTab data={data} />}
      </div>
    </div>
  );
}
