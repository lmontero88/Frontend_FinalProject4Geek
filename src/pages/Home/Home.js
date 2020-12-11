import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Cards from "../../components/commons/Cards/Cards";
import Post from "../../components/commons/Post/Post";

const Home = () => {
  return (
    <MainLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Home</h1>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
