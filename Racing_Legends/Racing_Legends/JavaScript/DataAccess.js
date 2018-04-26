    // Este exemplo mostra como fazer um pedido AJAX com o fetch.

function categoriaFetch() {
   
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories";
  
    // O fetch é parecido com o $.ajax, mas usa o Promise nativo
    // em vez de um objecto específico do jQuery
    return (
        fetch(url, { headers: { Accept: "application/json" } })
            .then(function (respostaServidor) {
                // Converter a resposta do servidor em JSON
                return respostaServidor.json();
            })
       
            .then(function (categorias) {
                mostraCategorias(categorias);
                
            })
            
            .then(function (nada) {
                console.log("Feito!");
            })
            .catch(function (erro) {
                console.error(erro);
                alert("Lamentamos, mas ocorreu um erro...");
            })
    );
}


function apresentaImagem(Id) {
    var lblImg = 'http:///ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/' + Id + '/image';
    return lblImg;
}

function pilotoCategoriaFetch(Id) {
    var urlCatDr = 'http:///ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/' + Id + '/drivers';
    //var urlCatDr = 'http:///ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers';
    // O fetch é parecido com o $.ajax, mas usa o Promise nativo
    // em vez de um objecto específico do jQuery
    return (
        fetch(urlCatDr, { headers: { Accept: "application/json" } })
            .then(function (respostaServidor) {
                // Converter a resposta do servidor em JSON
                return respostaServidor.json();
            })

            .then(function (pilotos) {
                mostraPilotos(pilotos);

            })

            .then(function (nada) {
                console.log("Feito!");
            })
            .catch(function (erro) {
                console.error(erro);
                alert("Lamentamos, mas ocorreu um erro...");
            })
    );
}

function imagemPiloto(Id) {
    var lblImg = 'https:///ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/' + Id+'/image';
    return lblImg;
}

