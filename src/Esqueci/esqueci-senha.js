const button = document.getElementById("button")

button.addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.getElementById('email');

    const valorEmail = email.value;

    console.log(email)

    if (valorEmail == '') {
        email.classList.add("errorInput")
        alert("Preencha o campo e-mail");
    }

    if (valorEmail.indexOf("@") > -1 && (valorEmail.indexOf(".")) > -1) {
        email.classList.add("errorInput")
        alert("E-mail enviado");
    }

    else {
        email.classList.add("errorInput")
        alert("E-mail Inválido")
    }
});
