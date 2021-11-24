document.getElementById('validate').addEventListener("click", function() {
    var ss = document.getElementById('shoe_size').value;
    var by = document.getElementById('year').value;

    alert((ss*2+5)*50 - by + 1766);
});
