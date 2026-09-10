Para prender el servidor
```
1. Abrir la terminal desde la carpeta /app y ejecutar: node app.js
2. En la terminal comun colocar: node cun/app/app.js
```
El servidor se iniciaria en http://localhost:3000

RUTAS DISPONIBLES PARA EL RECORRIDO DE LAS FUNCIONES
Método	Ruta	                             Descripción
GET	/api/estudiantes	               ===>  Muestra la lista completa de estudiantes
GET	/api/estudiantes/reporte	       ===>  Devuelve el reporte general consolidado
GET	/api/estudiantes/conteoCarreras	   ===>  Retorna el conteo de alumnos por carrera
GET	/api/estudiantes/ranking	       ===>  Lista a los estudiantes ordenados por promedio
GET	/api/estudiantes/aprobados	       ===>  Muestra estudiantes aprobados
GET	/api/estudiantes/reprobados	       ===>  Muestra estudiantes reprobados
GET	/api/estudiantes/promedio          ===>	 Devuelve el promedio general de la lista
GET	/api/estudiantes/promedio/mayor	   ===>  Estudiante con el promedio más alto
GET	/api/estudiantes/promedio/menor	   ===>  Estudiante con el promedio más bajo
GET	/api/estudiantes/carrera/:carrera  ===>	 Filtra estudiantes por carrera (Ej: /carrera/ingenieria de sisteamas)
GET	/api/estudiantes/semestre/:semestre ===> Filtra estudiantes por semestre (Ej: /semestre/4)
GET	/api/estudiantes/:id	            ===> Busca a un estudiante por su ID (Ej: /1)

Ejemplo de ruta para el 'reporte': http://localhost:3000/api/estudiantes/reporte