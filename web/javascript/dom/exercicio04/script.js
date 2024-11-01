const botao = document.getElementById('botao')
const input = document.getElementById('input')
const lista = document.getElementById('lista')
let item = 0
botao.addEventListener('click', () => {
    item++
    const li = document.createElement('li')
    const botao = document.createElement('button')
    botao.innerText = 'Excluir'
    li.innerText = input.value + ' - ' + item + ' '
    li.appendChild(botao)
    lista.appendChild(li)
    botao.addEventListener('click', () => {
        li.remove()
        item--
    })
    input.value = ''
})
