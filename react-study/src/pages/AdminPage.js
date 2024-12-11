import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Admin/Dashboard';
import ProductManagement from '../components/Admin/ProductManagement';
import OrderManagement from '../components/Admin/OrderManagement';
import UserManagement from '../components/Admin/UserManagement';
import Analytics from '../components/Admin/Analytics';
import Settings from '../components/Admin/Settings';

function AdminPage() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}

export default AdminPage;
