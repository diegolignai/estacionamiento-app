import Formulario from "./components/Formulario";
import ListaVehiculos from "./components/ListaVehiculos";
import { useState } from "react";


function App() {
  const [vehiculos, setVehiculos] = useState([]);

  const agregarVehiculo = (vehiculo) => {
    setVehiculos([...vehiculos, vehiculo]);
  };

  return (
    <>
      <header>
        <h1>Sistema de Gestión de Estacionamientos</h1>
      </header>

      <main>
        <h2>Cupos disponibles: {10 - vehiculos.length}</h2>

        <Formulario agregarVehiculo={agregarVehiculo} />

        <ListaVehiculos vehiculos={vehiculos} />
      </main>

      <footer>
        <p>Front End</p>
      </footer>
    </>
  );
}

export default App;