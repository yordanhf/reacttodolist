import React, { useState } from "react";
import Lista from "./Lista";
import Entrada from "./Entrada";
import Buscar from "./Buscar";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, nombre: "tarea1", echa: false },
    { id: 2, nombre: "tarea 2 pendiente", echa: false },
    { id: 3, nombre: "esta tarea ya la hice", echa: true },
  ]);

  const [copiaTareas, setCopia] = useState([
    { id: 1, nombre: "tarea1", echa: false },
    { id: 2, nombre: "tarea 2 pendiente", echa: false },
    { id: 3, nombre: "esta tarea ya la hice", echa: true },
  ]);

  function nuevaTarea(t) {
    setTareas([...tareas, t]);
    setCopia([...copiaTareas, t]);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id != id));
    setCopia(copiaTareas.filter((tarea) => tarea.id != id));
  }

  function modTareas(id) {
    let copia = [...copiaTareas];
    let index = copia.findIndex((tarea) => tarea.id == id);
    copia[index].echa = !copia[index].echa;
    setCopia(copia);    
  }

  function buscaTareas(text) {
    let copia = [...tareas];
    setCopia(tareas);
    copia = copia.filter(
      (tarea) =>
        tarea.nombre.toString().replace(text, "xxxxxxxx") != tarea.nombre
    );
    setCopia(copia);
  }

  function borrarTodas() {
    let copia = [...copiaTareas];
    copia = copia.filter((tarea) => tarea.echa == false);
    setTareas(copia);
    setCopia(copia);
  }

  return (
    <div>
      <Buscar buscaTareas={buscaTareas} />
      <Entrada nuevaTarea={nuevaTarea} />
      <Lista
        copiaTareas={copiaTareas}
        modTareas={modTareas}
        eliminarTarea={eliminarTarea}
        borrarTodas={borrarTodas}
      />
    </div>
  );
}

export default App;
