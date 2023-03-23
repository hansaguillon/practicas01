import * as  rls from "readline-sync";

let altura : number = rls.questionFloat("Ingrese su altura para poder subir al juego:  ");

if(altura >= 1.30)
{
    console.log("puede subir al juego, cumple con la altura esperada");
}
else{
    console.log("es muy chiquito, crece y volve");
}