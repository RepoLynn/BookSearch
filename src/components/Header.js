import React from "react";
import { Link } from "react-router-dom";

console.log(123)

const Header = () => {
    return (
        <header className="header--root">
            <Link to={"search"}>Search</Link>
            <Link to={"wishlist"}>Wishlist</Link>
        </header>
    );
};

export default Header;
