import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Cards from "../../components/commons/Cards/Cards";
import Post from "../../components/commons/Post/Post";

const Home = () => {
const [post,setPost] = useState( 
              [{ imagen: "https://images.pexels.com/photos/2618794/pexels-photo-2618794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                titulo: "bienvenido a matchup",
                contenido: "el lugar ideal para encontrar con quien entrenar tu deporte favorito",
                boton: "click aqui"
              },
              {imagen: "https://images.pexels.com/photos/2618794/pexels-photo-2618794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              titulo: "bienvenido a matchup",
              contenido: "el lugar ideal para encontrar con quien entrenar tu deporte favorito",
              boton: "click aqui"}])
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-12">
          {
           post.map((item, i, arr) =>{
           return <Post imagen={item.imagen} titulo={item.titulo} contenido={item.contenido} boton={item.boton} key={i}/>
           })
          }
          
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
