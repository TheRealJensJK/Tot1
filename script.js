//setting the current date as the max date for the date input
window.onload = setMaxDate();

//get date from html element
//find current date
//calculate age in years and months
//output age in years and months to html tag using innerHTML
function calculateAge() {
  var birthDate = document.getElementById('bday').value;
  var age = new Date().getFullYear() - new Date(birthDate).getFullYear();
  var m = new Date().getMonth() - new Date(birthDate).getMonth();
  if (m < 0 || (m === 0 && new Date().getDate() < new Date(birthDate).getDate())) {
    age--;
  }
  if(m < 0){
    m *= -1;
  }
  document.getElementById('age').value = age + " years and " + m + " months";
  document.getElementById('age2').value = age + " years and " + m + " months";
}


//set the max attribute of the date input to today's date
function setMaxDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("bday").setAttribute("max", today);
}


//input id=bday
//output id=age