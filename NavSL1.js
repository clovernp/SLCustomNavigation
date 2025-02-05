setTimeout(function () {
    window.myGlobalFunction = function (param) {
        window.myGlobalVariable = param;
    }
}, 100);


function createGoogleTranslateWidget() {
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';
    const targetDiv = document.querySelector('.slide-window-slide-container');

    targetDiv.parentNode.insertBefore(translateDiv, targetDiv);

    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script1);



    if (!window.googleTranslateElementInit) {

        window.googleTranslateElementInit = function () {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: window.myGlobalVariable,
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
            }, 'google_translate_element');
        }
    }
}




function addCssToHead(cssRules) {
    var styleElement = document.createElement('style');

    styleElement.textContent = cssRules;

    document.head.appendChild(styleElement);
}

var css = `
    iframe[id=":1.container"] {
        display: none !important;
    }
    body {
        top: 0 !important;
    }
    .goog-logo-link {
        display: none !important;
    }
    .goog-te-gadget {
        color: transparent !important;
    }
    .VIpgJd-ZVi9od-l4eHX-hSRGPd {
        display: none;
    }
    #goog-gt-tt #goog-gt-vt {
        display: none !important;
    }
    .VIpgJd-ZVi9od-aZ2wEe-wOHMyf.VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc {
        display: none !important;
    }
body {
    overflow: auto !important;
}
`;

if (!document.getElementById('google_translate_element')) {
    addCssToHead(css);
    createGoogleTranslateWidget();
}