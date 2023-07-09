import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <h1 className="text-center display-5 text-light">Lista Tareas</h1>
        <hr className="text-light" />
        <Formulario/>
      </Container>
      <footer className="py-4 bg-dark text-light ">
        <p className="text-center">&copy;Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
