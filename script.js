//setting the current date as the max date for the date input
window.onload = setMaxDate();



//calculate the age of the applicant based on the input in the form, the age is not displayed to the user, but is included in the email sent to the admin (to easier see the age, and not have to calculate age themself)
function calculateAge() {
  var birthDate = document.getElementById('birthday').value;
  var age = new Date().getFullYear() - new Date(birthDate).getFullYear();
  var m = new Date().getMonth() - new Date(birthDate).getMonth();
  if (m < 0 || (m === 0 && new Date().getDate() < new Date(birthDate).getDate())) {
    age--;
  }
  if(m < 0){
    m *= -1;
  } 
  document.getElementById('age').value = age + " years and " + m + " months";
}



//set the max attribute of the date input to today's date to prevent future dates as inputs
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
  document.getElementById("birthday").setAttribute("max", today);
}

function next(){
  //jump to next input field of value is not "Please select"
  if(document.getElementById("country").value != "Please select country"){
    document.getElementById("city").focus();
  }
}


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function scrollDown(){
  window.scrollTo({behavior: 'smooth', top: document.body.scrollHeight});
}

$(function(){
  
  $(".form-controll").on('focus', function(){
    
    $(this).parent(".row").addClass("focused");
    

  });

  $(".form-controll").on('blur', function(){
    
    $(this).parent(".row").removeClass("focused");
    

  });


})