/*Activida 1
Creacion de objetos(literales,constructor,clases),crear un objeto que contenga al menos 3 tipos de datos.
Actividad 2
Agrega valores a los objetos creados anteriormente
Actividad 3
Manipula los objetos y muestralos en una lista (utilizando un for)
Actividad 4
crear una lista de supermercado utilizando la creacion de objeto(por ejemplo: frutas:{item:"pera",stok:250,sales:true})
Actividad 5
Crear una factura utilizando la lista del supermercado(total,subtotal e IGV);
 */
/*Activida 1
Creacion de objetos(literales,constructor,clases),crear un objeto que contenga al menos 3 tipos de datos.*/
let heroes={
    nombre:"wolverine",
    edad:150,
    poder:"regeneracion",
    Activo:true
}

function heroes2(nombre,edad,poder,Activo){
  this.nombre=nombre;
  this.edad=edad;
  this.poder=poder;
  this.Activo=Activo;
}
let xmen=new heroes2('logan',150,'regeneracion',true);

/*Actividad 2
Agrega valores a los objetos creados anteriormente */

xmen.nivel=156;
xmen.atack=100;
xmen.ira=function(enrage){
   return this.atack+enrage;
}
console.log(xmen.ira(50));

/*Actividad3
Manipula los objetos y muestralos en una lista (utilizando un for)*/
let tormenta=new heroes2('storm',24,'tornados',true);
let ciclope=new heroes2('Carlos',19,'rayo laser',true);


console.log(tormenta);
/*Actividad 4
Lista de objetos:*/
let electrodomesticos={
  
    producto:"radio",
    precio:240,
    stock:50,
    
}