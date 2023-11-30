// ==UserScript==
// @name         Remove twitter message box
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to remove twitter message box
// @author       Mykhailo Pichka
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let loadingTimer = setInterval(() => {
        let el = document.querySelector('[data-testid="DMDrawer"]');
        if(el) {
            el.remove();
            // Ілон - Мразь.
            // При переході на деякі сторінки спрацьовує client side rendering, тому необхідно постійно оновлювати DOM
            // clearInterval(loadingTimer);
        }
    }, 500);
})();
