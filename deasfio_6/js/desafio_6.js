const array_comidas=[];
const carrito=[];
class comida{
constructor(nombre,precio,disponible,grande,stock){
this.nombre=nombre;
this.precio=precio;
this.disponible=disponible;
this.grande=grande;
this.stock=stock;
}
disponilibilidad(){
if (this.disponible==true){
let resultado= ` Buenisimo estamos procesando tu pedido de ${this.nombre}`
console.log(resultado);
} 
else {
let no=`No no quedo de ${this.nombre}`;
console.log(no);    
}  
}
comprar(){
if (this.stock>0) 
{
console.log(`compraste ${this.nombre}`) 
this.stock=this.stock -1;
if(this.stock==3){
console.log("quedan pocas")
}                                   
} else {
console.log(`no quedo de ${this.nombre}`)
}
}
}
const milanesa=new comida('milanesa',420,true,"si",5) ;
const milanesa_napo= new comida("milanesa_napo",490,true,"si",5);
const risotto= new comida('risotto',420,true,"si",2);
console.log(risotto);
array_comidas.push(milanesa,milanesa_napo,risotto);
let plato;
plato=prompt("ingrese que desea")
verificar(plato);
function verificar(plato){
let producto=array_comidas.find((producto)=>producto.nombre==plato)
 if (producto) {
console.log("Tu pedido se realizo con exito")
carrito.push(producto)
}
 else{
console.log("no tenemos");
 }
 }






