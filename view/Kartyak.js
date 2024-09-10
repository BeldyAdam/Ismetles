import { Kartya } from "./Kartya.js"

export default class Kartyak {
    #lista = [];
    #szuloElem;

    constructor(lista, szuloElem){
        /* console.log(lista, szuloElem) */
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.kartyakKiir();
    }
    kartyakKiir(){
        this.#lista.forEach((elem)=>{
            /* console.log(elem) */
            new Kartya(elem, this.#szuloElem)
        })
    }
}