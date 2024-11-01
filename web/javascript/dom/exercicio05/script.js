// validar login min 3 caracteres e senha min 6 caracteres sendo necessario pelo menos uma letra maiusculas, 
// uma letra minusculas e numeros. Ao clicar no botão deve aparecer mensagem de error em umtag small embaixo de cada input e se for sucesso deve redirecionar para a pagina logado.htm.

const botao = document.getElementById('botao')
const login = document.getElementById('login')
const senha = document.getElementById('senha')
const small = document.createElement('small')

botao.addEventListener('click', (event) => {
    //nao deixe o form atualizar quando o botao submit for clicado
    event.preventDefault()
    if(login.value.length < 3){
        small.classList.add('error')
        small.innerText = 'Login deve ter pelo menos 3 caracteres'
        login.parentElement.appendChild(small)
    }else if(senha.value.length < 6){
        small.classList.add('error')
        small.innerText = 'Senha deve ter pelo menos 6 caracteres'
        senha.parentElement.appendChild(small)
    }else if(!/[A-Z]/.test(senha.value)){
        small.classList.add('error')
        small.innerText = 'Senha deve ter pelo menos uma letra maiuscula'
        senha.parentElement.appendChild(small)
    }else if(!/[a-z]/.test(senha.value)){
        small.classList.add('error')
        small.innerText = 'Senha deve ter pelo menos uma letra minuscula'
        senha.parentElement.appendChild(small)
    }else if(!/[0-9]/.test(senha.value)){
        small.classList.add('error')
        small.innerText = 'Senha deve ter pelo menos um numero'
        senha.parentElement.appendChild(small)
    }else{
        window.location.href = 'logado.html'
    } 
})
