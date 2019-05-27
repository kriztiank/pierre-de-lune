
// Avoid Global Variables
let a;
let d;
let e;

function validate() {
  a = document.getElementById("name_id").value;
  d = document.getElementById("email_id").value;
  e = document.getElementById("comment_id").value;
  
  // if the text field is empty or less than 2 characters, display warning
  if (a === "" || a.length < 2) {
    alert("Dette felt er påkrævet");
    document.getElementById("name_id").focus();
    return false;
  }

  if (d === "") {
    alert("Indtast gyldig e-mailadresse");
    document.getElementById("email_id").focus();
    return false;
  }

  //if the text field is empty or less than 10 characters, display warning
    if (e === "" || e.length < 10) {
      alert("Dette felt er påkrævet");
      document.getElementById("comment_id").focus();
      return false;
    }

  // function isEmailKey nederst på siden tjekker efter en gyldig email og kører nedenstående if true
  if (isEmailKey() == true) {
    location.href = 'landingpage.html';
    alert(`
        Navn: ${a} 
        Email: ${d} 
        Comment: ${e} 
        Vi har modtaget din information`);
  }
}

// function der gør at man kun kan indtaste bokstaver
function isLetterKey(evt) {
  let charCode2 = evt.which ? evt.which : event.keyCode;
  if (charCode2 < 60) return false;

  return true;
}

function isEmailKey() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id.value)) {
    return true;
  }
  alert("Indtast gyldig e-mailadresse");
  return false;
}
