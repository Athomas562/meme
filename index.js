const sounds = {
            'SKIBIDI TOILET': 'https://cdn.freesound.org/previews/580/580756_8462944-lq.mp3',
            'SIGMA MALE': 'https://cdn.freesound.org/previews/367/367145_5121236-lq.mp3',
            'SKULL EMOJI': 'https://cdn.freesound.org/previews/156/156859_2538033-lq.mp3',
            'NO CAP': 'https://cdn.freesound.org/previews/320/320181_5260872-lq.mp3',
            'MEWING': 'https://cdn.freesound.org/previews/415/415209_5121236-lq.mp3',
            'FANUM TAX': 'https://cdn.freesound.org/previews/234/234524_4068345-lq.mp3',
            'MOAI': 'https://cdn.freesound.org/previews/419/419341_33680-lq.mp3',
            'OHIO': 'https://cdn.freesound.org/previews/387/387232_7255534-lq.mp3',
            'GYATT': 'https://cdn.freesound.org/previews/442/442910_7846563-lq.mp3',
            'RIZZ': 'https://cdn.freesound.org/previews/270/270402_5123851-lq.mp3',
            'GOOFY AHH': 'https://cdn.freesound.org/previews/156/156859_2538033-lq.mp3',
            'GRIMACE SHAKE': 'https://cdn.freesound.org/previews/341/341695_5858296-lq.mp3',
            'SIGMA GRINDSET': 'https://cdn.freesound.org/previews/350/350876_6430850-lq.mp3',
            'BABY GRONK': 'https://cdn.freesound.org/previews/202/202230_1391542-lq.mp3',
            'AMBATUKAM': 'https://cdn.freesound.org/previews/458/458277_5123851-lq.mp3',
            'FORTNITE BATTLE PASS': 'https://cdn.freesound.org/previews/391/391660_6561922-lq.mp3'
        };

        const items = document.querySelectorAll('.brainrot-item');
        items.forEach(item => {
            item.addEventListener('click', function() {
                // Animation visuelle
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = '';
                }, 10);
                
                // Jouer le son
                const text = this.textContent.trim().split('\n')[1].trim();
                const soundUrl = sounds[text];
                
                if (soundUrl) {
                    const audio = new Audio(soundUrl);
                    audio.volume = 0.5;
                    audio.play().catch(e => console.log('Erreur audio:', e));
                }
                
                // Effet visuel supplémentaire
                this.style.transform = 'scale(1.2) rotate(360deg)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            });
        });
        
        // Changement de couleur automatique
        setInterval(() => {
            items.forEach(item => {
                item.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
            });
        }, 2000);