import React from "react";
import { Logo } from "../components";
import images from "../assets/imgs/images";
import { nav } from "../assets/menuManager";
import icons from "../assets/icons";

const Header = () => {
    const { logo, Avatar, user, moreHeader } = images;
    const { CiSearch, CiShoppingCart, CiHeart } = icons;
    return (
        <header className="header">
            <div className="container top-bar">
                <img src={moreHeader} alt="grocerymart" className="top-bar__more"/>
                <Logo logoImage={logo} logoText={"grocerymart"} />
                <ul className="nav__box rowBase">
                    {nav.map((item) => {
                        return (
                            <li key={item.id} className="rowBase">
                                <span>{item.text}</span>
                                {item.icon}
                            </li>
                        );
                    })}
                </ul>
                <div className="top-action rowBase">
                    <CiSearch className="top-action__search" />
                    <div className="top-action__group rowBase">
                        <span className="rowBase">
                            <CiHeart className="icon" />
                            03
                        </span>
                        <small className="top-action__separate"></small>
                        <span className="rowBase">
                            <CiShoppingCart className="icon" />
                            $65.42
                        </span>
                    </div>
                </div>
                <div className="top-user">
                    <img src={user} alt="grocerymart" className="top-user__avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
