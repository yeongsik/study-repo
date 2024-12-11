import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* 사용자 페이지 라우트 */}
                <Route path="/*" element={<UserPage />} />

                {/* 관리자 페이지 라우트 */}
                <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;
