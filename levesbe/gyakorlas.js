import { kutyaKiir } from "./levesbe/fv.js";
import { kutyaLISTA } from "./model/adat.js";
import { kutyalistaSok } from "./levesbe/fv.js";
import { Kartya } from "./view//Kartya.js"



let cim = "Szöveg szöveg";
const NEV = "nev";

/* let fejlec = document.querySelector('header'); */
let cimElem = $("header");
/* fejlec.appendChild = cim; */
cimElem.append(`<p>${cim}</p>`)

//kutya adatait szeretném tárolni, név, kor, nem
//Objektumot kell létrehozni

const kutya1={
    nev:"nev1",
    kor:1,
    nem:"nőstény"
}

//adatok módosítása
kutya1.nev = "nev2"
console.log(kutya1);

/* kutyaKiir(kutya1); */
kutyalistaSok(kutyaLISTA);


