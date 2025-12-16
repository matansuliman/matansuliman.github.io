// סגירה אוטומטית של תפריט Bootstrap במובייל
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        });
    });
});

// עדכון השנה בפוטר
document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});


const backToTopBtn = document.getElementById("backToTop");
const heroSection = document.querySelector("header"); // ה־Hero שלך

window.addEventListener("scroll", () => {
    const heroBottom = heroSection.offsetHeight;

    if (window.scrollY > heroBottom - 50) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
