var p = document.getElementById('texte');

function link(state) {
    if (state == hide) {
        p.style.display = "none";
    } else if (state == show) {
        p.style.display = "block";
    }
}