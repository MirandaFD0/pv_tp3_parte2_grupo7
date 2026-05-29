const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Gestión Escolar",
    categoria: "Web",
    estado: "En curso",
    descripcion: [
      "Este proyecto tiene como objetivo digitalizar la gestión administrativa de instituciones educativas, permitiendo el registro de alumnos, materias y calificaciones de forma eficiente.",
      "El sistema incluye módulos de reportes, gestión de asistencia y comunicación entre docentes y alumnos, facilitando el seguimiento académico en tiempo real."
    ],
    recursos: [
      { tipo: "PDF", url: "https://drive.google.com/documento1" },
      { tipo: "GitHub", url: "https://github.com/ejemplo/gestion-escolar" },
      { tipo: "Drive", url: "https://drive.google.com/carpeta1" }
    ],
    equipo: [
      { nombre: "Ana García", rol: "Frontend" },
      { nombre: "Carlos López", rol: "Backend" },
      { nombre: "María Torres", rol: "Diseño UX" }
    ]
  },
  {
    id: 2,
    titulo: "App de Turnos Médicos",
    categoria: "Mobile",
    estado: "Finalizado",
    descripcion: [
      "Aplicación móvil que permite a los pacientes reservar, cancelar y consultar turnos médicos desde su celular, reduciendo las filas y llamadas telefónicas.",
      "Incluye notificaciones automáticas de recordatorio, historial de consultas y un panel para que los médicos administren su agenda diaria."
    ],
    recursos: [
      { tipo: "PDF", url: "https://drive.google.com/documento2" },
      { tipo: "GitHub", url: "https://github.com/ejemplo/turnos-medicos" },
      { tipo: "Drive", url: "https://drive.google.com/carpeta2" }
    ],
    equipo: [
      { nombre: "Lucas Fernández", rol: "Mobile Dev" },
      { nombre: "Sofía Romero", rol: "Backend" }
    ]
  },
  {
    id: 3,
    titulo: "E-commerce de Ropa",
    categoria: "Web",
    estado: "En curso",
    descripcion: [
      "Plataforma de comercio electrónico orientada a la venta de indumentaria, con catálogo de productos, carrito de compras y pasarela de pagos integrada.",
      "El proyecto contempla también un panel de administración para gestionar stock, pedidos y estadísticas de ventas en tiempo real."
    ],
    recursos: [
      { tipo: "PDF", url: "https://drive.google.com/documento3" },
      { tipo: "GitHub", url: "https://github.com/ejemplo/ecommerce-ropa" },
      { tipo: "Drive", url: "https://drive.google.com/carpeta3" }
    ],
    equipo: [
      { nombre: "Diego Mamani", rol: "Fullstack" },
      { nombre: "Valentina Cruz", rol: "Diseño UI" },
      { nombre: "Rodrigo Pérez", rol: "QA" }
    ]
  }
]

const proyectoService = {
  obtenerProyectos: () => [...proyectos],

  buscarProyecto: (texto) =>
    proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase())
    ),

  agregarProyecto: (nuevo) => proyectos.push(nuevo),

  eliminarProyecto: (id) => {
    const index = proyectos.findIndex((p) => p.id === id)
    if (index !== -1) proyectos.splice(index, 1)
  }
}

export default proyectoService