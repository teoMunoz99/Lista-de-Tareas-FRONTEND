import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import ItemTarea from "./ItemTarea";
import { consultaCrearProducto } from "../helpers/queries";

const Formulario = () => {
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //realizar la peticion que agrega el producto a la api
    consultaCrearProducto(tarea).then((respuesta)=>{
      if(respuesta.status === 201){
        console.log(`Tarea cargada! : ${tarea}`)
      }else{
        console.log('Error al cargar la tarea')
      }
    });
    //limpio el input del formulario
    setTarea("");
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default Formulario;
