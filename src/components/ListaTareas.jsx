import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import { mostrarTareas } from "../helpers/queries";
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
        tareas.map((tarea)=><ItemTarea key={tarea.id} tarea={tarea} setTareas={setTareas}></ItemTarea>)
        //lista.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
