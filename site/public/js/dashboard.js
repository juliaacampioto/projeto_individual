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
        backgroundColor: ['rgb(221,160,221) '],
        borderColor: ['rgb(221,160,221) '],
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