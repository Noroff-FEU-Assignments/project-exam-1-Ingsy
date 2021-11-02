const form = document.querySelector("#contactForm");
const Name = document.querySelector("#Name");
const NameError = document.querySelector("#NameError");
const Email = document.querySelector("#E-mail");
const EmailError = document.querySelector("#E-mailError");
const Subject = document.querySelector("#Subject");
const SubjectError = document.querySelector("#SubjectError");
const Message = document.querySelector("#Message");
const MessageError = document.querySelector("#MessageError");
const submitButton = document.querySelector("#submit");

function validateForm(event) {
  event.preventDefault();
  var valid = true;
  if (checkLength(Name, 5)) {
    hide(NameError);
  } else {
    valid = false;
    NameError.style.display = "block";
  }

  if (validateEmail(Email)) {
    hide(EmailError);
  } else {
    valid = false;
    EmailError.style.display = "block";
  }
  if (checkLength(Subject, 15)) {
    hide(SubjectError);
  } else {
    valid = false;
    SubjectError.style.display = "block";
  }
  if (checkLength(Message, 25)) {
    hide(MessageError);
  } else {
    valid = false;
    MessageError.style.display = "block";
  }

  return valid;
}

function canProceed(event) {
  const valid = validateForm(event);
  if (valid) {
    window.location.href = document.querySelector("#link").getAttribute("href");
  }
}

if (form != undefined) {
  document.querySelector("#link").style.pointerEvents = "none";
  form.addEventListener("change", validateForm);
  submitButton.addEventListener("click", canProceed);
}

function hide(elm) {
  if (elm != null) {
    elm.style.display = "none";
  }
}

function checkLength(elm, len) {
  if (elm == null || elm.value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  if (email == null) return true;
  var re = /\S+@\S+\.\S+/;
  return re.test(email.value);
}
