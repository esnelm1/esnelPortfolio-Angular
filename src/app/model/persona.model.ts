export class per {
    id?: Number;
    nombre: String;
    apellido: String;
    img: String;
    aboutMe: String;

    constructor(nombre:String, apellido:String, img:String, aboutMe: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.aboutMe = aboutMe;
    }
}