import React from 'react'

function Buscar({buscaTareas}) {
   
  return (
    <div style={{ display: "flex" }}>
    <input
      placeholder="Buscar..."
      onChange={(e) => buscaTareas(e.target.value)}
    />    
  </div>
  )
}

export default Buscar
