var botaoBuscarCidade = document.querySelector('#botao-buscar-cidade');
var botaoBuscarEspecialidade = document.querySelector('#botao-buscar-especialidade');
var container = document.getElementById('container');
let containerProcureMedico = document.querySelector("#container-procure-medico");

let mensagemCidadeInvalida = document.querySelector("#cidade-invalida");
let mensagemEspecialidadeInvalida = document.querySelector("#especialidade-invalida");

const MENSAGEM_CAMPO_CIDADE_INVALIDA = "O campo 'Cidade' está inválido. Deve ter no mínimo 3 caracteres.";
const MENSAGEM_CIDADE_NAO_ENCONTRADA = "Não foram encontrados médicos para essa cidade. Tente novamente.";

const MENSAGEM_CAMPO_ESPECIALIDADE_INVALIDA = "O campo 'Especialidade' está inválido. Deve ter no mínimo 5 caracteres.";
const MENSAGEM_ESPECIALIDADE_NAO_ENCONTRADA = "Não foram encontrados médicos para essa especialidade. Tente novamente.";

let especialidade;
let cidade;

window.onload = () => {
  mensagemCidadeInvalida.style.display = "none";
  mensagemEspecialidadeInvalida.style.display = "none";
  container.style.display = "none";
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
  exibirDadosMedicoCidade(cidade);
});

const validarCidade = cidade => {
  let cidadeValida = true;

  if (cidade.length < 3) {
    exibirMensagemErroCidade(MENSAGEM_CAMPO_CIDADE_INVALIDA);
    return cidadeValida = false;
  }

  return cidadeValida;
}

const exibirDadosMedicoCidade = cidade => {
  let listaMedicosCadastrados = localStorage.getItem("listaUser");

  if (!listaMedicosCadastrados) {
    exibirMensagemErroCidade(MENSAGEM_CIDADE_NAO_ENCONTRADA);
    return;
  }

  listaMedicosCadastrados = JSON.parse(listaMedicosCadastrados);

  for (let dadosMedico of listaMedicosCadastrados) {
    console.log(dadosMedico);

    let cidadeCadastrada = dadosMedico.cidadecad.toLowerCase();

    cidade = cidade.toLowerCase();

    if (cidade == cidadeCadastrada) {
      let nomeCadastrado = dadosMedico.nomecad;
      let especidadeCadastrada = dadosMedico.especad;
      let crmCadastrado = dadosMedico.crmcad;

      // Exibir nome, especialidade e CRM
      let listaDadosMedico = document.createElement("ul");
      listaDadosMedico.classList.add("lista-dados-medico");

      let nomeMedico = document.createElement("li");
      nomeMedico.innerHTML = `Nome: ${nomeCadastrado}`;

      let especialidadeMedico = document.createElement("li");
      especialidadeMedico.innerHTML = `Especialidade: ${especidadeCadastrada}`;

      let crmMedico = document.createElement("li");
      crmMedico.innerHTML = `CRM: ${crmCadastrado}`;

      listaDadosMedico.appendChild(nomeMedico);
      listaDadosMedico.appendChild(especialidadeMedico);
      listaDadosMedico.appendChild(crmMedico);

      container.appendChild(listaDadosMedico);
      container.style.display = "block";
      containerProcureMedico.style.height = "auto";
    } else {
      exibirMensagemErroCidade(MENSAGEM_CIDADE_NAO_ENCONTRADA);
    }
  }
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
    exibirMensagemErroEspecialidade(MENSAGEM_CAMPO_ESPECIALIDADE_INVALIDA);
    return especialidadeValida = false;
  }

  return especialidadeValida;
}

const exibirMensagemErroCidade = mensagem => {
  mensagemCidadeInvalida.innerHTML = mensagem;
  mensagemCidadeInvalida.style.display = "block";
  mensagemCidadeInvalida.style.color = "red";
}

const exibirMensagemErroEspecialidade = mensagem => {
  mensagemEspecialidadeInvalida.innerHTML = mensagem;
  mensagemEspecialidadeInvalida.style.display = "block";
  mensagemEspecialidadeInvalida.style.color = "red";
}

