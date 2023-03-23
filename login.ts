import * as rls from "readline-sync";

let usuarioValidar: String = "Juan";
let claveValidar: String = "clavejuan";

console.log("Ingrese nombre de usario y luego contraseña");
let usuario: string = rls.question("Ingrese nombre de usuario: ");
let clave: string = rls.question("Ingrese la clave: ");

if((usuario == usuarioValidar) && (clave == claveValidar))
{
    console.log("Ingreso correcto");
}
else{
    console.log("Credenciales invalidas");
}
