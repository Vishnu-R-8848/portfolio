document.getElementById("nav-btn").addEventListener("click", navbar);
document.getElementById("side-btn").addEventListener("click", sidebar);

function navbar() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("sidebar").style.display = "flex";
}

function sidebar() {
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("sidebar").style.display = "none";
}
