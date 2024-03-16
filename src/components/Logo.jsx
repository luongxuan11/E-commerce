import React from "react";

const Logo = ({ logoImage, logoText }) => {
   return (
      <div className="logo">
         <img src={logoImage} alt="grocerymart" />
         <h1>grocerymart</h1>
      </div>
   );
};

export default Logo;
