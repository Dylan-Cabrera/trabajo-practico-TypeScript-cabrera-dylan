
console.log("Tipos fundamentales");

let productName: string = "pan";
let productPrice: number = 800;
console.log(`Producto: ${productName}, Precio: ${productPrice}`);

console.log("--------------------")

//Tipo Union (Union Type)
console.log("Tipo Union (Union Type)");

let productId: string | number = "5099803df3f4948bd2f98391";
console.log(productId, typeof productId);
productId = 1;
console.log(productId, typeof productId);

console.log("--------------------")

//Interfaz Básica
console.log("Interfaz Básica");

interface Product {
    name: string,
    price: number
};

const myProduct: Product = {
    name: "Pan dulce",
    price: 2500
};
console.log(myProduct)

console.log("==========================")