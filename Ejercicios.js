/*Activida 1
Creacion de objetos(literales,constructor,clases),crear un objeto que contenga al menos 3 tipos de datos.*/
let heroes={
    nombre:"Bestia",
    edad:24,
    poder:"fuerza",
    Activo:true,
    villano:[
        {nombre:"magneto",poder:150},
        {nombre:"hormiga",poder:180}
    ]
}

function heroes2(nombre,edad,poder,Activo){
  this.nombre=nombre;
  this.edad=edad;
  this.poder=poder;
  this.Activo=Activo;
  this.SuperViento=function(energia){
      return this.edad+energia;
  }
}
let wolverine=new heroes2('logan',150,'regeneracion',true);
let tormenta=new heroes2('Yill',24,'viento',true);
console.log(wolverine.nombre);
console.log(tormenta.nombre);
/*
Actividad 2
Agrega valores a los objetos creados anteriormente*/
wolverine.origen="Resurreccion";
wolverine.final=false;
wolverine.ataque=120;

//Agregando un metodo nuevo
wolverine.superFuerza=function Ultrapoder(energia){
   return this.ataque+energia;
}
console.log(`el poder de logan es ${wolverine.superFuerza(80)}`);
console.log(`el poder de Yill es ${tormenta.SuperViento(14)}`);
/*
Actividad 3
Manipula los objetos y muestralos en una lista (utilizando un for)*/
for(let mutant in heroes){
    console.log(heroes[mutant]);
}
/*
Actividad 4
crear una lista de supermercado utilizando la creacion de objeto(por ejemplo: frutas:{item:"pera",stok:250,sales:true})*/
function electrodomestico(producto,precio,cantidad,oferta){
   this.producto=producto;
   this.precio=precio;
   this.cantidad=cantidad;
   this.oferta=oferta;
}
let celular=new electrodomestico('galaxy S10',1200,1,false);
let tv=new electrodomestico('smarTV',2500,1,true);
console.log(celular);
/*
Actividad 5
Crear una factura utilizando la lista del supermercado(total,subtotal e IGV);
 */
class factura{
  
    subtotal(cantidad,precio){
        return cantidad*precio;
    }
    igv(subtotal){
        return subtotal*0.18;
    };
    total(subtotal,igv){
        return subtotal+igv
    }
}

let recibo=new factura();
let subtotal=recibo.subtotal(celular.cantidad,celular.precio)+recibo.subtotal(tv.cantidad,tv.precio);
console.log(subtotal);
let igv=recibo.igv(subtotal);
console.log(igv);
let total=recibo.total(subtotal,igv);
console.log(total)
;

