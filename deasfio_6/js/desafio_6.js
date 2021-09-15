const array_comidas=[];
const carrito=[];
class Comida{
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
        } else {
        let no=`No no quedo de ${this.nombre}`;
        console.log(no);    
            }  
    }
    comprar(){
        if (this.stock>0) {
        console.log(`compraste ${this.nombre}`) 
        this.stock=this.stock -1;
        if(this.stock==3){
        console.log("quedan pocas")}                                   
          }else {
            console.log(`no quedo de ${this.nombre}`)
               }
        }
}
const milanesa=new Comida('milanesa',420,true,"si",5) ;
const milanesa_napo= new Comida("milanesa_napo",490,true,"si",5);
const risotto= new Comida('risotto',420,true,"si",2);

array_comidas.push(milanesa,milanesa_napo,risotto);
let plato;
let precio;

plato=prompt("ingrese que desea")
precio=prompt("ingrese cuanto dinero desea gastar")
    function verificar(plato){
        let producto=array_comidas.find((producto)=>producto.nombre==plato)
        if (producto) {
            console.log("Tu pedido se realizo con exito")
            carrito.push(producto)
            }else{
                console.log("no tenemos");
                  }
        }
    function filtro(precio){
        let filtrar=array_comidas.filter((filtrar)=>filtrar.precio<=precio)
        console.log(filtrar);   
        }
verificar(plato);
filtro(precio);






