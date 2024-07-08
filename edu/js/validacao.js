export function validarformulario (nome, email, senha, comsenha){
    const critsenha = [
        /[a-z]/,
        /[A-Z]/,
        /\d/,
        /\w_/,

    ]
}
if ( !nome || !email || !senha ||comsenha){
    return {valido: false, mensagem: 'todos os campos são obrigatórios'}
}
if (senha.length <8) {
    return{valido: false, mensagem:'senha deve conter 8 caracteres'}
}
for (const criterio of critsenha) {
    if(!criterio.test(senha)) {
        return {valido: false, mensasgem: ' a senha deve ter pelo menos uma letra minuscula, uma maiuscula um caractere especial e um número'};
    }
}
if (senha !== comsenha) {
    return {valido: false, mensasgem: 'as senhas não se batem'};
}