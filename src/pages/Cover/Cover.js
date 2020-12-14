import React from "react";
import Welcome from "../../components/cover/Welcome";
import Login from "../../components/cover/Login";
import RegisterComponent from "../../components/cover/Register/Register";
import "./Cover.scss";

const Cover = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        
          <div className="left-container">
            <Welcome />
          </div>
          
          
          <div className="right-container bg-primary">
            <Login />
          </div>
          <RegisterComponent />
        
      </div>
    </div>
  );
};

export default Cover;
