function CardVehiculo({ vehiculo }) {
    return (
        <div>
            <h3>{vehiculo.patente}</h3>
            <p>Marca: {vehiculo.marca}</p>
            <p>
                Tipo: {vehiculo.permanente ? "Permanente" : "Temporal"}
            </p>
        </div>
    );
}

export default CardVehiculo;