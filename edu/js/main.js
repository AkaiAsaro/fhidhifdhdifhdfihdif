import {validarformulario} from './validacao.js'


document.getElementById("formu").addEventListener('submit', function(evento){
    evento.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('pass').value;
    const comsenha = document.getElementById('pass2').value;
});
const { valido, mensagem } = validarformulario(nome, email, senha, comsenha);
if(!valido) {
    alert(mensagem)

 } else {
    alert('login feito')
    window.location.href = 'bemvindo.html';
 }

