var newInterval;

function openModal() {	
	add();
	startTimer();
}

function add(){
	document.getElementById("container-overlay").style.display = "block";
	document.querySelector(".view_2_main").className += " open";
}

function closeModal() {
	document.getElementById("container-overlay").style.display = "none";	
	document.querySelector(".view_2_main").classList.remove("open");
	clearInterval(newInterval);
}

function startTimer() {
	var duration = 60 * 5, 
		timer = duration, minutes, seconds;		
	
	document.querySelector('#time').textContent = '';	//clean timer
	
	newInterval = setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		document.querySelector('#time').textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
            reset();
            checkboxes();
            closeModal();
		}
	}, 1000);
}

function checkboxes(){
    var inputElems = document.getElementsByClassName("checkbox_count");
        count = 0;

    for (var i=0; i<inputElems.length; i++) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
            count++;
        }
        document.getElementById("quantity").innerHTML = count;
    }}

function reset() {
    document.getElementById("basic_form").reset();

}

function creator() {
	// TODO: do somethink
    var i;
    var selection = document.getElementById("checkbox" + i);
    var selected = document.getElementById("form" + i);

    var cln = selected.cloneNode(true);
    document.getElementById("selection_area").appendChild(cln);
}



/*
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
*/
