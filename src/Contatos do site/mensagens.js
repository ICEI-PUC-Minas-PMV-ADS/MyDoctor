var listaMensagensUsuarios = new Array();

function enviarMensagem(event) {
    event.preventDefault();

    var nome = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("emailUsuario").value;
    var mensagem = document.getElementById("mensagemUsuario").value;

    var dadosUsuario = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    listaMensagensUsuarios.push(dadosUsuario);
    localStorage.setItem('listaMensagensUsuarios', JSON.stringify(listaMensagensUsuarios));

    limparFormulario();
}

function limparFormulario() {
    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
    document.getElementById("mensagemUsuario").value = "";
}
