var listaDadosUsuarios = new Array()
function enviarMensagem(event) {
    event.preventDefault()
    var nome = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("emailUsuario").value;
    var mensagem = document.getElementById("mensagemUsuario").value;
    var dadosUsuario = {
        nome: nome,
        email: email,
        mensagem: mensagem

    };
    listaDadosUsuarios.push(dadosUsuario)
    localStorage.setItem('listaDadosUsuarios', JSON.stringify(listaDadosUsuarios))
}
