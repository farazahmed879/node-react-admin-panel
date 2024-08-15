"use client"
import { useAuth } from '@/context/AuthContext';
import React from 'react';

const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;