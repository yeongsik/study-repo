import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div
            className={`sidebar bg-light vh-100 position-fixed ${
                isOpen ? 'd-block' : 'd-none'
            }`}
            style={{ width: '250px', left: 0, top: 0, zIndex: 1050 }}
        >
            <button
                className="btn btn-close m-3"
                onClick={toggleSidebar}
                aria-label="Close Sidebar"
            ></button>
            <h5 className="p-3">Shop Categories</h5>
            <ul className="nav flex-column px-3">
                <li className="nav-item mb-2">
                    <Link to="/products?category=men" className="nav-link">Men's Clothing</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/products?category=women" className="nav-link">Women's Clothing</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/products?category=kids" className="nav-link">Kids' Clothing</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/products?category=accessories" className="nav-link">Accessories</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">My Profile</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
