var x = document.querySelector("input");
x.addEventListener("change",  function() {
    document.querySelector("div").innerHTML= x.value;
})