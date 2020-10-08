var heroes={
    edad:1140,
    generacion:"mutante",
    origen:function(){
        console.log(this.generacion);
    }
}

let logan=Object.create(heroes);
console.log(logan.edad);


function villano(nombre,poder){
    this.nombre=nombre;
    this.poder=poder;
}

let magneto=new villano('magnetico',150);
let serpiente=new villano('snake',100);

villano.prototype.edad=null;
magneto.edad=120;
serpiente.edad=15;

console.log(serpiente.edad);
console.log(magneto.edad);