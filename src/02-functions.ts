console.log("Funciones con tipado \n")

function updateStock(currentStock: number, quantityChange: number): number {
    return currentStock + quantityChange
}

console.log(`${typeof updateStock} : updateStock(10,20) \nSalida: ${updateStock(10,20)} \nTipo de salida: ${typeof updateStock(10,20)}`)
console.log("=====================")