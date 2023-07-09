import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import { consultaCrearTarea, mostrarTareas } from "../helpers/queries";
import { useEffect, useState } from "react";

const ListaTareas = ({lista, borrarTarea}) => {
  //mostrarTareas();
  
  const [tareas, setTareas] = useState([]);

  useEffect(()=>{
    mostrarTareas().then((respuesta)=>{
      console.log(respuesta);
      setTareas(respuesta);
    });
  },[]);

  return (
    <ListGroup>
      {
        tareas.map((tarea)=><ItemTarea key={tarea._id} tarea={tarea} setTareas={setTareas}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
