import React, { memo } from "react";

const MenuColumn = ({ icon1, icon2, menuHeading, categories, otherCategories }) => {
    return (
        <>
            <div className="menu-column__title rowBase">
                <div className="icon">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                </div>
                <div className="menu-column__list">
                    <h2 className="heading">{menuHeading}</h2>
                    <ul className="rowBase">
                        {categories.map((item) => {
                            return (
                                <li className="menu-column__list--hover" key={item.id}>
                                    {item.text}

                                    {/* submenu */}
                                    <div className="sub-menu__wrapper custom-scroll">
                                        <div className="sub-menu__inner  rowBase">
                                            <div className="icon">
                                                <img src={item.icon1} alt="" />
                                                <img src={item.icon2} alt="" />
                                            </div>
                                            <div className="menu-column__list">
                                                <h2 className="heading">{item.text}</h2>
                                                <ul className="rowBase">
                                                    {item.sub.map((item) => {
                                                        return (
                                                            <li className="menu-column__list--hover" key={item.id}>
                                                                {item.text}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* menu other */}
                                        {otherCategories.map((el) => {
                                            if (el.as !== item.as) {
                                                return (
                                                    <div key={el.id} className="sub-menu__other sub-menu__inner rowBase">
                                                        <div className="icon">
                                                            <img src={el.icon1} alt="" />
                                                            <img src={el.icon2} alt="" />
                                                        </div>
                                                        <div className="menu-column__list">
                                                            <h2 className="heading">{el.text}</h2>
                                                            <ul className="rowBase">
                                                                {el.sub.map((subItem) => {
                                                                    return (
                                                                        <li className="menu-column__list--hover" key={subItem.id}>
                                                                            {subItem.text}
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </div>
                                </li>
                            );
                        })}
                        <li className="menu-column__list--hover">Coming soon 👋</li>
                        <li className="menu-column__list--hover">Coming soon 👋</li>
                        <li className="menu-column__list--hover">Coming soon 👋</li>
                        <li className="menu-column__list--hover">Coming soon 👋</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default memo(MenuColumn);
