import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Cards from '../../components/commons/Cards/Cards';
import Post from '../../components/commons/Post/Post';

const Home = () => {
  return (
    <MainLayout>
      <Post />
      <Post />
    </MainLayout>
  )
}

export default Home;
