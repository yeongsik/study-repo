import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-light border-bottom fixed-top shadow-sm">
            <div className="container d-flex align-items-center justify-content-between py-2">
                {/* 로고 */}
                <Link to="/" className="text-decoration-none">
                    <h4 className="m-0 text-primary">Clothing Mall</h4>
                </Link>

                {/* 카테고리 메뉴 */}
                <nav className="d-none d-md-flex">
                    <Link to="/products?category=men" className="nav-link">
                        Men
                    </Link>
                    <Link to="/products?category=women" className="nav-link">
                        Women
                    </Link>
                    <Link to="/products?category=kids" className="nav-link">
                        Kids
                    </Link>
                    <Link to="/products?category=accessories" className="nav-link">
                        Accessories
                    </Link>
                </nav>

                {/* 사용자 메뉴 */}
                <div className="d-flex gap-3">
                    <Link to="/mypage" className="btn btn-outline-primary btn-sm">
                        My Page
                    </Link>
                    <Link to="/cart" className="btn btn-outline-success btn-sm">
                        Cart
                    </Link>
                    <Link to="/login" className="btn btn-outline-secondary btn-sm">
                        Login
                    </Link>
                    <Link to="/my-likes" className="btn btn-outline-danger btn-sm">
                        My Likes
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
