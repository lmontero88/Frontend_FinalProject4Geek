import React from "react";
import MainLayout from "../../layouts/MainLayout";
import UserCard from "../../components/commons/UserCard/UserCard";

const Match = () => {
  return (
    <MainLayout>
      <div className="container col-md-12">
        <div className="row">
          <div className="col-md-3">
            <div className="col-md-4">
              <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Filtros</h5>
                  <hr></hr>
                  <form>
                    <span>Sexo</span>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label className="form-check-label" for="exampleRadios1">
                        Femenino
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label className="form-check-label" for="exampleRadios2">
                        Masculino
                      </label>
                    </div>
                    <label>Edad</label>
                    <div className="row">
                      <div className="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">
                          Username
                        </label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text">desde</div>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            id="inlineFormInputGroup"
                            placeholder="Username"
                          />
                        </div>
                      </div>

                      <div className="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">
                          Username
                        </label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text">hasta</div>
                          </div>
                          <input
                            type="number"
                            className="form-control"
                            id="inlineFormInputGroup"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label for="region">Región</label>
                      <select
                        class="custom-select custom-select-sm mb-1"
                        id="region"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div>
                      <label for="comuna">Comuna</label>
                      <select
                        class="custom-select custom-select-sm mb-1"
                        id="comuna"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div>
                      <label for="deporte">Deporte</label>
                      <select
                        class="custom-select custom-select-sm mb-1"
                        id="deporte"
                      >
                        <option selected>Open this select menu</option>
                        <option>Soccer</option>
                        <option>Basketball</option>
                        <option>Paddle</option>
                        <option>Golf</option>
                        <option>Tennis</option>
                        <option>Skate</option>
                      </select>
                    </div>
                    <div>
                      <label for="experiencia">Experiencia</label>
                      <select
                        class="custom-select custom-select-sm mb-1"
                        id="experiencia"
                      >
                        <option selected>Open this select menu</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                    <hr></hr>

                    <div className="form-row border-bottom">
                      <div className="form-group col-md-12">
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
                          Horas disponibles
                        </label>
                        <div className="form-group col-md-9 form-inline">
                          <div className="input-group mb-3 ml-1 mr-3">
                            <div className="input-group-prepend">
                              <label
                                className="input-group-text"
                                for="fromHour"
                              >
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
                              <label
                                className="input-group-text"
                                for="fromHour"
                              >
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
                      </div>
                    </div>

                    <div className="btn btn-primary mt-3">Filtrar</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row d-flex justify-content-around">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Match;