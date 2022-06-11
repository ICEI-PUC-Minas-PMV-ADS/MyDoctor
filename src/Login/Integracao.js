let listaUser = []
function entrar(event){
    console.log('Entrou')
    event.preventDefault()
    let usuario = document.querySelector('#email')
    //  let userlabel = document.querySelector('#userlabel')

    let senhalog = document.querySelector('#senha')
    //  let senhalabel = document.querySelector('#senhalabel')

    let msgError = document.querySelector('#msgError')
    

    let uservalid = {
        nome: '',
        user: '',
        celular: '',
        cidade: '',
        endereco: '',
        estado: '',
        esp: '',
        crm: '',
        senha: '',
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) =>{
        if (usuario.value == item.emailcad && senhalog.value == item.senhacad) {
            uservalid = {
                nome: item.nomecad,
                user: item.emailcad,
                celular: item.celularcad,
                cidade: item.cidadecad,
                endereco: item.enderecocad,
                estado: item.estadocad,
                esp: item.especad,
                crm: item.crmcad,
                senha: item.senhacad,

            }
        }
    })
    if (usuario.value == uservalid.user && senhalog.value == uservalid.senha) {
        console.log('validar')
        window.location.href = '../../../index.html'

    } else {
    
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    } 
}