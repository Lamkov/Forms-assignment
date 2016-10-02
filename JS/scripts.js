function add(){
    document.getElementById("container-overlay").style.display = "block";
    document.querySelector(".view_2_main").style.opacity = "1";
}

function close() {
    document.getElementById("container-overlay").style.display = "none";
    document.querySelector(".view_2_main").style.opacity = "0";
}
var cross = document.getElementsByClassName(".close");
cross.onclick = close;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


/*window.onload = function count() {
    var counting = document.querySelectorAll('input[type="checkbox"]:checked').length;
    document.getElementById("quantity").innerHTML = counting;
}*/


    var copy = document.querySelector("myList2").lastChild;
    var cln = copy.cloneNode(true);
    document.getElementById("myList1").appendChild(cln);

function copy() {
    var inputs = document.getElementsByClassName("checker");

    for (var i = usersArray.length - 1; i >= 0; i--) {
        if(inputs[i].checked) {
            usersArray.splice(i, 1);
        }
    }

    drawTable();
}