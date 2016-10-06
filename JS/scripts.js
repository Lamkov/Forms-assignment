var newInterval,
	modalIsOpen = false;

function openModal() {	
	add();
	startTimer();
	modalIsOpen = true;
}

function add(){
	document.getElementById("container-overlay").style.display = "block";
	document.querySelector(".view_2_main").className += " open";
}

function closeModal() {
	document.getElementById("container-overlay").style.display = "none";	
	document.querySelector(".view_2_main").classList.remove("open");
	clearInterval(newInterval);
	resetForm();
	modalIsOpen = false;
}

window.onload = function(){
    document.getElementById('container-overlay').onclick=function(){
        closeModal();
    }
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
            resetForm();
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

function resetForm() {
    document.getElementById("basic_form").reset();
	document.getElementById("selectAll").innerHTML = "Select All";
}
function clearname(){
	document.getElementById("formName").innerHTML = "";
}

function toggle() {
    var allChecked = document.getElementsByClassName("checkbox_count"),
		selectControl  = document.getElementById("selectAll");	
	
    for (i = 0; i < allChecked.length; i++){		
		allChecked[i].checked = (selectControl .innerHTML == "Select All") ? 'checked' : '';
	}
	selectControl .innerHTML = (selectControl.innerHTML == "Select All") ? "Unselect All" : 'Select All';
	
}

function creator() {
	var formValid = false;
    var formName = document.getElementById("form_name").value;
    var inputElm = document.getElementsByClassName("checkbox_count");
    var isChecked = false;
    var validationInfo = /[#@]{1}/;
    if(validationInfo.test(formName)){
		for (var i=0; i<inputElm.length; i++) {
			if (inputElm[i].type === "checkbox" && inputElm[i].checked === true){
				var chosen = inputElm[i].id;
				switch (chosen) {
					case "checkbox1":
						var First = document.getElementById("form1").cloneNode(true);
						document.getElementById("selection_area").appendChild(First);
						break;
					case "checkbox2":
						var Second = document.getElementById("form2").cloneNode(true);
						document.getElementById("selection_area").appendChild(Second);
						break;
					case "checkbox3":
						var Third = document.getElementById("form3").cloneNode(true);
						document.getElementById("selection_area").appendChild(Third);
						break;
					case "checkbox4":
						var Fouth = document.getElementById("form4").cloneNode(true);
						document.getElementById("selection_area").appendChild(Fouth);
						break;
					case "checkbox5":
						var Fifth = document.getElementById("form5").cloneNode(true);
						document.getElementById("selection_area").appendChild(Fifth);
						break;
					default:
				}			
				formValid = true;
			}
			
			document.getElementById("formName").innerHTML =  formName;
		}	
		
		if (formValid) {
			closeModal();
			resetForm();
			checkboxes();
		} else {
			alert('Please check any option');
		}			
    }
    else {
        alert("any letters, # and @ are obligatory");
    }
}
function cleaner(){
    document.getElementById("selection_area").innerHTML = ""
}


window.onkeydown = window.onkeyup = window.onkeypress = handle;

function handle(e) {
	keycode = e.keyCode || e.which;
	
	if (keycode == '27' &&	modalIsOpen) {
		closeModal();
		resetForm();
		checkboxes();
	}
}