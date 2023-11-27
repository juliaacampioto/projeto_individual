var nome = sessionStorage.NOME_USUARIO;
// var ultimoLivro = sessionStorage.ULTIMO_LIVRO;

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

                    if (qtsLivros == 1) {
                        div_caracteristica.innerHTML = `<h2><b>Damon</b></h2> <span class="descricaoPerfil"> Seus diários são tão frequentes quanto os de um Damon produtivo. Continue a escrever com essa cadência... ou não, afinal, um pouco de mistério não faz mal, certo? </span>`;
                    } else if (qtsLivros == 16) {
                        div_caracteristica.innerHTML = `<h2><b>Katherine</b></h2> <span class="descricaoPerfil">Parece que você está seguindo os passos de uma verdadeira Katherine, guardando segredos tão bem quanto ela. Continue a escrever, mas lembre-se, sempre é bom ter um truque na manga.</span>`;
                    } else if (qtsLivros <= 24) {
                        div_caracteristica.innerHTML = `<h2><b>Elena</b></h2> <span class="descricaoPerfil">Você está compartilhando suas aventuras de forma cativante. Continue registrando suas descobertas e vivências</span>`;
                    } else if (qtsLivros > 24) {
                        div_caracteristica.innerHTML = `<h2><b>Damon</b></h2> <span class="descricaoPerfil">Seus diários são uma prova do compromisso, tão regulares quanto os de um Stefan que documentava cada detalhe. Continue escrevendo, mostrando sua dedicação à narrativa da sua vida. </span>`;
                    } else { console.log(`Erro ao capturar perfil... valor da variavel ${qtsLivros}`) }
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
            return response.json(); // Esta linha é essencial para extrair o corpo da resposta
        })
        .then(data => {
            // Ao utilizar then(data => { ... }), você está basicamente dizendo: "Quando os dados forem recebidos com sucesso do servidor, execute esta função e utilize esses dados dentro deste bloco de código." 
            const ctx = document.getElementById('myChart');

            const livros = [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ];


            const labels = data.map(item => livros[item.mes - 1]);
            const dados = data.map(item => item.qtd);
            // console.log(dados)

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
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Erro no gráfico', error);
        });
}

function ultimoLivro(){
    fetch(`/livro/ultimoLivro/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if(resposta.nomeLivro){
                       div_livro_lendo.innerHTML = `${resposta.nomeLivro}`;
                    }
                });
            });
        });
    }

    function ultimaData(){
        fetch(`/livro/ultimaData/${idUsuario}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (resposta) {
                resposta.json().then((resposta) => {
                    resposta.forEach((resposta) => {
                        if(resposta.dtInicio){
                           div_data_lendo.innerHTML = new Date(resposta.dtInicio).toLocaleDateString();
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
};



// const labels2 = [
//     'Romance', 
//     'Ficção',
//     'Ação',
//     'Poesia',
// ];

// const data2 = {
//     labels: labels2,
//     datasets: [
//     {
//         label: 'Gêneros lidos',
//         backgroundColor: ['plum'],
//         borderColor: ['rgb(198,35,104) '],
//         data: [15, 5, 20, 10, 8, 1],
//     }
//     ]
// };


// const config2 = {
//     type: 'bar',
//     data: data2,
//     options: {}
// };

// const myChart2 = new Chart(
//     document.getElementById('myChart2'),
//     config2
// );




const labels = [
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',

];

const labels3 = [
    'Romance',
    'Ficção',
    'Ação',
    'Poesia'
];

const data3 = {
    labels: labels3,
    datasets: [
        {
            backgroundColor: ['rgba(146, 45, 146, 0.696)', 'rgb(199, 83, 122)', 'rgb(216, 140, 152)', 'rgb(226, 97, 196)'],
            borderColor: 'black', // Adicionando uma borda branca para separar as fatias
            borderWidth: 3, // Espessura da borda
            data: [20, 10, 50, 20],
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