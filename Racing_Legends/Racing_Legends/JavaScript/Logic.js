﻿function apresenta() {
    exemploFetch();
}
/**
 * Mostra pilotos no ecrã.
 *
 * @param {Array<{ name: string, id: string, nickname: string? }>} arrayDePilotos
 */
function mostraPilotos(arrayDePilotos) {
    // `arrayDePilotos` é um Array. A função `forEach` do Array
    // é uma alternativa ao ciclo `for`.
    // A função que é passada por parâmetro é invocada para
    // cada item do array.
    arrayDePilotos.forEach(function (piloto) {

        var lblNome = document.createElement("p");
        lblNome.textContent = piloto.name;
        document.body.appendChild(lblNome);

        /*var lblId = document.createElement("p");
        lblId.textContent = piloto.id;
        document.body.appendChild(lblId);

        var lblNacionalidade = document.createElement("p");
        lblNacionalidade.textContent = piloto.nationality;
        document.body.appendChild(lblNacionalidade);*/
    });
}