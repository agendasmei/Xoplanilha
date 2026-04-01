let fixa = 0;
let extra = 0;
let despesas = [];

function salvarRenda() {
  fixa = Number(document.getElementById("fixa").value);
  extra = Number(document.getElementById("extra").value);
  atualizar();
}

function addDespesa() {
  let nome = document.getElementById("nome").value;
  let valor = Number(document.getElementById("valor").value);
  let tipo = document.getElementById("tipo").value;

  despesas.push({nome, valor, tipo});
  atualizar();
}

function atualizar() {
  let rendaTotal = fixa + extra;
  let gastos = despesas.reduce((a,b)=>a+b.valor,0);
  let fixos = despesas
    .filter(d => d.tipo === "Fixo")
    .reduce((a,b)=>a+b.valor,0);

  let sobra = rendaTotal - gastos;

  document.getElementById("rendaTotal").innerText = "R$ " + rendaTotal;
  document.getElementById("gastos").innerText = "R$ " + gastos;
  document.getElementById("fixos").innerText = "R$ " + fixos;
  document.getElementById("sobra").innerText = "R$ " + sobra;

  document.getElementById("lista").innerHTML =
    despesas.map(d => `${d.nome} - R$${d.valor}`).join("<br>");
}

function trocar(sec) {
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(sec).classList.add("active");
}
