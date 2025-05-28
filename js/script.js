document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');

    modal.addEventListener('hidden.bs.modal', () => {
        iframe.src = iframe.src; // Reset video
    });
});