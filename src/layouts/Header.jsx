import React from "react";
import { Logo } from "../components";
import images from "../assets/imgs/images";
import { nav } from "../assets/menuManager";
import icons from "../assets/icons";

const Header = () => {
    const { logo, Avatar } = images;
    const { CiSearch, CiShoppingCart, CiHeart } = icons;
    return (
        <header className="header">
            <div className="container">
                <Logo logoImage={logo} logoText={"grocerymart"} />
                <ul className="nav__box">
                    {nav.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>{item.text}</span>
                                <span>{item.icon}</span>
                            </li>
                        );
                    })}
                </ul>
                <div className="top-action">
                    <CiSearch className="top-action__search" />
                    <div className="top-action__group">
                        <span>
                            <CiHeart />
                            03
                        </span>
                        <small className="top-action__separate"></small>
                        <span>
                            <CiShoppingCart />
                            $65.42
                        </span>
                    </div>
                </div>
                <div className="top-user">
                    <img src={Avatar} alt="grocerymart" className="top-user__avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
