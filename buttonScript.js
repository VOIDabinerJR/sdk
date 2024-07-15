document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#void-script-container'); 

    const script = document.createElement('script');
    script.src = 'https://voidabinerjr.github.io/sdk/s2.js';
    script.id = 'void-pay-script-ativate';
    
    container.appendChild(script);

});

