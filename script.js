function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.querySelector(".menu-btn");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        sidebar.classList.remove("open");
    } else {
        sidebar.style.width = "250px";
        sidebar.classList.add("open");
    }
}

// Cierra el menú si el usuario hace clic fuera de él
document.addEventListener("click", function(event) {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.querySelector(".menu-btn");

    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.style.width = "0";
        sidebar.classList.remove("open");
    }
});
