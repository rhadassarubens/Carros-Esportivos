

// 1. Seleciona todos os cards dos carros
const cards = document.querySelectorAll('.carro');

// 2. Verifica se o dispositivo utiliza mouse
const computador = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// 3. Efeito 3D dos cards no computador
if (computador) {

    cards.forEach(card => {

        card.addEventListener('mousemove', (evento) => {

            const rect = card.getBoundingClientRect();

            // Calcula a posição do mouse dentro do card
            const x = evento.clientX - rect.left - rect.width / 2;
            const y = evento.clientY - rect.top - rect.height / 2;

            // Calcula a inclinação do card
            const grausX = -(y / rect.height) * 10;
            const grausY = (x / rect.width) * 10;

            // Aplica o efeito 3D
            card.style.transform =
                `perspective(1000px) rotateX(${grausX}deg) rotateY(${grausY}deg) scale(1.03)`;

        });

        // Retorna o card à posição original
        card.addEventListener('mouseleave', () => {

            card.style.transform =
                'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';

        });

    });

}

// 4. Seleciona o formulário de contato
const formulario = document.querySelector('#formContato');

if (formulario) {

    formulario.addEventListener('submit', (evento) => {

        // Impede o recarregamento da página
        evento.preventDefault();

        // Mostra a confirmação
        let resposta = document.querySelector('#respostaFormulario');

        if (!resposta) {
            resposta = document.createElement('p');
            resposta.id = 'respostaFormulario';
            formulario.appendChild(resposta);
        }

        resposta.textContent = 'Mensagem registrada! Obrigado por entrar em contato com o Rubens X Cars.';

        resposta.classList.add('mensagem-sucesso');

        // Limpa os campos
        formulario.reset();

    });

}
