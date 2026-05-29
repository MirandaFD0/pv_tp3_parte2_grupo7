import { useState } from "react"
import proyectoService from "../services/proyectoService"
import ProyectoCard from "./ProyectoCard"
import DetalleProyecto from "./DetalleProyecto"

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
  const [busqueda, setBusqueda] = useState('')
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ['', ''],
    recursos: [
      { tipo: 'PDF', url: '' },
      { tipo: 'GitHub', url: '' },
      { tipo: 'Drive', url: '' }
    ],
    equipo: [{ nombre: '', rol: '' }]
  })

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id)
    setProyectos(proyectoService.obtenerProyectos())
  }

  const handleBuscar = (e) => {
    setBusqueda(e.target.value)
    setProyectos(proyectoService.buscarProyecto(e.target.value))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNuevoProyecto({ ...nuevoProyecto, [name]: value })
  }

  const handleAgregar = () => {
    if (nuevoProyecto.titulo.trim() === '') return
    const nuevo = {
      ...nuevoProyecto,
      id: Date.now()
    }
    proyectoService.agregarProyecto(nuevo)
    setProyectos(proyectoService.obtenerProyectos())
    setNuevoProyecto({
      titulo: '',
      categoria: '',
      estado: 'En curso',
      descripcion: ['', ''],
      recursos: [
        { tipo: 'PDF', url: '' },
        { tipo: 'GitHub', url: '' },
        { tipo: 'Drive', url: '' }
      ],
      equipo: [{ nombre: '', rol: '' }]
    })
  }

  if (proyectoSeleccionado) {
    return (
      <DetalleProyecto
        proyecto={proyectoSeleccionado}
        onVolver={() => setProyectoSeleccionado(null)}
      />
    )
  }

  return (
    <main>
      <h2>Listado de Proyectos</h2>

      <section>
        <h3>Buscar Proyecto</h3>
        <input
          type="text"
          placeholder="Buscá un proyecto..."
          value={busqueda}
          onChange={handleBuscar}
        />
      </section>

      <section>
        <h3>Agregar Proyecto</h3>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nuevoProyecto.titulo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={nuevoProyecto.categoria}
          onChange={handleChange}
        />
        <select
          name="estado"
          value={nuevoProyecto.estado}
          onChange={handleChange}
        >
          <option value="En curso">En curso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        <button onClick={handleAgregar}>Agregar</button>
      </section>

      <h3>Proyectos</h3>
      <section>
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={handleEliminar}
            onVerDetalle={setProyectoSeleccionado}
          />
        ))}
      </section>
    </main>
  )
}

export default ListaProyectos