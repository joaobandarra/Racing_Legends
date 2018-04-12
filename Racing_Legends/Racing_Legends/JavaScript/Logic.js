document.addEventListener('DOMContentLoaded', function main() {
    var xhr = new XMLHttpRequest();
    /**
     * @type {Element}
     */
    var racingLegends = null;

    xhr.open('GET', '/Racing_Legends/Index.html');

    xhr.onload = function (_) {
        if (xhr.status === 200) {
            racingLegends = xhr.responseXML;
            init();

        } else {
            console.error('Erro', xhr.status);
        }
    };

    xhr.onerror = function (_) {
        console.error('Erro');
    };

    xhr.send();

    function init() { }