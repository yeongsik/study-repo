import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from '../components/Common/UserLayout';
import Home from '../components/User/Home';
import ProductList from '../components/User/ProductList';
import ProductDetails from '../components/User/ProductDetails';
import Cart from '../components/User/Cart';
import Checkout from '../components/User/Checkout';
import OrderHistory from '../components/User/OrderHistory';
import UserProfile from '../components/User/UserProfile';

function UserPage() {
    return (
        <UserLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </UserLayout>
    );
}

export default UserPage;
