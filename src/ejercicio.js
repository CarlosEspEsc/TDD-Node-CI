export function fibonacci(n) {
    if (n < 0) 
        throw new RangeError('solo números enteros ≥ 0')
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const siguiente = a + b;
        a = b;
        b = siguiente;
    }

    return b;

}

function esPinValido(pin){
    if(pin == "" || pin == null || pin == undefined)
        return false        
    if(pin.length != 4 && pin.length != 6)
        return false
    let cero = "0"
    let nueve = "9"
    for(let i = 0; i < pin.length; i++)
    {
        let valor = pin[i].charCodeAt(0)
        if(cero.charCodeAt(0) > valor && valor > nueve.charCodeAt(0))
            return false
    }
    let match = 0
    for(let i = 1; i < pin.length; i++)
    {
        if(pin[0] == pin[i])
            match++
        if(match == (pin.length -1))
            return false
    }
    return true
}
