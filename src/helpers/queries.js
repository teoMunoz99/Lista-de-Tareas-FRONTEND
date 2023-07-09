//llamar variables de entorno   
const URL_TAREAS = import.meta.env.VITE_API_TAREAS;

export const mostrarTareas = async ()=>{
    //console.log(URL_TAREAS)
    try{
        const respuesta = await fetch(URL_TAREAS);
        const tareasCargadas = await respuesta.json();
        //console.log(tareasCargadas);
        return tareasCargadas;
    }catch (error){
        console.log(error)
    }
};

export const consultaBorrarProducto = async (id)=>{
    try{
        const respuesta = await fetch(`${URL_TAREAS}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}


export const consultaCrearProducto = async (tarea)=>{
    try{
        const body = {
            descripcionTarea: tarea
        }
        console.log(tarea)
        const respuesta = await fetch(URL_TAREAS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

