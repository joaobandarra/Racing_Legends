function apresenta() {
    categoriaFetch();
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

        /*var lblId = document.createElement("p");
        lblId.textContent = "Id: " + categorias.id;
        document.body.appendChild(lblId);*/

        var lblImg = document.createElement("img");
        lblImg.src = imagemFetch(categorias.id);
        document.body.appendChild(lblImg);

        
    });
}






/**
 * Mostra pilotos no ecrã.
 *
 * @param {Array<{ name: string, id: string, nickname: string?}>} arrayDePilotos
 */
function mostraPilotos(arrayDePilotos) {

    arrayDePilotos.forEach(function (piloto) {

        var lblNome = document.createElement("p");
        lblNome.textContent = piloto.name;
        document.body.appendChild(lblNome);

        var lblAlcunha = document.createElement("p");
        lblAlcunha.textContent = piloto.name;
        document.body.appendChild(lblAlcunha);
    });
}






