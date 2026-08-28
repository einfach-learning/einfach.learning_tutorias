// Esperamos a que todo el documento HTML se cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Agregamos un pequeño efecto interactivo a las Preguntas Frecuentes
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        // Ocultamos la respuesta por defecto
        answer.style.display = 'none';

        // Añadimos un ícono indicador a la pregunta
        question.innerHTML = '▶ ' + question.innerHTML;

        // Evento al hacer clic en la pregunta
        question.addEventListener('click', () => {
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                question.innerHTML = question.innerHTML.replace('▶', '▼');
            } else {
                answer.style.display = 'none';
                question.innerHTML = question.innerHTML.replace('▼', '▶');
            }
        });
    });
});
