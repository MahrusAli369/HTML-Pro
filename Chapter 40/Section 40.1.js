document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('charInput');
    const feedback = document.getElementById('feedback');
    const entities = document.querySelectorAll('.entity');

    entities.forEach(entity => {
        entity.addEventListener('click', () => {
            const char = entity.getAttribute('data-entity');
            input.value += char;
            feedback.textContent = `Inserted: ${char}`;
        });
    });
});
