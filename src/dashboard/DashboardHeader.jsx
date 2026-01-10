export default function DashboardHeader({ data, onBack }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Restaurant Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {data.name}</p>
        </div>

        <button
          onClick={onBack}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg"
        >
          Back to Home
        </button>
      </div>

      <p className="text-gray-500">
        Member since {data.registrationDate}
      </p>
    </div>
  );
}
