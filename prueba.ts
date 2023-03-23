import * as rls from "readline-sync";

let edadUsuario : number = rls.questionInt("Por favor indique la edad del usuario ");

//console.log("la edad del usuario es: ", edadUsuario);

if (edadUsuario <= 18)
{
    console.log("El usuario es menor de edad");

}
else 
{
    console.log("El usuario es Mayor");
}