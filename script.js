// Seleciona todos os cards de carros do seu site
const cards = document.querySelectorAll('.carro'); // Ajuste a classe se usar outro nome

cards.forEach(card => {
    // Evento quando o mouse se move dentro do card
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        
        // Calcula a posição do mouse relativa ao centro do card
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Define a intensidade da inclinação (quanto menor o divisor, mais inclina)
        const grausX = -(y / rect.height) * 20; 
        const grausY = (x / rect.width) * 20;
        
        // Aplica a transformação 3D no elemento
        card.style.transform = `perspective(1000px) rotateX(${grausX}deg) rotateY(${grausY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    // Evento quando o mouse sai do card (reseta para a posição original)
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});
