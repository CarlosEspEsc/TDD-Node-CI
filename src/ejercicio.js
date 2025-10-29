function fibonacci(n){

}

function esPinValido(pin){
    if(pin == "" || pin == null || pin == undefined)
        return false
    if(pin.length != 4 ||pin.length != 6)
        return false
    let parte1 = pin.slice(0, (pin.length/2))
    let parte2 = pin.slice((pin.length/2), pin.length)
    if(parte1 == parte2)
        return false
    return true
}