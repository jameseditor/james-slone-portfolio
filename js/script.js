const openBtn = document.getElementById('open-popup');
const overlay = document.getElementById('popup-overlay');
const popup = overlay.querySelector('.youtube-player-popup');

// Open popup
openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Close when clicking outside the popup
overlay.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) {
        overlay.classList.remove('active');
        // Optional: stop the video when closed
        const iframe = popup.querySelector('iframe');
        iframe.src = iframe.src;
    }
});