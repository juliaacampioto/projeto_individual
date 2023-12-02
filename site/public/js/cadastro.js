function validarEmail(emailVar) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailVar);
}

function cadastrar() {

  var nomeVar = input_nome.value;
  var sobrenomeVar = input_sobrenome.value;
  var emailVar = input_email.value;
  var senhaVar = input_senha.value;
  var confirmacaoSenhaVar = input_confirmarSenha.value;

  if (nomeVar === '' || sobrenomeVar === '' || emailVar === '' || senhaVar === '' || confirmacaoSenhaVar === '') {
    div_erro.innerHTML = `Preencha todos os campos!`;
  } else if (senhaVar !== confirmacaoSenhaVar) {
    div_erro.innerHTML = `As senhas não coincidem`;
  } else if (!validarEmail(emailVar)) {
    div_erro.innerHTML = `Por favor, insira um e-mail válido`;
  } else if (senhaVar.length < 8) {
    div_erro.innerHTML = `A senha deve conter pelo menos 8 dígitos`
  } else {
    window.location.href = 'login.html';
    fetch("/cadastro/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeVar,
        sobrenomeServer: sobrenomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;

  }

}