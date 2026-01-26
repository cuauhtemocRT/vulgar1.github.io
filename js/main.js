window.addEventListener("scroll", () => {
    const nav = document.querySelector(".metal-navbar");
    if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    }
});
