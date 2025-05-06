document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("togglemenu");
    const sidebar = document.getElementById("sidebar");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
});