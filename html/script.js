window.addEventListener('message', function(event) {
    const display = document.querySelector('.character-display');
    const overlay = document.querySelector('.overlay');
    const nameElement = document.querySelector('.name');
    const jobElement = document.querySelector('.job');
    const audio = document.getElementById('notificationSound');
    
    if (event.data.type === "showCharacter") {
        nameElement.classList.remove('show-name');
        jobElement.classList.remove('show-job');
        nameElement.classList.add('hidden');
        jobElement.classList.add('hidden');
        
        nameElement.textContent = event.data.name;
        jobElement.textContent = event.data.job;
        
        nameElement.classList.add('glitch');
        nameElement.setAttribute('data-text', event.data.name);
        
        display.style.display = 'block';
        overlay.style.display = 'block';
        
        setTimeout(() => {
            overlay.classList.add('active');
            nameElement.classList.remove('hidden');
            nameElement.classList.add('show-name');
            
            setTimeout(() => {
                jobElement.classList.remove('hidden');
                jobElement.classList.add('show-job');
            }, 300);
        }, 100);
        
        if (event.data.playAudio) {
            audio.volume = 0.5;
            audio.play().catch(function(error) {
                console.log("Ses oynatma hatası:", error);
            });
        }
    } else if (event.data.type === "hideCharacter") {
        nameElement.classList.remove('show-name');
        jobElement.classList.remove('show-job');
        nameElement.classList.add('hidden');
        jobElement.classList.add('hidden');
        overlay.classList.remove('active');
        
        setTimeout(() => {
            display.style.display = 'none';
            overlay.style.display = 'none';
            nameElement.classList.remove('glitch');
        }, 500);
    }
});
