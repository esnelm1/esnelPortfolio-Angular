export class per {
    id?: Number;
    nombre: String;
    apellido: String;
    img: String;
    descripcion: String;

    constructor(nombre:String, apellido:String, img:String, descripcion: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
    }
}