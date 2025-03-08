function openImage(img) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("fullImage").src = img.src;
}

function closeImage() {
    document.getElementById("modal").style.display = "none";
}