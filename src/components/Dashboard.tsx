import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, FileText, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/attendance" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <UserCheck size={48} className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Log Attendance</h2>
          <p className="text-gray-600">Record attendance using facial recognition or QR code.</p>
        </Link>
        <Link to="/reports" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FileText size={48} className="text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">View Reports</h2>
          <p className="text-gray-600">Access and analyze attendance reports.</p>
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users size={48} className="text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-gray-800">150</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;