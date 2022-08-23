function fibonacci(arr,stop) {
    let anterior_1 = arr[arr.length - 1];// 1.0
    let anterior_2 = arr[arr.length - 2];// 1.0
    let somaDosAnteriores = anterior_1 += anterior_2// 1.3
  

    for (let i = 0; i < stop; i++){ // 1.4
       let numeroAtual = arr[arr.length - 1] // 1.5
       arr.push(somaDosAnteriores)
       somaDosAnteriores += numeroAtual
    }
    return arr 

}

console.log(fibonacci([0, 1, 1], 10))



