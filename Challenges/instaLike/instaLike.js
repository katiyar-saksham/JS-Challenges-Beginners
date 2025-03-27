const like = document.querySelector('.box i');
        const box = document.querySelector('.box');

        box.addEventListener('dblclick', () => {
            like.style.transform = 'translate(-50%, -50%) scale(1)';
            like.style.opacity = '0.81';

            setTimeout(() => {
                like.style.transform = 'translate(-50%, -50%) scale(0)';
                like.style.opacity = '0';
            }, 630);
        })