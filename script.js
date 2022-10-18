var url = "https://economia.awesomeapi.com.br/last/";
const valor_dolar = document.getElementById('valor_dolar')
var dolar = document.getElementById('dolar')
const real = document.getElementById('real')
var valorDolar = 0
var qtdDolar = 0
var qtdReal = 0
var dolarAgora = 0
var valorMoeda = 0


var moedaSelecionada = document.getElementById("contentselect");
var moeda = moedaSelecionada.value;




function get_data(moeda){
    url = "https://economia.awesomeapi.com.br/last/"
    url += moeda + "-BRL"
    fetch(url).then(res => res.json()).then(data => {
        show_data(data);
    })
}

function show_data(data){
    

    if(moeda == "USD"){
        let{bid} = data.USDBRL;
        valorMoeda = bid
    }else if(moeda == "EUR"){
        let{bid} = data.EURBRL;
        valorMoeda = bid
    }else if(moeda == "ARS"){
        let{bid} = data.ARSBRL;
        valorMoeda = bid
    }

    dolar.value = "1.00"

    dolarAgora = valorMoeda
    dolarAgora = (dolarAgora * 100) / 100
    real.value = dolarAgora.toFixed(3)


}


function calcularDolar(){
    valorDolar = dolarAgora
    qtdDolar = dolar.value
    valorDolar = dolarAgora * qtdDolar
    real.value = valorDolar.toFixed(2)
  
}

function calcularReal(){
    valorDolar = dolarAgora
    qtdReal = real.value

    valorDolar = qtdReal / dolarAgora
    
    dolar.value = valorDolar.toFixed(2)

}

document.getElementById('dolar').addEventListener("change", calcularDolar, false)
document.getElementById('real').addEventListener("change", calcularReal, false)
moedaSelecionada.addEventListener("change", function(){
    moeda = moedaSelecionada.value
    get_data(moeda)
    
})

get_data(moeda);

