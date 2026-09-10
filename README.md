# Guia desarrollada API EXPRESS de GESTIÓN DE ESTUDIANTES CON NODE.JS

Proyecto Node.js / Express para análisis y consulta de datos de estudiantes.

---

##  Cómo ejecutar el proyecto localmente

1. Clonar el repositorio.
2. Entrar a la carpeta del proyecto:
   ```bash
   cd cun
   node app/app.js

El servidor se ejecutará en http://localhost:3000

| Método  | Ruta | Descripción |
| :---    | :--- | :---        |
| **GET** | `/api/estudiantes` | Muestra la lista completa de estudiantes |
| **GET** | `/api/estudiantes/reporte` | Devuelve el reporte general consolidado |
| **GET** | `/api/estudiantes/conteoCarreras` | Retorna el conteo de alumnos por carrera |
| **GET** | `/api/estudiantes/ranking` | Lista a los estudiantes ordenados por promedio |
| **GET** | `/api/estudiantes/aprobados` | Muestra estudiantes aprobados |
| **GET** | `/api/estudiantes/reprobados` | Muestra estudiantes reprobados |
| **GET** | `/api/estudiantes/promedio` | Devuelve el promedio general de la lista |
| **GET** | `/api/estudiantes/promedio/mayor` | Estudiante con el promedio más alto |
| **GET** | `/api/estudiantes/promedio/menor` | Estudiante con el promedio más bajo |
| **GET** | `/api/estudiantes/carrera/:carrera` | Filtra estudiantes por carrera |
| **GET** | `/api/estudiantes/semestre/:semestre` | Filtra estudiantes por semestre |
| **GET** | `/api/estudiantes/:id` | Busca a un estudiante por su ID |
Ejemplo de ruta para el 'reporte': http://localhost:3000/api/estudiantes/reporte

PREGUNTA
¿Qué ventajas tiene dividir el programa en diferentes funciones en lugar de escribir todo el código en un solo bloque?

El archivo principal ´app.js´  contiene unicamente los get para ejecutar en el servidor, esta se encarga unicamente de las rutas, Asi, si llega a ocurrir un error este se pueda identificar rapidamente, ya sea de sintaxis, de exportacion o de las mismas funciones.
Al generar el reporte como se han creado funciones con unica responsabilidad estas se pueden llamar a otra funcion para juntar varias funciones y mostrar la informacion importante sin llamar las funciones una por una reutilizando el codigo.
Si una funcion llegara a fallar solo tendriamos que arreglar la funciones dentro del archivo ´funciones.js´ sin temor a corromper todos los archivos por un movimiento en falso.
Asi mismo si se desea en el futuro escalar el codigo al estar modulado por secciones con responsabilidades uncias se vuelve facil avanzar en el, modificar las mismas funciones para proyectos futuros.
Ha sido una experiencia entre el conomiento, practica y la prueba/error, donde implemente mas herramientas como node,express y hasta el mismo lenguaje JavaScript que era cosas fuera de mi conocimiento, esta experiencia me permitio abrirme mas en el mundo de la programacion y desafiar mis conocimientos poniendo aprueba mis bases y enfrentadome a lo retos de un nuevo lenguaje y herramientas como express, como toda una experiencia enriquecedora.
