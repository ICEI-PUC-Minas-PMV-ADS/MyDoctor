let btn = document.querySelector('#versenha')
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#txtn9')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let nome = document.querySelector("#txtn1")
let labelnome = document.querySelector("#labelnome")
let validnome = false
let email = document.querySelector("#txtn2")
let labelemail = document.querySelector("#labelemail")
let validemail = false
let celular = document.querySelector("#txtn3")
let labelcelular = document.querySelector("#labelcelular")
let validcelular = false
let cidade = document.querySelector("#txtn4")
let labelcidade = document.querySelector("#labelcidade")
let validcidade = false
let endereco = document.querySelector("#txtn5")
let labelendereco = document.querySelector("#labelendereço")
let validendereco = false
let estado = document.querySelector("#txtn6")
let labelestado = document.querySelector("#labelestado")
let validestado = false
let esp = document.querySelector("#txtn7")
let labelesp = document.querySelector("#labelespe")
let validesp = false
let crm = document.querySelector("#txtn8")
let labelcrm = document.querySelector("#labelcrm")
let validcrm = false
let senha = document.querySelector("#txtn9")
let labelsenha = document.querySelector("#labelsenha")
let validsenha = false
let msgError = document.querySelector("#msgError")
let msgSuccess = document.querySelector("#msgSuccess")
var codDD = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];



nome.addEventListener('keyup', () => {
    if (nome.value.length < 3) {
        labelnome.setAttribute('style', 'color:red')
        labelnome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color:red')
        validnome = false





    } else {
        labelnome.setAttribute('style', 'color:green')
        labelnome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:green')
        validnome = true



    }
})
nome.addEventListener('keyup', () => {
    if (nome.value.length == 0) {
        labelnome.setAttribute('style', 'color:#272262')
        labelnome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:#1e231d')
        validnome = false

    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 4) {
        labelemail.setAttribute('style', 'color:red')
        labelemail.innerHTML = 'E-mail *Insira no mínimo 4 caracteres'
        email.setAttribute('style', 'border-color:red')
        validemail = false


    } else {
        labelemail.setAttribute('style', 'color:green')
        labelemail.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color:green')
        validemail = true
    }
})
email.addEventListener('keyup', () => {
    if (email.value.length == 0) {
        labelemail.setAttribute('style', 'color:#272262')
        labelemail.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color:#1e231d')
        validemail = false

    }
})




celular.addEventListener('keyup', () => {

    if (isNaN(celular.value) || celular.value.length !== 11 || codDD.indexOf(parseInt(celular.value.substr(0, 2))) == -1) {
        labelcelular.setAttribute('style', 'color:red')
        labelcelular.innerHTML = 'Celular *Insira apenas números válidos, são 11 dígitos (DDD + número)'
        celular.setAttribute('style', 'border-color:red')
        validcelular = false

        if (codDD.indexOf(parseInt(celular.value.substr(0, 2))) == -1) {
            labelcelular.setAttribute('style', 'color:red')
            labelcelular.innerHTML = 'Celular *dd Inválido'
            celular.setAttribute('style', 'border-color:red')
            validcelular = false


        }
    } else {
        labelcelular.setAttribute('style', 'color:green')
        labelcelular.innerHTML = 'Celular'
        celular.setAttribute('style', 'border-color:green')
        validcelular = true
    }
})
celular.addEventListener('keyup', () => {
    if (celular.value.length == 0) {
        labelcelular.setAttribute('style', 'color:#272262')
        labelcelular.innerHTML = 'Celular'
        celular.setAttribute('style', 'border-color:#1e231d')
        validcelular = false

    }
})
cidade.addEventListener('keyup', () => {
    if (cidade.value.length <= 3) {
        labelcidade.setAttribute('style', 'color:red')
        labelcidade.innerHTML = 'Cidade *Insira no mínimo 4 caracteres'
        cidade.setAttribute('style', 'border-color:red')
        validcidade = false


    } else {
        labelcidade.setAttribute('style', 'color:green')
        labelcidade.innerHTML = 'Cidade'
        cidade.setAttribute('style', 'border-color:green')
        validcidade = true
    }
})
cidade.addEventListener('keyup', () => {
    if (cidade.value.length == 0) {
        labelcidade.setAttribute('style', 'color:#272262')
        labelcelular.innerHTML = 'Cidade'
        cidade.setAttribute('style', 'border-color:#1e231d')
        validcidade = false

    }
})

