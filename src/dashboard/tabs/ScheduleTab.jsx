import { Calendar, Clock, CheckCircle } from "lucide-react";

export default function ScheduleTab({ data }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Upcoming Pickup Schedule
      </h3>

      <div className="space-y-4">
        {data.upcomingSchedule.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`rounded-full p-4 ${
                  index === 0 ? "bg-green-100" : "bg-gray-200"
                }`}
              >
                <Calendar
                  className={`h-6 w-6 ${
                    index === 0
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {item.date}
                </h4>
                <p className="text-gray-600">
                  Pickup Time: {item.time}
                </p>
              </div>
            </div>

            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                index === 0
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
          <Clock className="h-5 w-5 text-blue-600 mr-2" />
          Pickup Instructions
        </h4>

        <ul className="space-y-2 text-gray-700">
          {[
            "Please have UCO containers ready 15 minutes before scheduled time",
            "Ensure oil is cooled and properly sealed in provided containers",
            "Our team will provide collection receipt for your records"
          ].map((text, i) => (
            <li key={i} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
