var botaoBuscarCidade = document.querySelector('#botao-buscar-cidade');
var botaoBuscarEspecialidade = document.querySelector('#botao-buscar-especialidade');
var container = document.getElementById('container');

let cidadeInvalida = document.querySelector("#cidade-invalida");
let especialidadeInvalida = document.querySelector("#especialidade-invalida");

let especialidade;
let cidade;

window.onload = () => {
  cidadeInvalida.style.display = "none";
  especialidadeInvalida.style.display = "none";
}

const changeCidade = event => {
  cidade = event.target.value;
}

const changeEspecialidade = event => {
  especialidade = event.target.value;
}

botaoBuscarCidade.addEventListener("click", () => {
  if (cidade.length < 3) {
    cidadeInvalida.innerHTML = "O campo 'Cidade' está inválido. Deve ter no mínimo 3 caracteres.";
    cidadeInvalida.style.display = "block";
    cidadeInvalida.style.color = "red";
  }
});

botaoBuscarEspecialidade.addEventListener("click", () => {
  if (especialidade.length < 5) {
    especialidadeInvalida.innerHTML = "O campo 'Especialidade' está inválido. Deve ter no mínimo 5 caracteres.";
    especialidadeInvalida.style.display = "block";
    especialidadeInvalida.style.color = "red";
  }
});



