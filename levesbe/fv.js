export function kutyaKiir(lista) {
    let tartalomElem = $(".tartalom");
    let szoveg = `<h3>Név:${lista.nev}</h3>
                            <p>Kor:${lista.kor}</p>
                            <p>Nem:${lista.nem}</p>`
    tartalomElem.append(szoveg);
}

export function kutyaKiir2(lista) {
    let tartalomElem = $(".tartalom");
    tartalomElem.append(`<div class="card col-lg-4 col-md-6">
                            <div class="card-body">
                                <h3 class="card-title">${lista.nev}</h3>
                                <p class="card-text">${lista.kor}</p>
                                <p class="card-text">${lista.nem}</p>
                                <a href="#" class="btn btn-primary">Muta</a>
                            </div>
                        </div>`)
}

export function kutyalistaSok(lista){
    lista.forEach((kutya) => {
        kutyaKiir2(kutya)
        console.log(kutya);
    });
}