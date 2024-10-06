import React from 'react';
import { Link } from 'react-router-dom';
import { Home, UserCheck, FileText, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold">Attendance System</Link>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="flex items-center"><Home className="mr-1" size={18} /> Dashboard</Link>
          <Link to="/attendance" className="flex items-center"><UserCheck className="mr-1" size={18} /> Log Attendance</Link>
          <Link to="/reports" className="flex items-center"><FileText className="mr-1" size={18} /> Reports</Link>
          <Link to="/" className="flex items-center"><LogOut className="mr-1" size={18} /> Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;