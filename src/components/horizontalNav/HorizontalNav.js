import React from "react";

import userIMG from "./../../assets/user.png";

import "./horizontalNav.scss";

export default function HorizontalNav() {
  return (
    <div className="horizontalNav">
      <div className="menu">
        <div className="userProfile">
          <div className="img">
            <img src={userIMG} alt="userPicture" />
          </div>
        </div>
      </div>
    </div>
  );
}
