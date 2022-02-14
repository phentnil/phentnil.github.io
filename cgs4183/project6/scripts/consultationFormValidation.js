// consultationFormValidation.js

function consultationFormValidate() {
  var consultationFormObj = document.getElementById("consultationsForm");
  var consultType = consultationFormObj.consultType.value;
  var cLoc = consultationFormObj.cLoc.value;
  var rType = consultationFormObj.rType.value;
  var email = consultationFormObj.email.value;
  var formOK = true;
  if (!validateEmail(email)) {
    alert("Error: Invalid e-mail address.");
    formOK = false;
  }
  switch (consultType) {
    case "placement":
      if (cLoc === "") {
        alert("Error: Must select at least one Consultation Location.");
        formOK = false;
      }
      break;
    case "selection":
      if (cLoc === "") {
        alert("Error: Must select at least one Consultation Location.");
        formOK = false;
      }
      break;
    case "repotting":
      if (rType === "") {
        alert("Error: Must select at least one Repotting Size.");
        formOK = false;
      }
      break;
    default:
      alert("Error: Must select at least one kind of Consultation Type.");
      formOK = false;
      break;
  }
  if (formOK) {
    alert("All information looks good.\nThank you!");
    return true;
  }
  return false;
}
function validateEmail(address) {
  var emailSearch = address.search(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/
  );
  if (emailSearch === 0) {
    return true;
  }
  return false;
}
