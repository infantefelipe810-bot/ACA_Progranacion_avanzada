const express = require('express');
const app = express();
const PORT = 3000;

const estudiantes = require('../logica/lista');
const {mostrarEstudiantes,
        buscarEstu,
        buscarCarrera,
        EstudiantesApro,
        EstudiantesRepro,
        PromedioGeneral,
        PromMayor,
        PromMenor,
        ContarCarreras,
        Buscarsemestre ,
        MayoresEdad,
        generarReporte
}= require('../logica/funciones');

//1.Listar todos los estudiantes
app.get('/api/estudiantes', (req, res)  => {
    res.json(mostrarEstudiantes(estudiantes));
 });  

 //4.Obtener estudiantes aprobados
 app.get('/api/estudiantes/aprobados', (req, res)  => {
      res.json(EstudiantesApro(estudiantes));
     });  

//5. Obtener estudiantes reprobados
 app.get('/api/estudiantes/reprobados', (req, res)  => {
      res.json(EstudiantesRepro(estudiantes));
     }); 

//6.Calcular el promedio general
app.get('/api/estudiantes/promedio',(req, res) =>{
    res.json(PromedioGeneral(estudiantes));
});

//7. Encontrar al mejor estudiante
 app.get('/api/estudiantes/mejor', (req, res)  => {
     res.json(PromMayor(estudiantes));
    });

//8. Encontrar al estudiante con menor promedio
 app.get('/api/estudiantes/menor', (req, res)  => {
     res.json(PromMenor(estudiantes));
    });

//12. Generar un reporte general
 app.get('/api/estudiantes/reporte', (req, res)  => {
res.json(generarReporte(estudiantes));
});

//9. Contar estudiantes por carrera
  app.get('/api/estudiantes/contar', (req, res)  => {
     res.json(ContarCarreras(estudiantes));
    });
    
//3. Buscar estudiantes por carrera
        app.get('/api/estudiantes/carrera/:carrera', (req, res)  => {
        const busqueda = buscarCarrera(estudiantes, req.params.carrera);
        res.json(busqueda);
     });
//10. Buscar estudiantes por semestre
        app.get('/api/estudiantes/semestre/:semestre', (req, res)  => {
        const busqueda = Buscarsemestre(estudiantes, req.params.semestre);
        res.json(busqueda);
     });
//11. Buscar estudiantes mayores de edad
        app.get('/api/estudiantes/edad/:edad', (req, res)  => {
        const busqueda = MayoresEdad(estudiantes, req.params.edad);
        res.json(busqueda);
     });
//2.Buscar un estudiante por ID
    app.get('/api/estudiantes/:id', (req, res)  => {
    const resultado = buscarEstu(estudiantes, req.params.id);
    res.json(resultado);
 });



app.listen(PORT, () => {
    console.log(`Servidor escuchando en en http://localhost:${PORT}`);
  });