function cadastrar() {
  
    var nomeVar = input_nome.value;
    var sobrenomeVar = input_sobrenome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmarSenha.value;

  // if(nomeVar == `` || sobrenomeVar == `` || emailVar == `` || senhaVar == `` || confirmacaoSenhaVar == ``){

  // }


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
