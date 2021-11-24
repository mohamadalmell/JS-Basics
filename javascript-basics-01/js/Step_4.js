document.getElementById('validate').addEventListener("click", function() {
    var n = document.getElementById('name').value;
    var s = document.getElementById('surname').value;
    var c = document.getElementById('city').value;

    alert("Hello " +n + " "+ s + " from " + c);
});
