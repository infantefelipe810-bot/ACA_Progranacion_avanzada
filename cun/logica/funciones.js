const e = require("express");
const estudiantes = require("./lista");

function mostrarEstudiantes(lista){
    let estudiantes = [];
    for(let i = 0; i < lista.length; i++){
            (estudiantes.push(lista[i]));
    };
    return estudiantes;
};

function buscarEstu(lista, idB){
for(let i = 0; i < lista.length; i++){
            if (Number(idB) === lista[i].id){
                return lista[i];
            };
    };
        return("No se encontro nada");
};

function buscarCarrera(lista, carrera){
    let carreasEncontradas = [];
    let carreraF = carrera.toLowerCase().trim();

    for(let i = 0; i < lista.length; i++){
        if (carreraF === lista[i].carrera.toLowerCase().trim()){
            carreasEncontradas.push(lista[i]);
            };
        };
        if(carreasEncontradas.length > 0){
            return carreasEncontradas;
        }
        else{
            return "Sin resultados de busqueda";
        };
};

function EstudiantesApro(lista){
 if(lista.length === 0)return "No hay estudiantes";
    let estudiantesAprobados = [];
    for (let a = 0; a < lista.length; a++) {
        if(lista[a].promedio >= 3.0){
            estudiantesAprobados.push(lista[a]);
        }
    }
    return estudiantesAprobados;
};

function EstudiantesRepro(lista){
    if(lista.length === 0)return "No hay estudiantes";
    let estudiantesReprobados = [];
    for (let r = 0; r < lista.length; r++) {
        if(lista[r].promedio < 3.0){
            estudiantesReprobados.push(lista[r]);
        }
    }
    return estudiantesReprobados;
};

function PromedioGeneral(lista){
    let suma = 0;
    if(lista.length  === 0)return"lista vacia sin estudiantes.";
    for (let p = 0; p < lista.length; p++) {
        suma = suma + lista[p].promedio;
    }
    const promedioGeneral = suma / lista.length ;
    const FiltroPromedio = promedioGeneral.toFixed(2);
    return `El Promedio General es de: ${FiltroPromedio}`;
};
function PromMayor(lista){
    if(lista === 0) return "La lista esta vacia";
    let promedioMasAlto = lista[0];

    for (let e = 1; e < lista.length; e++){
        if(lista[e].promedio > promedioMasAlto.promedio){
        promedioMasAlto = lista[e];
        }
    };
    return `El mejor estudiante es ${promedioMasAlto.nombre} con un Promedio de: ${promedioMasAlto.promedio}`;
};
function PromMenor(lista){
    if(lista === 0) return "La lista esta vacia";
    let promedioMasBajo = lista[0];

    for (let e = 1; e < lista.length; e++){
        if(lista[e].promedio < promedioMasBajo.promedio){
        promedioMasBajo = lista[e];
        }
    };
    return `El promedio mas bajo es de ${promedioMasBajo.nombre} con un Promedio de: ${promedioMasBajo.promedio}`;
};

function ContarCarreras(lista){
    let totalEstudiantes = {}; 
    for (let c = 0; c < lista.length; c++) {
        let carrera = lista[c].carrera;
        if (totalEstudiantes[carrera]){
                totalEstudiantes[carrera]++;//incrementa
            }
        else{
        totalEstudiantes[carrera] = 1;//Lo crea
            };
        };
        return totalEstudiantes;
};
function Buscarsemestre(lista, semestreB){
    let estudiantes = [];
    for (let s = 0; s < lista.length; s++) {
        if(Number(lista[s].semestre) === Number(semestreB)){
            estudiantes.push(lista[s]);
        }
    };
    if(estudiantes.length > 0){
        return estudiantes;
    }
};
function MayoresEdad(lista, edad){
    let estudiantesEdad = [];
    for (let e = 0; e < lista.length; e++) {
        if(Number(lista[e].edad) > Number(edad)){
            estudiantesEdad.push(lista[e]);
        }
    };
    if(estudiantesEdad.length > 0){
        return estudiantesEdad;
    }
};
function generarReporte(lista){
    if(lista.length === 0)'La lista esta vacia';
    let reporte = {
    TotalEstudiantes : ContarCarreras(lista),
    EstudiantesAprobados : EstudiantesApro(lista),
    EstudiantesReprobados : EstudiantesRepro(lista),
    PromedioGeneral: PromedioGeneral(lista),
    MejorEstudiante: PromMayor(lista),
    PeorEstudiante: PromMenor(lista)
    }
    return reporte;
};
module.exports = {
    mostrarEstudiantes,
    buscarEstu,
    buscarCarrera,
    EstudiantesApro,
    EstudiantesRepro,
    PromedioGeneral,
    PromMayor,
    PromMenor,
    ContarCarreras,
    Buscarsemestre,
    MayoresEdad,
    generarReporte
};
    