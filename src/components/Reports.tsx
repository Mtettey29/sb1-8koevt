import React from 'react';
import { BarChart, Calendar } from 'lucide-react';

const Reports: React.FC = () => {
  // Mock data for demonstration
  const attendanceData = [
    { date: '2024-03-01', present: 45, absent: 5 },
    { date: '2024-03-02', present: 48, absent: 2 },
    { date: '2024-03-03', present: 47, absent: 3 },
    { date: '2024-03-04', present: 50, absent: 0 },
    { date: '2024-03-05', present: 46, absent: 4 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Attendance Reports</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" size={24} /> Recent Attendance
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Present</th>
                <th className="py-2 px-4 border-b text-left">Absent</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((day) => (
                <tr key={day.date}>
                  <td className="py-2 px-4 border-b">{day.date}</td>
                  <td className="py-2 px-4 border-b">{day.present}</td>
                  <td className="py-2 px-4 border-b">{day.absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart className="mr-2" size={24} /> Attendance Overview
        </h2>
        <p className="text-gray-600 mb-4">
          This section would typically include more detailed charts and graphs showing attendance trends over time.
          For a production app, you might use a charting library like Chart.js or Recharts to visualize this data.
        </p>
      </div>
    </div>
  );
};

export default Reports;