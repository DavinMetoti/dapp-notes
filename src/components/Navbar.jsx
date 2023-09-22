import React from "react";

function Navbar({ onSearch }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/" className="center">
                    <img src="/logo.png" alt="logo" width="6%" />
                    <span className="text-logo">DAPP NOTES</span>
                </a>
            </div>
            <div className="search-container">
                <input onChange={(event) => onSearch(event)} type="text" name="search" placeholder="Search..." className="search-input" />
                <a href="#" className="search-btn">
                    <i className="fas fa-search"></i>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
