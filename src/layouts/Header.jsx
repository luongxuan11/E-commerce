import React, { useRef, useState } from "react";
import { Logo } from "../components";
import images from "../assets/imgs/images";
import { nav } from "../assets/menuManager";
import icons from "../assets/icons";
import MegaMenu from "./MegaMenu";

const Header = () => {
    const { logo, user, moreHeader, position } = images;
    const { CiSearch, CiShoppingCart, CiHeart } = icons;
    const liElement = useRef([]);
    const [positionEl, setPositionEl] = useState({
        id: null,
        position: null,
    });

    const handleHover = (index) => {
        if (index) {
            setPositionEl({
                id: index,
                position: liElement.current[index].offsetLeft + 10,
            });
        } else {
            setPositionEl({
                id: null,
                position: null,
            });
        }
    };
    return (
        <header className="header">
            <div className="container top-bar">
                <img src={moreHeader} alt="grocerymart" className="top-bar__more" />
                <Logo logoImage={logo} logoText={"grocerymart"} />
                <ul className="nav__box rowBase">
                    {nav.map((item) => {
                        return (
                            <li
                                onMouseEnter={() => handleHover(item.id)}
                                onMouseLeave={() => handleHover(null)}
                                ref={(el) => (liElement.current[item.id] = el)}
                                key={item.id}
                                className="rowBase"
                            >
                                <span>{item.text}</span>
                                {item.icon}
                                {positionEl.id === item.id ? <MegaMenu el={positionEl} svgPosition={position} /> : ""}
                                {/* <MegaMenu el={positionEl} svgPosition={position} /> */}
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
