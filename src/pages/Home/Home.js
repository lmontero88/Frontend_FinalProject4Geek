import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Cards from "../../components/commons/Cards/Cards";
import Post from "../../components/commons/Post/Post";


const Home = () => {
  const [post, setPost] = useState([{imagen: "https://images.pexels.com/photos/2618794/pexels-photo-2618794.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", titulo: "Un jugador argelino, expulsado del tenis de por vida", contenido: "El tenista argelino Aymen Ikhlef ha sido expulsado de por vida del tenis después de que una investigación de la Unidad de Integridad del Tenis (TIU) descubriera múltiples infracciones de las reglas del Programa Anticorrupción del Tenis (TACP) por parte del jugador. El jugador también ha sido multado con 100.000 dólares."},
                {imagen: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", titulo: "Una promesa del baloncesto sufrió un colapso en pleno partido y su situación es crítica", contenido: "El joven Keyontae Johnson que juega para los Florida Gators preocupó a todos los presentes y de inmediato fue trasladado a un hospital cercano en donde lograron estabilizar su situación aunque sesta sigue siendo crítica según las últimas informaciones."},])
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-12">
  {
          post.map((elemento, index, arr) =>{
          return<Post imagen={elemento.imagen} titulo={elemento.titulo} contenido={elemento.contenido} key={index}/>
          })
  } 
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
