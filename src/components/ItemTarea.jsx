import { Button, ListGroup } from "react-bootstrap";
import { consultaBorrarProducto, mostrarTareas } from "../helpers/queries";

const ItemTarea = ({tarea, setTareas}) => {

    const borrarTarea = ()=>{
        //falta agregar el sweetAlert
        consultaBorrarProducto(tarea.id).then((respuesta)=>{
            if(respuesta.status === 200){
                console.log('Tarea borrada!');
                mostrarTareas().then((respuesta)=> setTareas(respuesta))
            }else{
                console.log('Error al borrar tarea');
            }
        });
    }

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea.descripcionTarea}
            <Button variant="danger" onClick={borrarTarea}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;