document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");

    menuIcon.addEventListener("mouseover", () => {
        sidebar.classList.add("active");
    });

    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.remove("active");
    });
});