export class Educacion {
    id?: Number;
    nombreE: String;
    img: String;
    descripcionE: String;

    constructor(nombreE:String,descripcionE: String, img:String){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img = img;
    }
}