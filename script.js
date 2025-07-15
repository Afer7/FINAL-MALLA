
const ramos = [
  { codigo: "520145", nombre: "INTRODUCCIÓN A LA MATEMÁTICA UNIVERSITARIA", semestre: 1, creditos: 6, prerrequisitos: [] },
  { codigo: "530023", nombre: "INTRODUCCIÓN A LA QUÍMICA UNIVERSITARIA", semestre: 1, creditos: 3, prerrequisitos: [] },
  { codigo: "510145", nombre: "INTRODUCCIÓN A LA FÍSICA UNIVERSITARIA", semestre: 1, creditos: 3, prerrequisitos: [] },
  { codigo: "546498", nombre: "LIDERAZGO Y COMUNICACIÓN", semestre: 1, creditos: 2, prerrequisitos: [] },
  { codigo: "525147", nombre: "ÁLGEBRA I", semestre: 1, creditos: 3, prerrequisitos: [] },
  { codigo: "427147", nombre: "CÁLCULO I", semestre: 1, creditos: 3, prerrequisitos: [] },
  { codigo: "510147", nombre: "FÍSICA I", semestre: 1, creditos: 3, prerrequisitos: [] },
  { codigo: "530024", nombre: "QUÍMICA GENERAL I", semestre: 1, creditos: 3, prerrequisitos: [] },
  { codigo: "525148", nombre: "ÁLGEBRA II", semestre: 2, creditos: 3, prerrequisitos: ["525147"] },
  { codigo: "527148", nombre: "CÁLCULO II", semestre: 2, creditos: 3, prerrequisitos: ["427147"] },
  { codigo: "510148", nombre: "FÍSICA II", semestre: 2, creditos: 3, prerrequisitos: ["510147"] },
  { codigo: "530025", nombre: "QUÍMICA GENERAL II", semestre: 2, creditos: 3, prerrequisitos: ["530024"] },
  { codigo: "525223", nombre: "ECUACIONES DIFERENCIALES", semestre: 3, creditos: 4, prerrequisitos: ["525148", "527148"] },
  { codigo: "523219", nombre: "ESTADÍSTICA", semestre: 3, creditos: 4, prerrequisitos: ["525147", "527148"] },
  { codigo: "890050", nombre: "INGLES COMUNICATIVO NIVEL BASICO I I", semestre: 3, creditos: 5, prerrequisitos: [] },
  { codigo: "503201", nombre: "LENGUAJE DE PROGRAMACION", semestre: 3, creditos: 4, prerrequisitos: [] },
  { codigo: "521227", nombre: "CALCULO III", semestre: 3, creditos: 5, prerrequisitos: ["527148", "525147"] },
  { codigo: "541203", nombre: "TERMODINAMICA", semestre: 4, creditos: 4, prerrequisitos: [] },  
  { codigo: "523325", nombre: "INFERENCIA ESTADISTICA Y MUESTREO", semestre: 4, creditos: 4, prerrequisitos: ["523219"] },
  { codigo: "541271", nombre: "MECANICA", semestre: 4, creditos: 3, prerrequisitos: ["521227", "510148"] },
  { codigo: "890051", nombre: "INGLES COMUNICATIVO NIVEL BASICO II", semestre: 4, creditos: 5, prerrequisitos: ["890050"] },
  { codigo: "580211", nombre: "MODELACION DE SISTEMAS", semestre: 4, creditos: 2, prerrequisitos: [] },
  { codigo: "521230", nombre: "CALCULO NUMERICO", semestre: 4, creditos: 4, prerrequisitos: ["521227", "503201", "525223"] },
  { codigo: "541209", nombre: "MECANICA DE FLUIDOS", semestre: 5, creditos: 4, prerrequisitos: ["541203", "541271"] },
  { codigo: "543368", nombre: "MAQUINAS ELECTRICAS", semestre: 5, creditos: 4, prerrequisitos: ["525223", "510148"] },
  { codigo: "546201", nombre: "MICROECONOMIA", semestre: 5, creditos: 4, prerrequisitos: ["523219"] },
  { codigo: "580311", nombre: "ANALISIS ESTADISTICO MULTIVARIADO", semestre: 5, creditos: 3, prerrequisitos: ["523325"] },
  { codigo: "580315", nombre: "OPTIMIZACION I", semestre: 5, creditos: 3, prerrequisitos: ["503201", "521227"] },
  { codigo: "541215", nombre: "TRANSFERENCIA DE CALOR", semestre: 6, creditos: 4, prerrequisitos: ["541209", "521230"] },
  { codigo: "580321", nombre: "ADMINISTRACION", semestre: 6, creditos: 3, prerrequisitos: ["580211"] },
  { codigo: "580323", nombre: "MACROECONOMIA", semestre: 6, creditos: 3, prerrequisitos: ["546201"] },
  { codigo: "580325", nombre: "OPTIMIZACION II", semestre: 6, creditos: 3, prerrequisitos: ["580315"] },
  { codigo: "541380", nombre: "DIBUJO INDUSTRIAL", semestre: 6, creditos: 3, prerrequisitos: [] },
  { codigo: "580327", nombre: "SIMULACION", semestre: 6, creditos: 3, prerrequisitos: ["580315", "580311"] },
  { codigo: "540451", nombre: "PROCESOS INDUSTRIALES", semestre: 7, creditos: 3, prerrequisitos: ["541215"] },
  { codigo: "580413", nombre: "MARKETING", semestre: 7, creditos: 3, prerrequisitos: ["580321"] },
  { codigo: "545328", nombre: "CONTABILIDAD GENERAL Y COSTOS IND", semestre: 7, creditos: 3, prerrequisitos: ["580321"] },
  { codigo: "580411", nombre: "DISEÑOS DE SISTEMAS DE PRODUCCION", semestre: 7, creditos: 3, prerrequisitos: ["580327"] },
  { codigo: "503585", nombre: "TECNOLOGIAS DE INFORMACION", semestre: 7, creditos: 4, prerrequisitos: ["580321"] },
  { codigo: "580415", nombre: "GESTION ESTRATEGICA Y CONTROL DE GESTION", semestre: 7, creditos: 4, prerrequisitos: ["580321"] },
  { codigo: "201", nombre: "COMPLEMENTARIA 1", semestre: 8, creditos: 2, prerrequisitos: [] },
  { codigo: "580423", nombre: "GESTION Y CONTROL DE LA CALIDAD", semestre: 8, creditos: 3, prerrequisitos: ["580311"] },
  { codigo: "580421", nombre: "PLANIFICACION Y CONTROL DE LA PRODUCCION", semestre: 8, creditos: 4, prerrequisitos: ["580327"] },
  { codigo: "580429", nombre: "FINANZAS", semestre: 8, creditos: 4, prerrequisitos: ["545328"] },
  { codigo: "580425", nombre: "INGENIERIA ECONOMICA", semestre: 8, creditos: 3, prerrequisitos: ["545328"] },
  { codigo: "580427", nombre: "GESTION AMBIENTAL", semestre: 8, creditos: 3, prerrequisitos: [] },
  { codigo: "580511", nombre: "INNOVACION", semestre: 9, creditos: 3, prerrequisitos: ["580415"] },
  { codigo: "101", nombre: "ELECTIVA 1", semestre: 9, creditos: 3, prerrequisitos: [] },
  { codigo: "580513", nombre: "EVALUACION DE PROYECTOS", semestre: 9, creditos: 3, prerrequisitos: ["580425"] },
  { codigo: "202", nombre: "COMPLEMENTARIA 2", semestre: 9, creditos: 2, prerrequisitos: [] },
  { codigo: "102", nombre: "ELECTIVA 2", semestre: 9, creditos: 3, prerrequisitos: [] },
  { codigo: "580515", nombre: "DESARROLLO ORGANIZACIONAL Y RECURSOS HUMANOS", semestre: 9, creditos: 3, prerrequisitos: ["580321"] },
  { codigo: "103", nombre: "ELECTIVA 3", semestre: 10, creditos: 3, prerrequisitos: [] },
  { codigo: "580523", nombre: "TALLER DE EMPRENDIMIENTO", semestre: 10, creditos: 3, prerrequisitos: ["580511", "580513"] },
  { codigo: "580521", nombre: "LOGISTICA ", semestre: 10, creditos: 3, prerrequisitos: ["580421"] },
  { codigo: "104", nombre: "ELECTIVA 4", semestre: 10, creditos: 3, prerrequisitos: [] },
  { codigo: "105", nombre: "ELECTIVA 5", semestre: 10, creditos: 3, prerrequisitos: [] },
  { codigo: "105", nombre: "DIRECCION Y CONTROL DE PROYECTOS 5", semestre: 10, creditos: 3, prerrequisitos: [] },
  { codigo: "580450", nombre: "PRACTICA PROFESIONAL", semestre: 11, creditos: 0, prerrequisitos: [] },
  { codigo: "580699", nombre: "MEMORIA DE TITULO (TERMINAL HABILITANTE", semestre: 11, creditos: 18, prerrequisitos: [] },
];