endereco.addEventListener('keyup', () => {
    if (endereco.value.length <= 3) {
        labelendereco.setAttribute('style', 'color:red')
        labelendereco.innerHTML = 'Endereço *Insira no mínimo 4 caracteres'
        endereco.setAttribute('style', 'border-color:red')
        validendereco = false


    } else {
        labelendereco.setAttribute('style', 'color:green')
        labelendereco.innerHTML = 'Endereço'
        endereco.setAttribute('style', 'border-color:green')
        validendereco = true
    }
})
endereco.addEventListener('keyup', () => {
    if (endereco.value.length == 0) {
        labelendereco.setAttribute('style', 'color:#272262')
        labelendereco.innerHTML = 'Endereço'
        endereco.setAttribute('style', 'border-color:#1e231d')
        validendereco = false
    }
})

estado.addEventListener('keyup', () => {
    if (estado.value.length <= 3) {
        labelestado.setAttribute('style', 'color:red')
        labelestado.innerHTML = 'Estado *Insira no mínimo 4 caracteres'
        estado.setAttribute('style', 'border-color:red')
        validestado = false


    } else {
        labelestado.setAttribute('style', 'color:green')
        labelestado.innerHTML = 'Estado'
        estado.setAttribute('style', 'border-color:green')
        validestado = true
    }
})
estado.addEventListener('keyup', () => {
    if (estado.value.length == 0) {
        labelestado.setAttribute('style', 'color:#272262')
        labelestado.innerHTML = 'Estado'
        estado.setAttribute('style', 'border-color:#1e231d')
        validestado = false
    }
})
esp.addEventListener('keyup', () => {
    if (esp.value.length <= 3) {
        labelesp.setAttribute('style', 'color:red')
        labelesp.innerHTML = 'Especialidade *Insira no mínimo 4 caracteres'
        esp.setAttribute('style', 'border-color:red')
        validesp = false


    } else {
        labelesp.setAttribute('style', 'color:green')
        labelesp.innerHTML = 'Especialidade'
        esp.setAttribute('style', 'border-color:green')
        validesp = true
    }
})
esp.addEventListener('keyup', () => {
    if (esp.value.length == 0) {
        labelesp.setAttribute('style', 'color:#272262')
        labelesp.innerHTML = 'Especialidade'
        esp.setAttribute('style', 'border-color:#1e231d')
        validesp = false
    }
})
crm.addEventListener('keyup', () => {
    if (crm.value.length <= 3) {
        labelcrm.setAttribute('style', 'color:red')
        labelcrm.innerHTML = 'CRM *Insira no mínimo 4 caracteres'
        crm.setAttribute('style', 'border-color:red')
        validcrm = false


    } else {
        labelcrm.setAttribute('style', 'color:green')
        labelcrm.innerHTML = 'CRM'
        crm.setAttribute('style', 'border-color:green')
        validcrm = true
    }
})
crm.addEventListener('keyup', () => {
    if (crm.value.length == 0) {
        labelcrm.setAttribute('style', 'color:#272262')
        labelcrm.innerHTML = 'CRM'
        crm.setAttribute('style', 'border-color:#1e231d')
        validcrm = false
    }
})
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 3) {
        labelsenha.setAttribute('style', 'color:red')
        labelsenha.innerHTML = 'Senha *Insira no mínimo 4 caracteres'
        senha.setAttribute('style', 'border-color:red')
        validsenha = false


    } else {
        labelsenha.setAttribute('style', 'color:green')
        labelsenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green')
        validsenha = true
    }
})
senha.addEventListener('keyup', () => {
    if (senha.value.length == 0) {
        labelsenha.setAttribute('style', 'color:#272262')
        labelsenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:#1e231d')
        validsenha = false
    }
})


var inputNome = document.querySelector("#txtn1");
txtn1.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});

var inputcidade = document.querySelector("#txtn4");
txtn4.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});

var inputestado = document.querySelector("#txtn6");
txtn6.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});

var inputesp = document.querySelector("#txtn7");
txtn7.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});


function cadastrar() {
    if (validnome && validemail && validsenha && validcelular && validcidade && validendereco && validestado && validesp && validcrm && validsenha) {
        let listaUser = localStorage.getItem('listaUser');

        listaUser = JSON.parse(listaUser);
        console.log(listaUser);

        if (listaUser == null) {
            listaUser = new Array();
        }

        listaUser.push(
            {
                nomecad: nome.value,
                emailcad: email.value,
                celularcad: celular.value,
                cidadecad: cidade.value,
                enderecocad: endereco.value,
                estadocad: estado.value,
                especad: esp.value,
                crmcad: crm.value,
                senhacad: senha.value

            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário, favor aguardar...</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''
        setTimeout(() => {
            window.location.href = '../Login/login.html'
        }, 3000)

    } else {
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display:none')
    }

}




