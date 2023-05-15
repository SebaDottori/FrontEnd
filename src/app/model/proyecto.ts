export class Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
    link: string;

    constructor(nombre: string, descripcion: string, link: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.link = link;
    }
}
