// feedbackFormValidation.js

function feedbackFormValidate() {
  var feedbackFormObj = document.getElementById("contact");
  var firstName = feedbackFormObj.firstName.value;
  var lastName = feedbackFormObj.lastName.value;
  var phone = feedbackFormObj.phone.value;
  var email = feedbackFormObj.email.value;
  var formOK = true;
  if (!validateName(firstName)) {
    alert("Error: Invalid first name.");
    formOK = false;
  }
  if (!validateName(lastName)) {
    alert("Error: Invalid last name.");
    formOK = false;
  }
  if (!validatePhone(phone)) {
    alert("Error: Invalid phone number.");
    formOK = false;
  }
  if (!validateEmail(email)) {
    alert("Error: Invalid e-mail address.");
    formOK = false;
  }
  if (formOK) {
    alert("All information looks good.\nThank you!");
    return true;
  }
  return false;
}
function validateName(name) {
  var nameSearch = name.search(/^[-'\w\s]+$/);
  if (nameSearch === 0) {
    return true;
  }
  return false;
}
function validatePhone(phone) {
  var phoneSearch1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
  var phoneSearch2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
  if (phoneSearch1 === 0 || phoneSearch2 === 0) {
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
