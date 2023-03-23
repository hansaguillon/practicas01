import * as rls from "readline-sync";

let precioFinal : number = 0 ;
let precioUnitraio : number = 0;
let cantidad : number = 0;

precioUnitraio = rls.questionFloat("Ingrese el precio del producto: ");
cantidad = rls.questionInt("Ingrese la cantidad de productos que lleva ");

precioFinal = precioUnitraio * cantidad;

if(precioFinal >1000)
{
    precioFinal = precioFinal *0.9;
    console.log("El monto total a abonar es: ", precioFinal);
    
}
else
{
    console.log("El monto total es:", precioFinal);

}