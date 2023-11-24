var nome = sessionStorage.NOME_USUARIO; 

titulo.innerHTML = `Olá, ${nome}! <br> Aqui está a sua dashboard`; 

const labels2 = [
    '2018', 
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',

];

const data2 = {
    labels: labels2,
    datasets: [
    {
        label: 'Quantidade de livros',
        backgroundColor: ['rgb(198,35,104) '],
        borderColor: ['rgb(198,35,104) '],
        data: [15, 5, 20, 10, 8, 1],
    }
    ]
};


const config2 = {
    type: 'bar',
    data: data2,
    options: {}
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);




const labels = [
    '2018', 
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',

];

const data = {
    labels: labels,
    datasets: [
    {
        label: 'Quantidade de livros',
        backgroundColor: ['rgb(198,35,104) '],
        borderColor: ['rgb(198,35,104) '],
        data: [15, 5, 20, 10, 8, 1],
    }
    ]
};


const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);





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
            backgroundColor: ['rgb(198,35,104)', 'rgb(255,99,132)', 'rgb(255,205,86)', 'rgb(75,192,192)', 'rgb(54,162,235)', 'rgb(153,102,255)'],
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

function abrir_dados(){
    const modal = document.getElementById('div_mostrar');
    modal.classList.add('abrir');
    
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'div_mostrar'){
            modal.classList.remove('abrir');
        }
    })
}