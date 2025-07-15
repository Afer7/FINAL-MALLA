
const ramos = [
  { codigo: "520145", nombre: "INTRODUCCIÓN A LA MATEMÁTICA UNIVERSITARIA", semestre: 1, creditos: 6, prerrequisitos: [] },
  { codigo: "530023", nombre: "INTRODUCCIÓN A LA QUÍMICA UNIVERSITARIA", semestre: 1, creditos: 3, prerrequisitos: [] },
  { codigo: "521227", nombre: "CÁLCULO III", semestre: 3, creditos: 5, prerrequisitos: ["527148", "525147"] },
  { codigo: "580523", nombre: "TALLER DE EMPRENDIMIENTO", semestre: 10, creditos: 3, prerrequisitos: ["580511", "580513"] },
  { codigo: "580699", nombre: "MEMORIA DE TÍTULO (TERMINAL HABILITANTE)", semestre: 11, creditos: 18, prerrequisitos: [] }
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
