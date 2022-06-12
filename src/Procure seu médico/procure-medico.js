var botaoBuscarCidade = document.querySelector('#botao-buscar-cidade');
var botaoBuscarEspecialidade = document.querySelector('#botao-buscar-especialidade');
var container = document.getElementById('container');

let mensagemCidadeInvalida = document.querySelector("#cidade-invalida");
let mensagemEspecialidadeInvalida = document.querySelector("#especialidade-invalida");

let especialidade;
let cidade;

window.onload = () => {
  mensagemCidadeInvalida.style.display = "none";
  mensagemEspecialidadeInvalida.style.display = "none";
}

const changeCidade = event => {
  cidade = event.target.value;
}

const changeEspecialidade = event => {
  especialidade = event.target.value;
}

botaoBuscarCidade.addEventListener("click", () => {
  let campoCidadeValido = validarCidade(cidade);

  if (!campoCidadeValido) {
    return;
  }

  mensagemCidadeInvalida.style.display = "none";

});

const validarCidade = cidade => {
  let cidadeValida = true;

  if (cidade.length < 3) {
    mensagemCidadeInvalida.innerHTML = "O campo 'Cidade' está inválido. Deve ter no mínimo 3 caracteres.";
    mensagemCidadeInvalida.style.display = "block";
    mensagemCidadeInvalida.style.color = "red";
    return cidadeValida = false;
  }

  return cidadeValida;
}

botaoBuscarEspecialidade.addEventListener("click", () => {
  let especialidadeValida = validarEspecialidade(especialidade);

  if (!especialidadeValida) {
    return;
  }

  mensagemEspecialidadeInvalida.style.display = "none";

});

const validarEspecialidade = especialidade => {
  let especialidadeValida = true;

  if (especialidade.length < 5) {
    mensagemEspecialidadeInvalida.innerHTML = "O campo 'Especialidade' está inválido. Deve ter no mínimo 5 caracteres.";
    mensagemEspecialidadeInvalida.style.display = "block";
    mensagemEspecialidadeInvalida.style.color = "red";
    return especialidadeValida = false;
  }

  return especialidadeValida;
}



