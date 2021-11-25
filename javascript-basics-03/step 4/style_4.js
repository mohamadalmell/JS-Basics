var pass = document.getElementById('password');
var conf = document.getElementById('confirmation');

document.querySelector('button').addEventListener('click', function() {
    if (conf.value != pass.value) {
        pass.style.borderColor = "red";
        conf.style.borderColor = "red";
    } else {
        pass.style.borderColor = "initial";
        conf.style.borderColor = "initial";
        }
})
