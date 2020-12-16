import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "./EditarPerfil.scss";

const EditarPerfil = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    bio: "",
    imagen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <MainLayout>
      <div className="container mt-4">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                className="form-control"
                id="firstName"
                placeholder="First name"
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                className="form-control"
                id="lastName"
                placeholder="Last name"
                onChange={handleChange}
                disabled
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 col-sm-12">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                disabled
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 col-sm-12">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                className="form-control"
                id="phone"
                placeholder="+5698625898"
                onChange={handleChange}
              ></input>
            </div>
            {/*
            <div className="form-group col-md-6 col-sm-12">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="**********"
              ></input>
            </div>
            */}
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 col-sm-12">
              <label htmlFor="birthdate">Fecha de nacimiento</label>
              <input
                type="text"
                name="birthdate"
                value={user.birthdate}
                className="form-control"
                id="birthdate"
                placeholder="04/09/1996"
                onChange={handleChange}
                disabled
              ></input>
            </div>
            {/*<div className="form-group col-md-6 col-sm-12">
              <label htmlFor="gender">Gender</label>
              <select className="form-control" id="gender">
                <option>Male</option>
                <option>Female</option>
              </select>
          </div>*/}
            <div className="form-group col-md-12 col-sm-12">
              <label htmlFor="bio">Biografia</label>
              <input
                type="text"
                name="bio"
                value={user.bio}
                className="form-control"
                id="bio"
                placeholder="Biografia"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-row mr-1 mt-4 d-flex justify-content-end">
            <Link
              to="/perfil"
              type="button"
              className="btn btn-secondary w-25 mr-1"
            >
              Volver
            </Link>
            <button
              className="btn btn-primary w-25 ml-1"
              type="submit"
              /*
              onClick={() => {
                actions.editContact(id, user, history);
              }}
              */
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default EditarPerfil;
