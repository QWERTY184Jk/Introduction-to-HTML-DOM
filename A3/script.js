function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").Value;
  const pass = document.getElementById("password").Value;
  const age = document.getElementById("age").Value;
  const msgBox = document.getElementById("message");

  let message = " ";

  if (email === " ") {
    message = "please enter an email";
    msgBox.style.color = "red";
  } else if (pass === " ") {
    message = "Password must be atleast 8 characters.";
    msgBox.style.color = "red";
  } else if (age === " ") {
    message = "Age must be between 12 and 50.";
    msgBox.style.color = "red";
  }
  else {
    message = "Login Successful";
    msgBox.style.color = "green";
  }

  msgBox.innerText = message;
}
