import Formulario from "./components/Formulario";
import ListaVehiculos from "./components/ListaVehiculos";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const vehiculosGuardados = localStorage.getItem("vehiculos");

    return vehiculosGuardados
      ? JSON.parse(vehiculosGuardados)
      : [];
  });

  const agregarVehiculo = (vehiculo) => {
    setVehiculos([...vehiculos, vehiculo]);
  };

  useEffect(() => {
    localStorage.setItem(
      "vehiculos",
      JSON.stringify(vehiculos)
    );
  }, [vehiculos]);

  return (
    <div className="app">
      <header>
        <h1>Sistema de Gestión de Estacionamientos</h1>
      </header>

      <main>
        <h2>Cupos disponibles: {10 - vehiculos.length}</h2>

        <Formulario agregarVehiculo={agregarVehiculo} />

        <ListaVehiculos vehiculos={vehiculos} />
      </main>

      <footer>
        <p>AutoPark Chile © 2026</p>
      </footer>
    </div>
  );
}

export default App;