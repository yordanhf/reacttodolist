import React from "react";
import Borrartodas from './Borrartodas'

function Lista({ copiaTareas, modTareas, eliminarTarea, borrarTodas }) {
  const handleClick = (e) => {  
    modTareas(e.target.parentNode.id);    
  };
  const elimina = (e) => {  
    eliminarTarea(e.target.parentNode.id);    
  };

  return (
    <>
    <div>
      {copiaTareas.map((tarea) => (
        <div
          key={tarea.id}
          className={tarea.echa ? "echa" : ""}
          style={{
            display: "flex",
            alignItems: "center",
          }}
          id={tarea.id}
        >
          <input onClick={handleClick} type={"checkbox"}  defaultChecked={tarea.echa}/>
          {tarea.nombre}  
          <button onClick={elimina} className="eliminar">-</button>        
        </div>
      ))}
    </div>
    <Borrartodas borrarTodas={borrarTodas}/>
    </>
  );
}

export default Lista;
