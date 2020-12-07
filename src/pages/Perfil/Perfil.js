import React/*, { useState }*/ from "react";
import MainLayout from "../../layouts/MainLayout";
import './Perfil.scss';

function Perfil() {
  let url = "#";

  /*const [editForm, setEditForm] = useState();

  const handleClick = () => setEditForm();*/

  return (
    <div>
      <MainLayout>
        <div className="container mt-5 w-100">
          <div className="row">
            <div className="col-md-2 col-sm-12 text-center">
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-3">
                  <img
                    src="https://place-hold.it/150"
                    id="profileImage"
                    className="rounded-circle"
                    alt="profileImage"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <a href={url} type="button" className="btn btn-danger">
                    Edit Image
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 border-right border-left px-3 py-2">
              <form>
                <fieldset disabled>
                  <div className="form-row">
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="First name"
                      />
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12 col-sm-12">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="example@gmail.com"
                      ></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="phone">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="+5698625898"
                      ></input>
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="password">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="**********"
                      ></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="region">Region</label>
                      <input
                        type="text"
                        className="form-control"
                        id="region"
                        placeholder="Region Example"
                      />
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="comuna">Comuna</label>
                      <input
                        type="text"
                        className="form-control"
                        id="comuna"
                        placeholder="Comuna Example"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="birthdate">Birthdate</label>
                      <input
                        type="text"
                        className="form-control"
                        id="birthdate"
                        placeholder="04/09/1996"
                      ></input>
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                      <label for="gender">Gender</label>
                      <select className="form-control" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <div className="form-row d-flex justify-content-end mr-1">
                  <button className="btn btn-danger">Edit Profile</button>
                </div>
              </form>
            </div>
            <div className="col-md-5 col-sm-12 px-5 py-2">
              <form>
                <div className="form-row border-bottom">
                  <div className="form-group col-md-12 col-sm-12">
                    <label for="availableDays">Available Days</label>
                    <select className="form-control" id="availableDays">
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </select>
                  </div>
                  <div className="form-row ">
                    <label for="availableHours" className="ml-2">
                      Available Hours
                    </label>
                    <div className="form-group col-md-9 form-inline">
                      <div className="input-group mb-3 ml-1 mr-3">
                        <div className="input-group-prepend">
                          <label className="input-group-text" for="fromHour">
                            From
                          </label>
                        </div>
                        <select className="custom-select" id="fromHour">
                          <option selected value="0">
                            00hs
                          </option>
                          <option value="1">01hs</option>
                          <option value="2">02hs</option>
                          <option value="3">03hs</option>
                          <option value="4">04hs</option>
                          <option value="5">05hs</option>
                          <option value="6">06hs</option>
                          <option value="7">07hs</option>
                          <option value="8">08hs</option>
                          <option value="9">09hs</option>
                          <option value="10">10hs</option>
                          <option value="11">11hs</option>
                          <option value="12">12hs</option>
                          <option value="13">13hs</option>
                          <option value="14">14hs</option>
                          <option value="15">15hs</option>
                          <option value="16">16hs</option>
                          <option value="17">17hs</option>
                          <option value="18">18hs</option>
                          <option value="19">19hs</option>
                          <option value="20">20hs</option>
                          <option value="21">21hs</option>
                          <option value="22">22hs</option>
                          <option value="23">23hs</option>
                        </select>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label className="input-group-text" for="fromHour">
                            To
                          </label>
                        </div>
                        <select className="custom-select" id="fromHour">
                          <option value="0">00hs</option>
                          <option value="1">01hs</option>
                          <option value="2">02hs</option>
                          <option value="3">03hs</option>
                          <option value="4">04hs</option>
                          <option value="5">05hs</option>
                          <option value="6">06hs</option>
                          <option value="7">07hs</option>
                          <option value="8">08hs</option>
                          <option value="9">09hs</option>
                          <option value="10">10hs</option>
                          <option value="11">11hs</option>
                          <option selected value="12">
                            12hs
                          </option>
                          <option value="13">13hs</option>
                          <option value="14">14hs</option>
                          <option value="15">15hs</option>
                          <option value="16">16hs</option>
                          <option value="17">17hs</option>
                          <option value="18">18hs</option>
                          <option value="19">19hs</option>
                          <option value="20">20hs</option>
                          <option value="21">21hs</option>
                          <option value="22">22hs</option>
                          <option value="23">23hs</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 mt-2 mb-2 text-center">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitches"
                        />
                        <label
                          className="custom-control-label"
                          for="customSwitches"
                        >
                          Status
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row mt-4 ml-1">
                  <label for="addSports">Add a Sport</label>
                  <div className="col-md-12">
                    <div
                      className="form-row border rounded-lg px-2 pt-1"
                      id="addSports"
                    >
                      <div className="form-group col-md-5">
                        <label for="sport">Sport</label>
                        <select className="form-control" id="sport">
                          <option>Soccer</option>
                          <option>Basketball</option>
                          <option>Paddle</option>
                          <option>Golf</option>
                          <option>Tennis</option>
                          <option>Skate</option>
                        </select>
                      </div>
                      <div className="form-group col-md-5">
                        <label for="level">Level</label>
                        <select className="form-control" id="level">
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2 d-flex align-self-end">
                        <button className="btn btn-danger">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Perfil;
