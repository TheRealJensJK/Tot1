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
  document.getElementById('age2').value = age + " years and " + m + " months";
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



//preventing the scroll function from running on phones and tablets
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
  
if (!isMobile()) {
  //disable scrolling on the page
  function disableScroll(){
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function() {};
  }
  

  document.addEventListener("scroll", function firstScroll(){
    window.scrollTo({behavior: 'smooth' , top: window.innerHeight + 20});
    
    enableScroll();
  },{once:true});
}
  
  

