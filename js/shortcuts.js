// Keyboard shortcuts

let lastKey = null;

// Load modal if it's not already on the page
function ensureShortcutModal() {
    return new Promise((resolve) => {
        const existingModal = document.getElementById('shortcutModal');

        if (existingModal) {
            resolve(existingModal);
        } else {
            fetch('shortcuts.html')
                .then(res => res.text())
                .then(html => {
                    document.body.insertAdjacentHTML('beforeend', html);
                    const newModal = document.getElementById('shortcutModal');
                    resolve(newModal);
                });
        }
    });
}

document.addEventListener("keydown", async e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key.toLowerCase();

    // Ctrl + /
    if (e.ctrlKey && key === '/') {
        const modalElement = await ensureShortcutModal();

        if (modalElement) {
            const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
            if (modalElement.classList.contains('show')) {
                modalInstance.hide();
            } else {
                modalInstance.show();
            }
        }

        return;
    }

    // g + key for navigation
    if (lastKey === "g") {
        switch (key) {
            case "v": window.location.href = "videos.html"; break;
            case "p": window.location.href = "photos.html"; break;
            case "d": window.location.href = "design.html"; break;
            case "a": window.location.href = "about.html"; break;
            case "h": window.location.href = "index.html"; break;
            case "r": window.location.href = "resume.html"; break;
            case "l": window.location.href = "links.html"; break;
        }
        lastKey = null;
    } else {
        lastKey = key;
        setTimeout(() => {
            if (lastKey === key) lastKey = null;
        }, 1000);
    }
});

// Ctrl + letter shortcut

// document.addEventListener("keydown", e => {
//     if (e.key.toLocaleLowerCase() === "q"
//         && e.ctrlKey) {
//         alert("Hello World")

//     }
// });


// Override brower shortcuts
// e.preventDefau1t();



// // quick switcher
// document.addEventListener("DOMContentLoaded", () => {
//     const modalElement = document.getElementById('commandModal');
//     const input = document.getElementById('commandSearch');
//     const listItems = document.querySelectorAll('#commandList li');
//     const modal = new bootstrap.Modal(modalElement);
//     let selectedIndex = -1;

//     // Open modal with Ctrl + K
//     document.addEventListener("keydown", e => {
//         if (e.ctrlKey && e.key.toLowerCase() === 'k') {
//             e.preventDefault();
//             modal.show();
//             setTimeout(() => {
//                 input.focus();
//             }, 200);
//         }
//     });

//     // Filter commands as you type
//     input.addEventListener("input", () => {
//         const value = input.value.toLowerCase();
//         selectedIndex = -1;
//         listItems.forEach((item) => {
//             const text = item.textContent.toLowerCase();
//             item.style.display = text.includes(value) ? "" : "none";
//         });
//     });

//     // Handle arrow keys + Enter
//     input.addEventListener("keydown", e => {
//         const visibleItems = Array.from(listItems).filter(li => li.style.display !== 'none');
//         if (e.key === 'ArrowDown') {
//             e.preventDefault();
//             selectedIndex = (selectedIndex + 1) % visibleItems.length;
//         } else if (e.key === 'ArrowUp') {
//             e.preventDefault();
//             selectedIndex = (selectedIndex - 1 + visibleItems.length) % visibleItems.length;
//         } else if (e.key === 'Enter' && selectedIndex >= 0) {
//             const url = visibleItems[selectedIndex].dataset.url;
//             if (url) window.location.href = url;
//             modal.hide();
//         } else if (e.key === 'Escape') {
//             modal.hide();
//         }

//         // Highlight selected
//         visibleItems.forEach((item, index) => {
//             item.classList.toggle('active', index === selectedIndex);
//         });
//     });

//     // Click to activate
//     listItems.forEach(item => {
//         item.addEventListener("click", () => {
//             const url = item.dataset.url;
//             if (url) window.location.href = url;
//             modal.hide();
//         });
//     });
// });
