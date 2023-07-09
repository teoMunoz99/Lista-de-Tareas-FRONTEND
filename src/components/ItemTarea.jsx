import { Button, Form, ListGroup } from "react-bootstrap";
import { consultaBorrarTarea, consultaEditarTarea, mostrarTareas } from "../helpers/queries";
import { useState } from "react";

const ItemTarea = ({ tarea, setTareas }) => {
  const [editMode, setEditMode] = useState(false);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(tarea.descripcionTarea);

  const borrarTarea = () => {
    consultaBorrarTarea(tarea._id).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log("Tarea borrada!");
        mostrarTareas().then((respuesta) => setTareas(respuesta));
      } else {
        console.log("Error al borrar tarea");
      }
    });
  };

  const editarTarea = () => {
    consultaEditarTarea(tarea._id, nuevaDescripcion).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log("Tarea editada!");
        mostrarTareas().then((respuesta) => setTareas(respuesta));
        setEditMode(false);
      } else {
        console.log("Error al editar tarea");
      }
    });
  };

  const handleChange = (event) => {
    setNuevaDescripcion(event.target.value);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div>
        {editMode ? (
          <Form.Control type="text" value={nuevaDescripcion} onChange={handleChange} />
        ) : (
          tarea.descripcionTarea
        )}
      </div>
      <div>
        {editMode ? (
          <>
            <Button variant="success me-1" onClick={editarTarea}>
              Guardar
            </Button>
            <Button variant="secondary" onClick={() => setEditMode(false)}>
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <Button variant="warning me-1" onClick={() => setEditMode(true)}>
              Editar
            </Button>
            <Button variant="danger" onClick={borrarTarea}>
              Borrar
            </Button>
          </>
        )}
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;

