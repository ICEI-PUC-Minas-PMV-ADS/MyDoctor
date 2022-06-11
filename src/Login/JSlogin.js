let userLogin = function () {
// Essa função userLogin recebe e envia dados para o servidor
    let form = document.getElementById("login-form");
    // Essa função "get" busca o formulário de login.
    let email = form.elements.namedItem("email").value;
    let senha = form.elements.namedItem("senha").value;
    let credentials = "email=" + email + "senha=" + senha;
    const xml = new XMLHttpRequest();
    // Essa request é uma função manda que a informação para o servidor, ou seja, usamos "get" pra localizar
    // a informação e "XML...request" para mandar de volta para o servidor.

    xml.onreadystatechange = function () {
    // É a criação da condição que chama a função
        if (xml.status == 200) {
        //  Esse XML... retorna o código HTTP da resposta da chamada
            console.log(xml.response);
        //  Esse console... retorna o conteúdo do corpo da resposta vinda do servidor
        }
    };

    xml.open("POST", "login.php");
    // POST faz o servidor aceitar os dados anexados no corpo da mensagem para armazenamento 
    // o PHP representa a url que nós vamos enviar a requisição
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Dá o valor do cabeçalho de uma requisição HTTP.
    xml.send(credentials);
    // Método que envia a requesição para o servidor.
}