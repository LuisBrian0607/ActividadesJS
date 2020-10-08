/*Actividad 1: crear un arreglo*/
let comidas=new Array('papa rellena','tallarines','lomo saltado');
console.log(comidas[0]);

/*Actividad 2 A;adir un elemento al final o otro al inicio del arreglo */
comidas.push('arroz con pato');
comidas.unshift('zanahoria saltada');

/*Actividad 3 Concantenar dos arreglos */
let perros=['chiwawa','pitbul','pekines'];
let gatos=['mishi','michi','michifus'];
let mascotas=perros.toString+gatos.toString;
console.log(mascotas);

/*Actividad 4 retornar los elementos de un arreglo*/ 
for(let animalitos of perros){
    console.log(animalitos);
}

/*Actividad 5 A;adir un caracter especial para separar 
los elementos del arreglo, ordenar y listar alfabeticamente.*/
var separador=perros.join('+');
console.log(gatos.sort());
