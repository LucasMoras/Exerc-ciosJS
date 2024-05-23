function validarNumeroPositivo(){
    var numero = document.getElementById("numero").value
    if (numero > 0){
        alert ("Seu número é positivo")
    }else(numero < 0){
        alert ("Insira um número valido")
    }    
}        
