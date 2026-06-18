import CardVehiculo from "./CardVehiculo";

function ListaVehiculos({ vehiculos }) {
  return (
    <section className="contenedor-cards">
      {vehiculos.length === 0 ? (
        <p>No hay vehículos registrados</p>
      ) : (
        vehiculos.map((vehiculo) => (
          <CardVehiculo
            key={vehiculo.patente}
            vehiculo={vehiculo}
          />
        ))
      )}
    </section>
  );
}

export default ListaVehiculos;