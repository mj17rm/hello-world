function teclar(caracter){
    //executar
    ecra.innerHTML += caracter;

    calcular();
}


function limpar(){
    //executar
    ecra.innerHTML = "";

    calcular();
}

function calcular(){
    let kw = ecra.innerHTML;
    let resultado = parseFloat(kw) * 1.341;

    if(isNaN(resultado)){
        saida.innerHTML = "";
    }
    else{
        saida.innerHTML = kw + " kW = " + resultado.toFixed(3) + " Hp";
    }
}