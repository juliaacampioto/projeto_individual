var nome = sessionStorage.NOME_USUARIO;

titulo.innerHTML = `Olá, ${nome}! <br> Aqui está a sua dashboard:`;

function listarLivro() {
    console.log(idUsuario)
    fetch(`/livro/listarLivro/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
            resposta.json()
                .then((json) => {
                    console.log(json);
                    console.log(json[0].qtdLivros);

                    var qtsLivros = json[0].qtdLivros;
                    console.log(qtsLivros);

                    var qtdTotal = document.getElementById("div_classificacao")
                    qtdTotal.innerHTML = `<b>${qtsLivros}</b>`;

                    if (qtsLivros <= 5) {
                        div_caracteristica.innerHTML = `Você é um <b style="color:  rgba(146, 45, 146, 0.696);">leitor limitado</b>! <br> Precisa de mais foco para ampliar a sua leitura!<br> `;
                    } else if (qtsLivros <= 10) {
                        div_caracteristica.innerHTML = `Você é um <b style="color:  rgb(199, 83, 122);">leitor casual</b>! <br> Está lendo menos livros do que deveria!`;
                    } else if (qtsLivros <= 15) {
                        div_caracteristica.innerHTML = `Você é um <b style="color:   rgb(216, 140, 152);">leitor consistente</b>! <br> A leitura está no seu cotidiano, mas você pode melhorar! <br> `;
                    } else if (qtsLivros <= 20) {
                        div_caracteristica.innerHTML = `Você é um <b style="color:    rgb(226, 97, 196);">leitor dedicado</b>! <br> Você está lendo bastante, parabéns! Falta pouco para ser um super leitor!`;
                    } else {
                        div_caracteristica.innerHTML = `PARABÉNS! <br> Você é um <b style="color:    rgba(243, 75, 255, 0.822);">super leitor</b>!<span> Isso é o que esperava de você, eu sabia que você ia chegar até aqui!</span>`;
                    }

                })
        })


        .catch(function (erro) {
            console.error('Erro desconhecido na API.');
        }
        );
}


function buscarLivro() {

    fetch(`/livro/buscarLivro/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            return response.json();
        })
        .then(data => {
            const ctx = document.getElementById('myChart');

            const livros = [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ];


            const labels = data.map(item => livros[item.mes - 1]);
            const dados = data.map(item => item.qtd);

            console.log(labels, dados)

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Quantidade de livros lidos por mês',
                        data: dados,
                        backgroundColor: 'plum',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1,
                                precision: 0
                            }
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Erro no gráfico', error);
        });
}

function ultimoLivro() {
    fetch(`/livro/ultimoLivro/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.nomeLivro) {
                        div_livro_lendo.innerHTML = `${resposta.nomeLivro}`;
                    }
                });
            });
        });
}

function ultimaData() {
    fetch(`/livro/ultimaData/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.dtInicio) {
                        div_data_lendo.innerHTML = new Date(resposta.dtInicio).toLocaleDateString();
                    }
                });
            });
        });
}

function relembrarLeituras() {
    div_relembrar.innerHTML = ``;
    var contador = 0;
    fetch(`/livro/relembrarLeituras/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.nomeLivro && resposta.autor) {
                        contador++;
                        div_relembrar.innerHTML += `<br><b style="color:  darkorchid;" >Livro ${contador} - </b>${resposta.nomeLivro} - ${resposta.autor}<br>`;
                    }
                });
            });
        });
}

function mostrarLivroFav() {
    fetch(`/livro/mostrarLivroFav/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.livro) {
                        div_livro_fav.innerHTML = `${resposta.livro}`;
                    }
                });
            });
        });

}

function mostrarAutorFav() {
    fetch(`/livro/mostrarAutorFav/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.autor) {
                        div_autor_fav.innerHTML = `${resposta.autor}`;
                    }
                });
            });
        });

}


window.onload = function () {
    listarLivro();
    buscarLivro();
    ultimoLivro();
    ultimaData();
    mostrarLivroFav();
    mostrarAutorFav();
};

const labels3 = [
    'Janeiro',
    'Fevereiro',
    'Julho',
    'Novembro'
];

const data3 = {
    labels: labels3,
    datasets: [
        {
            backgroundColor: ['rgba(146, 45, 146, 0.696)', 'rgb(199, 83, 122)', 'rgb(216, 140, 152)', 'rgb(226, 97, 196)'],
            borderColor: 'black',
            borderWidth: 3,
            data: [20, 15, 50, 15],
        }
    ]
};

const config3 = {
    type: 'pie',
    data: data3,
    options: {}
};

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
);



function abrir_dados() {
    const modal = document.getElementById('div_mostrar');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'div_mostrar') {
            modal.classList.remove('abrir');
        }
    })
}

function abrir_dados2() {
    const modal = document.getElementById('div_mostrar2');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar2' || e.target.id == 'div_mostrar2') {
            modal.classList.remove('abrir');
        }
    })
}