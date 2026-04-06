// const videoFrame = document.getElementById('videoFrame');
// const videoModal = document.getElementById('videoModal');
// let currentVideoURL = "";

// document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
//     thumbnail.addEventListener('click', function () {
//         const baseURL = this.getAttribute('data-video');
//         currentVideoURL = baseURL;
//         videoFrame.src = baseURL + "&autoplay=1";
//     });
// });

// videoModal.addEventListener('hidden.bs.modal', () => {
//     videoFrame.src = ""; // Clear to stop the video
// });


// Header and footer - Where I learned this from - https://youtu.be/AiQqip_pVbA
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand text-secondary" href="./">James Slone</a>
            <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="toggler-line"></span>

            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- Work Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa-solid fa-briefcase"></i> Work
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end bg-black border-0">
                            <li><a class="dropdown-item" href="./videos"><i class="fa-solid fa-video"></i>
                                    Video Production</a></li>
                            <li><a class="dropdown-item " href="./photos"><i class="fa-solid fa-camera"></i>
                                    Photography</a></li>
                            <li><a class="dropdown-item" href="./design"><i class="fa-solid fa-pen-nib"></i> Graphic
                                    Design</a></li>
                        </ul>
                    </li>

                    <!-- About Link -->
                    <li class="nav-item">
                        <a class="nav-link px-3" href="./about"><i class="fa-solid fa-user"></i>

                            About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        `
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">

            <!-- Header + Button -->
            <div class="row mb-4 text-center">
                <div class="col-12">
                    <h2 class="text-primary">Get in Touch</h2>
                    <button class="btn btn-secondary mt-3"
                        onclick="window.location.href='mailto:jamestslone@gmail.com'">
                        Email Me
                    </button>
                </div>
            </div>

            <!-- Divider -->
            <div class="row">
                <div class="col-12 col-sm-12 d-flex justify-content-center">
                    <hr class="divider my-4 w-100 w-md-75">
                </div>
            </div>

            <!-- Navigation + Socials -->
            <div class="row text-center text-md-start">
                <!-- Nav Links -->
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                    <nav>
                        <ul class="nav flex-row justify-content-center justify-content-md-start flex-wrap">
                            <li class="nav-item"><a class="nav-link" href="./">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="./about">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="./videos">Video</a></li>
                            <li class="nav-item"><a class="nav-link" href="./design"> Design</a></li>
                            <li class="nav-item"><a class="nav-link" href="./photos">Photo</a></li>
                            <li class="nav-item"><a class="nav-link" href="./learn">Learn</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Social Icons -->
                <div class="col-12 col-md-6 text-center text-md-end">
                    <div class="social-icons">
                        <a class="me-3" href="https://www.youtube.com/@TheJamesSlone" target="_blank">
                            <img src="images/Icons/youtube.png" loading="lazy" alt="" title="Youtube"></a>
                        <a class="me-3" href="https://www.instagram.com/thejamesslone" target="_blank"
                            title="Instagram"><img src="images/Icons/Instagram.png" loading="lazy" alt=""></a>
                        <a class="me-3" href="https://www.linkedin.com/in/james-slone-4034702b4/" target="_blank"
                            title="Linked In"><img src="images/Icons/Linked-in.png" loading="lazy" alt=""></a>
                    </div>
                </div>
            </div>

            <!-- Copyright and terms -->
            <div class="text-center mt-4">
                <div class="row justify-content-center text-center text-md-start text-info mb-0">
                    <div class="col-12 col-md-auto mb-2 mb-md-0">
                        <p class="mb-0">© James Slone 2025</p>
                    </div>
                    <div class="col-12 col-md-auto">
                        <a href="./terms" class="text-info">Terms of Service</a>
                    </div>
                    <div class="col-12 col-md-auto">
                        <a href="./special-thanks" class="text-info">Special Thanks</a>
                    </div>

                </div>

            </div>
        </div>
    </footer>`
    }
}



class SpeciralSkipLink extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="scroll-top-wrapper">
        <div class="scroll-top-btn">
            <a href="#top" role="button" title="Back to top" aria-label="Back to top">
                <img src="images/Icons/Skip-to-top.png" loading="lazy" alt="Skip to top" title="Return to top">
            </a>
        </div>
    </div>
        `
    }
}


class SpecialGoogleAnalytics extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EYJX725RRW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EYJX725RRW');
</script>

        `
    }
}







customElements.define(`special-header`, SpecialHeader)
customElements.define(`special-footer`, SpecialFooter)
customElements.define(`special-skip-link`, SpeciralSkipLink)

customElements.define(`special-google-analytics`, SpecialGoogleAnalytics)




// copy button
document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const value = btn.getAttribute("data-copy");
        try {
            await navigator.clipboard.writeText(value);
            const prev = btn.textContent;
            btn.textContent = "Copied!";
            btn.classList.remove("btn-outline-light");
            btn.classList.add("btn-success");
            setTimeout(() => {
                btn.textContent = prev;
                btn.classList.remove("btn-success");
                btn.classList.add("btn-outline-light");
            }, 1500);
        } catch (err) {
            alert("Copy failed — please copy manually.");
        }
    });
});