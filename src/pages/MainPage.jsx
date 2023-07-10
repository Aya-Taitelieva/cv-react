import React from "react";

import Logo from "../image/photo_5244497991946061220_x (1).jpg";

const MainPage = () => {
  return (
    <div className="main-page">
      <div>
        <h1>Aigerim Taitelieva</h1>
        <h3>Frontend Developer</h3>
      </div>
      <img src={Logo} />
    </div>
  );
};

export default MainPage;
