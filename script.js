// ================================
// Zefanya Marcell SPACE PORTFOLIO
// ================================

console.log("Welcome to ZAMMM Space Portfolio 🚀");

// Efek muncul saat elemen masuk layar
const cards = document.querySelectorAll(
    ".info-card, .project-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Kondisi awal kartu
cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


// Efek navbar saat scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 8, 20, 0.9)";

    } else {

        navbar.style.background =
            "rgba(10, 14, 30, 0.65)";

    }

});
