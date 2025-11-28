Glosario

Tipos literales: variables con valores restringidos, deben ser exactos. Ej: 
let user: "admin" | "user"
user = "admin" <-- asignacion correcta
user = "User" <-- va a tirar un error

Union type: permite que una veriable acepte mas de un tipo de dato. Ej:
let id: string | number; <-- se le puede asignar textos y numeros
id = 10;
id = "abc123";

Interfaces: se usa para definir las propiedades que va a tener un objeto y el tipo de datos de cada una. Ej:
interface User {
  id: number;
  username: string;
  email?: string; <-- se usa el ? para especificar que es opcional
}

Al crear un nuevo objeto se le asigna la interface como un tipo de dato:
let newUser: User = {
    id: 1,
    username: "Usuario"
}

Funciones tipadas: Se especifica el tipo de dato de los parametros y del valor que debe retornar. Ej:
function sum(a: number, b: number): number { <-- retorna un number
  return a + b;
}

Si la funcion no retorna un valor se especifica con el tipo void
function logMessage(level: LogLevel, message: string): void {
    console.log(`${level}: ${message}`)
};