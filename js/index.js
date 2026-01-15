/* Descripción: Este script gestiona las interacciones dinámicas de la página principal, 
   específicamente las animaciones de entrada de los elementos y el rastreo de clics.
   Estructura general:
   - Selección de nodos del DOM.
   - Función de activación de animaciones.
   - Función de configuración de eventos para botones.
   - Inicialización mediante el evento DOMContentLoaded.
*/

const elementosEscola = document.querySelectorAll('.school__img, .school__content');

(function() {
    "use strict";

    
    const dispararAnimacaoEntrada = function() {
        setTimeout(function() {
            elementosEscola.forEach(function(elemento) {
                elemento.classList.add('mostrar-elemento');
            });
        }, 200);
    };

    /* Configura los escuchadores de eventos para todos los botones. */
    const configurarBotoes = function() {
        const botoes = document.querySelectorAll('.btn');
        
        botoes.forEach(function(botao) {
            botao.addEventListener('click', function() {
                console.log("Usuário clicou em: " + botao.title);
            });
        });
    };

    /* Punto de entrada principal del script.*/
    window.addEventListener('DOMContentLoaded', function() {
        dispararAnimacaoEntrada();
        configurarBotoes();
    });

})();

/* menú hamburguesa en dispositivos móviles.*/

(function() {
    "use strict";

    const menuBtn = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('.nav-menu');

    const toggleMenu = function() {
        /* Añadimos o quitamos la clase 'is-active' para mostrar el menú */
        navMenu.classList.toggle('is-active');
    };

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }
})();