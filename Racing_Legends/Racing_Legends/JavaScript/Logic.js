function apresenta() {
    //categoriaFetch();
    pilotoCategoriaFetch('rally');
}

/**
 * Mostra categorias no ecrã.
 *
 * @param {Array<{ name: string, id: string, description: string}>} arrayDeCategorias
 */
function mostraCategorias(arrayDeCategorias) {

    arrayDeCategorias.forEach(function (categorias) {

        var lblNome = document.createElement("p");
        lblNome.textContent = "Nome: " + categorias.name;
        document.body.appendChild(lblNome);

        var lblDescricao = document.createElement("p");
        lblDescricao.textContent = "Descrição: " + categorias.description;
        document.body.appendChild(lblDescricao);

        var lblImg = document.createElement("img");
        lblImg.src = apresentaImagem(categorias.id);
        document.body.appendChild(lblImg);

        
    });
}


/**
 * Mostra pilotos no ecrã.
 *
 * @param {Array<{ name: string, id: string, nickname: string?, nationality: string}>} arrayDePilotos
 */
function mostraPilotos(arrayDePilotos) {

    arrayDePilotos.forEach(function (pilotos) {

        var lblNome = document.createElement("p");
        lblNome.textContent = "Nome: "+ pilotos.name;
        document.body.appendChild(lblNome);

        var lblAlcunha = document.createElement("p");
        lblAlcunha.textContent = "Alcunha: "+ pilotos.nickname;
        document.body.appendChild(lblAlcunha);

        var lblNacionalidade = document.createElement("p");
        lblNacionalidade.textContent = "Navionalidade: " + pilotos.nationality;
        document.body.appendChild(lblNacionalidade);

        var lblImg = document.createElement("img");
        lblImg.src = imagemPiloto(pilotos.id);
        document.body.appendChild(lblImg);
       
    });
}






