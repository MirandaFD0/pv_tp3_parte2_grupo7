const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { id, titulo, categoria, estado } = proyecto

  return (
    <article className="card">
      <h4>{titulo}</h4>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      <button onClick={() => onEliminar(id)}>Eliminar</button>
      <button onClick={() => onVerDetalle(proyecto)}>Ver detalle</button>
    </article>
  )
}

export default ProyectoCard