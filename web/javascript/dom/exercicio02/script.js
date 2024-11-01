// Utilizando javascript crie um contador de clicks, como funciona na tela deve aparecer um valor para representar a quantidade de clicks começando em 0, assim que o usuario clicar no botão o valor deve acrescentar +1

const botao = document.getElementById('botao')
const texto = document.getElementById('texto')
texto.innerHTML = 0
botao.addEventListener('click', () => {
    texto.innerHTML = parseInt(texto.innerHTML) + 1
})