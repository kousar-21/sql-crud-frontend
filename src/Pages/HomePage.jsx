import React from 'react';
import EmployeeForm from '../Components/EmployeeForm';
import EmployeeTable from '../Components/EmployeeTable';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4 sm:py-6 lg:py-8">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl">
                {/* Header Section */}
                <header className="text-center mb-6 sm:mb-8 lg:mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Employee Management System
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                        Efficiently manage your company's employee data with our intuitive system.
                        Add new employees and manage existing records with ease.
                    </p>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Form Section - Full width on mobile, then 1/3 on lg screens */}
                    <div className="lg:col-span-1">
                        <EmployeeForm />
                    </div>

                    {/* Table Section - Full width on mobile, then 2/3 on lg screens */}
                    <div className="lg:col-span-2">
                        <EmployeeTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;