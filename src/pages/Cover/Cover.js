import React from "react";
import Welcome from "../../components/cover/Welcome";
import Login from "../../components/cover/Login";
import Register from "../../components/cover/Register";
import "./Cover.scss";

const Cover = () => {
  return (
    <div className="cover-container">
      <div className="row">
        
          <div className="left-container">
            <Welcome />
          </div>
          
          
          <div className="right-container bg-primary">
            <Login />
          </div>
          <Register />
        
      </div>
    </div>
  );
};

export default Cover;
