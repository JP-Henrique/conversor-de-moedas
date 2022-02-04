//variaveis
const moedaA = document.getElementById('moedaA');
const moedaB = document.getElementById('moedaB');
const button = document.getElementById('button');
const valorPserConvertido = document.getElementById('valor');
const valorConvert = document.getElementById('valorCon');


function convert(x, y, valor) {
    const url = `http://economia.awesomeapi.com.br/json/last/${x}-${y}`;

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(json => {
        let i = 0;
        for(i in json) {
            const cotacao = json[i]['ask']
            const convertido = parseFloat((valor) * cotacao).toFixed(2);
            valorConvert.innerText = convertido
        }
    })

    
}

button.addEventListener('click', (a) => {
    if(moedaA.value.length == 0 && moedaB.value.length == 0 && valorPserConvertido.value.length == 0) {
        alert("Dados não preenchidos");
    }else {
        a.preventDefault();
        convert(moedaA.value.toUpperCase(), moedaB.value.toUpperCase(), valorPserConvertido.value);
    }
})






   








