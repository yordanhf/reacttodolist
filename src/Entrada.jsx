import React, { useState } from "react";

function Entrada({ nuevaTarea }) {
  const [texto, setTexto] = useState("");

  const randomKey = () => {
    return new Date().getTime() + Math.floor(Math.random() * 10000).toString();
  };

  const insertar = () => {
    if (texto != "") {
      let x = {
        id: randomKey(),
        nombre: texto,
        echa: false,
      };
      nuevaTarea(x);
    } else alert("La Tarea no puede estar en blanco");
  };
  return (
    <div style={{ display: "flex" }}>
      <input
        placeholder="Nueva tarea"
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={insertar}>Insertar</button>
    </div>
  );
}

export default Entrada;
