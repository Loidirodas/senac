
const botao = document.getElementById('botao')
const login = document.getElementById('login')
const senha = document.getElementById('senha')
botao.addEventListener('click', () => {
    if(login.value === 'admin' && senha.value === 'admin'){
        console.log('Bem-vindo admin')
    } else {
        console.log('Acesso negado')
    }
})