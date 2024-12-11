import React from 'react';
import Header from './Header';

function UserLayout({ children }) {
    return (
        <div>
            {/* 고정 헤더 */}
            <Header />

            {/* 메인 콘텐츠 */}
            <main className="container">{children}</main>
        </div>
    );
}

export default UserLayout;
