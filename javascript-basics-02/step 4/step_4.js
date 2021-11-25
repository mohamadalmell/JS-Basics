var x = document.querySelector("button");
x.addEventListener("click", ()=> {
    var y = confirm("Would you like to reset?");

    if (y) {
        document.getElementById('name').value = "";
        document.getElementById('surname').value = "";
        document.getElementById('city').value = "";
    }
})