function insert(num){
    const numero = document.getElementById('resutado').innerHTML 
    document.getElementById('resutado').innerHTML = numero + num

}

function clean() {
    document.getElementById('resutado').innerHTML = ''
}

function back() {
   const resutado = document.getElementById('resutado').innerHTML
   document.getElementById('resutado').innerHTML = resutado.substring(0, resutado.length -1)
}

function calcular() {
    const resutado = document.getElementById('resutado').innerHTML
    if(resutado){
        document.getElementById('resutado').innerHTML = eval(resutado)
    } else {
        document.getElementById('resutado').innerHTML = "Nada..."
    }
}




