var p =document.getElementById('text');

function colour(state) {
    switch (state) {
        case 'green':
            p.style.color = "green";
            break;
        case 'red':
            p.style.color = "red";
            break;
        case 'blue':
            p.style.color = "blue";
            break;
    }
}