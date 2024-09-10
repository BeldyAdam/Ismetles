export class Kartya {

    #kutyaAdat = {};
    #szuloELEM;

    constructor(adat, szuloElem){
        this.#kutyaAdat = adat;
        this.#szuloELEM = szuloElem;
        this.kutyaKiir2();

        this.gombElem = $(".card:last-child .card-body button"); //.kiv:last
        this.gombElem = $(".kiv:last"); //.card:last-child .card-body button
        /* console.log(this.gombElem); */
        this.gombKattint();
    }
    kutyaKiir2() {
        /* console.log(this.#szuloELEM) */
        this.#szuloELEM.append(`<div class="card col-lg-4 col-md-6 border border-danger">
                                <div class="card-body">
                                    <h3 class="card-title">${this.#kutyaAdat.nev}</h3>
                                    <p class="card-text">${this.#kutyaAdat.kor}</p>
                                    <p class="card-text">${this.#kutyaAdat.nem}</p>
                                    <a href="#" class="kiv btn btn-primary">Muta</a>
                                </div>
                            </div>`)
    }

    gombKattint(){
        this.gombElem.on("click", ()=>{
/*             console.log(this)
            console.log(this.#kutyaAdat.nev) */

            const e = new CustomEvent ("kivalaszt",{detail: this.#kutyaAdat});
            window.dispatchEvent(e);
        })
    }
}