document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#void-button-container'); // Corrected selector

    // Criando o botão
    const button = document.createElement('a');
    button.href = 'https://voidpay.com/pay';
    button.id = 'void-pay-button';
    button.textContent = 'Pagar com Void Pay';

    // Estilos básicos do botão
    button.style.display = 'inline-block';
    button.style.backgroundColor = '#0070ba';
    button.style.color = 'white';
    button.style.fontSize = '16px';
    button.style.padding = '10px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.textAlign = 'center';
    button.style.textDecoration = 'none';
    button.style.transition = 'background-color 0.3s, box-shadow 0.3s, transform 0.1s';

    // Estilos ao focar o botão pelo cursor
    button.addEventListener('mouseenter', function () {
        button.style.backgroundColor = '#005fa3';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    // Removendo estilos ao desfocar o botão pelo cursor
    button.addEventListener('mouseleave', function () {
        button.style.backgroundColor = '#0070ba';
        button.style.boxShadow = 'none';
    });

    // Estilos ao clicar no botão
    button.addEventListener('mousedown', function () {
        button.style.backgroundColor = '#004080';
        button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        button.style.transform = 'translateY(2px)';
    });

    // Estilos ao soltar o clique no botão
    button.addEventListener('mouseup', function () {
        button.style.backgroundColor = '#005fa3';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        button.style.transform = 'translateY(0)';
    });

    // Adicionando o botão ao container
    container.appendChild(button);
});