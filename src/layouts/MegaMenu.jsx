import React, { memo } from "react";
import { MenuColumn } from "../components";
import { iconMenu, categories, otherCategories } from "../assets/data/megaMenu";
const MegaMenu = ({ el, svgPosition }) => {
    const { iconMain1, iconMain2 } = iconMenu;
    return (
        <div className={`dropDown`}>
            <img className="dropDown__img" src={svgPosition} alt="" style={{ marginLeft: `${el.position}px` }} />
            <div className="dropDown__inner">
                <div className="top-menu rowBase">
                    <div className="top-menu__main custom-scroll">
                        <MenuColumn
                            icon1={iconMain1}
                            icon2={iconMain2}
                            menuHeading={"All Departments"}
                            categories={categories}
                            otherCategories={otherCategories}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(MegaMenu);
