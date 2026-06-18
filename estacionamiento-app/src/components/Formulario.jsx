import { useState } from "react";

function Formulario({ agregarVehiculo }) {
    const [patente, setPatente] = useState("");
    const [marca, setMarca] = useState("");
    const [permanente, setPermanente] = useState(false);

    const manejarSubmit = (e) => {
        e.preventDefault();

        const regexPatente = /^[A-Z]{4}[0-9]{2}$/;

        if (!patente || !marca) {
            alert("Todos los campos son obligatorios");
            return;
        }

        if (!regexPatente.test(patente.toUpperCase())) {
            alert("La patente debe tener 4 letras y 2 números (Ej: ABCD12)");
            return;
        }

        const nuevoVehiculo = {
            patente: patente.toUpperCase(),
            marca,
            permanente
        };

        agregarVehiculo("");
        setMarca("");
        setPermanente(false);
    };

    return (
        <form onSubmit={manejarSubmit}>
            <div>
                <label>Patente:</label>
                <input
                    type="text"
                    value={patente}
                    onChange={(e) => setPatente(e.target.value)}
                />
            </div>

            <div>
                <label>Marca:</label>
                <input
                    type="text"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                />
            </div>

            <div>
                <label>Permanente:</label>
                <input
                    type="checkbox"
                    checked={permanente}
                    onChange={(e) => setPermanente(e.target.checked)}
                />
            </div>

            <buttton type="submit">Registrar Vehículo</buttton>

        </form>
    );
}

export default Formulario;