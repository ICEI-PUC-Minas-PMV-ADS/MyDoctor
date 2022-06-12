const MENSAGEM_USUARIO_SEM_CADASTRO = "E-mail não está cadastrado. Realize o cadastro pela página 'Seja um médico parceiro'";
const button = document.getElementById("botao-redefinir-senha");

window.onload = () => {
    let containerNovaSenha = document.querySelector("#container-nova-senha");
    containerNovaSenha.style.display = "none";

    let mensagemEmailInvalido = document.querySelector("#mensagem-email-invalido");
    mensagemEmailInvalido.style.display = "none";
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email');

    const valorEmail = email.value;

    if (valorEmail == '') {
        email.classList.add("errorInput");
        alert("Preencha o campo e-mail");
    }

    if (valorEmail.indexOf("@") > -1 && (valorEmail.indexOf(".")) > -1) {
        verificarEmailCadastrado(valorEmail);
    } else {
        email.classList.add("errorInput");
        alert("E-mail Inválido");
    }
});

function verificarEmailCadastrado(emailUsuario) {
    let listaCadastros = localStorage.getItem('listaUser');

    listaCadastros = JSON.parse(listaCadastros);

    if (listaCadastros == null) {
        alert(MENSAGEM_USUARIO_SEM_CADASTRO);
        return;
    }

    if (listaCadastros != null) {

        for (itemCadastro of listaCadastros) {
            let emailCadastro = itemCadastro.emailcad;

            if (emailCadastro.length > 0 && emailUsuario.length > 0) {
                emailCadastro = emailCadastro.toLowerCase();
                emailUsuario = emailUsuario.toLowerCase();

                if (emailCadastro == emailUsuario) {
                    let inputEmail = document.getElementById("email");
                    inputEmail.style.display = "none";
                    button.style.display = "none";

                    criarContainerNovaSenha();
                } else {
                    let mensagemEmailInvalido = document.querySelector("#mensagem-email-invalido");
                    mensagemEmailInvalido.style.display = "block";
                    mensagemEmailInvalido.style.margin = "10px 0";
                    mensagemEmailInvalido.style.color = "red";
                    mensagemEmailInvalido.innerHTML = MENSAGEM_USUARIO_SEM_CADASTRO;
                }
            }
        }
    }
}

function criarContainerNovaSenha() {
    let mensagemEmailInvalido = document.querySelector("#mensagem-email-invalido");
    mensagemEmailInvalido.style.display = "none";

    let containerNovaSenha = document.querySelector("#container-nova-senha");
    containerNovaSenha.style.display = "block";

    let inputSenha = document.createElement("input");
    inputSenha.classList.add("input-nova-senha");
    inputSenha.setAttribute("placeholder", "Insira a nova senha");
    inputSenha.setAttribute("id", "input-nova-senha");
    inputSenha.setAttribute("type", "password");

    let checkboxSenha = document.createElement("input");
    checkboxSenha.classList.add("input-checkbox-mostrar-senha");
    checkboxSenha.setAttribute("type", "checkbox");
    checkboxSenha.addEventListener("click", () => {
        if (inputSenha.type == "password") {
            inputSenha.type = "text";
        } else {
            inputSenha.type = "password";
        }
    })

    let labelCheckboxSenha = document.createElement("label");
    labelCheckboxSenha.innerHTML = "Mostrar senha";

    let inputConfirmarSenha = document.createElement("input");
    inputConfirmarSenha.classList.add("input-nova-senha");
    inputConfirmarSenha.setAttribute("placeholder", "Confirme sua senha");
    inputConfirmarSenha.setAttribute("id", "input-confirmar-senha");
    inputConfirmarSenha.setAttribute("type", "password");

    let checkboxConfirmarSenha = document.createElement("input");
    checkboxConfirmarSenha.classList.add("input-checkbox-mostrar-senha");
    checkboxConfirmarSenha.setAttribute("type", "checkbox");
    checkboxConfirmarSenha.addEventListener("click", () => {
        if (inputConfirmarSenha.type == "password") {
            inputConfirmarSenha.type = "text";
        } else {
            inputConfirmarSenha.type = "password";
        }
    })

    let labelCheckboxConfirmarSenha = document.createElement("label");
    labelCheckboxConfirmarSenha.innerHTML = "Mostrar senha";

    let botaoEnviarSenha = document.createElement("button");
    botaoEnviarSenha.innerHTML = "Enviar nova senha";
    botaoEnviarSenha.classList.add("btn-nova-senha");
    botaoEnviarSenha.setAttribute("id", "botao-nova-senha");
    botaoEnviarSenha.addEventListener("click", e => {
        validarNovaSenha(e, inputSenha, inputConfirmarSenha);
    });

    containerNovaSenha.appendChild(inputSenha);
    containerNovaSenha.appendChild(checkboxSenha);
    containerNovaSenha.appendChild(labelCheckboxSenha);

    containerNovaSenha.appendChild(inputConfirmarSenha);
    containerNovaSenha.appendChild(checkboxConfirmarSenha);
    containerNovaSenha.appendChild(labelCheckboxConfirmarSenha);
    containerNovaSenha.appendChild(botaoEnviarSenha);
}

function validarNovaSenha(event, inputSenha, inputConfirmarSenha) {
    event.preventDefault();

    let senha = inputSenha.value;
    let confirmarSenha = inputConfirmarSenha.value;

    if (senha.length < 4 || confirmarSenha.length < 4) {
        alert("Senha inválida. Deve conter no mínimo 4 caracteres.");
        return;
    }

    if (senha != confirmarSenha) {
        alert("As senhas possuem valores diferentes. Tente novamente.");
        return;
    }

    substituirSenhaStorage(senha);
}

function substituirSenhaStorage(novaSenha) {
    let listaCadastros = localStorage.getItem('listaUser');

    if (listaCadastros != null) {
        listaCadastros = JSON.parse(listaCadastros);

        for (itemCadastro of listaCadastros) {
            let emailCadastro = itemCadastro.emailcad;
            emailCadastro = emailCadastro.toLowerCase();

            let emailUsuario = document.getElementById("email").value;
            emailUsuario = emailUsuario.toLowerCase();

            if (emailCadastro == emailUsuario) {
                let indiceItem = listaCadastros.indexOf(itemCadastro);
                listaCadastros[indiceItem].senhacad = novaSenha;

                // stringfy antes de salvar
                localStorage.setItem("listaUser", JSON.stringify(listaCadastros));
            }
        }
    }
}

