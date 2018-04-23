//document.addEventListener('DOMContentLoaded', function main(url) {
   /* function getJSONXHR(url) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", url);

        // Informar o servidor que queremos JSON
        xhr.setRequestHeader("Accept", "application/json");

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                var texto = xhr.responseText;

                try {
                    var resultado = JSON.parse(texto);

                    if (xhr.status === 200) {
                        resolve(resultado);

                        //init();
                    } else {
                        reject(resultado);
                    }
                } catch (erroParseJson) {
                    reject(erroParseJson);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Failed to load " + url));
            };
        });
    }
*/



    // Este exemplo mostra como fazer um pedido AJAX com o fetch.

    function exemploFetch() {
        var url =
            "https://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers";

        // O fetch é parecido com o $.ajax, mas usa o Promise nativo
        // em vez de um objecto específico do jQuery
        return (
            fetch(url, { headers: { Accept: "application/json" } })
                .then(function (respostaServidor) {
                    // Converter a resposta do servidor em JSON
                    return respostaServidor.json();
                })
                .then(function (pilotos) {
                    mostraPilotos(pilotos);
                })
                // Nota: Só estou a explicitar o 'nada' por questões demonstrativas;
                // não é preciso colocarem nada se não precisam (ou não há) valor.
                .then(function (nada) {
                    console.log("Feito!");
                })
                .catch(function (erro) {
                    console.error(erro);
                    alert("Lamentamos, mas ocorreu um erro...");
                })
        );
    }
//});