const malla = document.getElementById("malla");
let aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));

function actualizarColores() {
  document.querySelectorAll(".ramo").forEach(div => {
    const codigo = div.dataset.codigo;
    const ramo = ramos.find(r => r.codigo === codigo);
    const cumplePrerreq = ramo.prerrequisitos.every(p => aprobados.has(p));

    div.classList.remove("aprobado", "habilitado");

    if (aprobados.has(codigo)) {
      div.classList.add("aprobado");
    } else if (cumplePrerreq && ramo.prerrequisitos.length > 0) {
      div.classList.add("habilitado");
    }
  });
}

for (let i = 1; i <= 11; i++) {
  const col = document.createElement("div");
  col.className = "semestre";
  col.innerHTML = `<h2>Semestre ${i}</h2>`;
  col.id = `sem-${i}`;
  malla.appendChild(col);
}

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = `${ramo.nombre}\n(${ramo.creditos} créditos)`;
  div.title = `Prerrequisitos: ${ramo.prerrequisitos.join(", ") || "Ninguno"}`;
  div.dataset.codigo = ramo.codigo;

  div.addEventListener("click", () => {
    if (aprobados.has(ramo.codigo)) {
      aprobados.delete(ramo.codigo);
    } else {
      aprobados.add(ramo.codigo);
    }
    actualizarColores();
    localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
  });

  document.getElementById(`sem-${ramo.semestre}`).appendChild(div);
});

actualizarColores();
