import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Cards from "../../components/commons/Cards/Cards";
import Post from "../../components/commons/Post/Post";

const Home = () => {
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-12">
          <Post />
          <Post />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
