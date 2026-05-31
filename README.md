# TP3 - Parte 2: Gestión de Proyectos Educativos - React

Proyecto desarrollado para la materia **Programación Visual** utilizando **React** y **Vite**.

Este trabajo se enfoca en la comunicación entre componentes mediante el pasaje de información (**props**) y la simplificación del código utilizando **desestructuración de objetos**.

## Integrantes del Grupo

- Leandro Camacho - Github: [@leandrocamacho03]
- Facundo Miranda - Github: [@MirandaFD0]
- Porco Lucas - Github: [@lucas777porco-ai]

## Tecnologías Utilizadas

- **React**
- **Vite**
- **CSS**
- **JavaScript**

## Funcionalidades Implementadas

### Componente ProyectoCard
- Representación de una tarjeta de proyecto individual.
- Recepción de un objeto proyecto completo mediante **props**.
- Uso de **desestructuración** de propiedades:
  - título
  - categoría
  - estado
  - id
- Visualización del título, estado y categoría.
- Botones para eliminar o ver detalle.

### Componente DetalleProyecto
- Recepción de un objeto de proyecto seleccionado mediante **props**.
- Muestra descripción extendida del proyecto.
- Visualización de recursos utilizados.
- Visualización del equipo con nombres y roles.

### Refactorización de ListaProyectos
- Uso del componente `<ProyectoCard />` dentro de `.map()`.
- Pasaje del objeto correspondiente mediante **prop**.
- Aplicación de desestructuración en el manejo de estados del formulario.

## Objetivo del Proyecto

Aplicar el uso de **props**, **componentes reutilizables** y **desestructuración de objetos** en React para mejorar la organización del código.

## Ejecución del Proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```