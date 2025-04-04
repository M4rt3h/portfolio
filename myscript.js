document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const images = card.dataset.images.split(',');
            const description = card.dataset.description;
            
            const imagesHTML = images.map(img => 
                `<img src="${img}" alt="Détail projet" class="protected-image">`
            ).join('');
            
            modal.querySelector('.modal-images').innerHTML = imagesHTML;
            modal.querySelector('.modal-description').innerHTML = description.replace(/\n/g, '<br>');
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = () => modal.style.display = 'none';
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
});
