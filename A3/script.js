function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());
  const msgBox = document.getElementById("message");

  let message = "";
  msgBox.style.color = "red";

  if (!email) {
    message = "Please enter an email.";
  } else if (!pass) {
    message = "Please enter a password.";
  } else if (pass.length < 8) {
    message = "Password must be at least 8 characters.";
  } else if (isNaN(age)) {
    message = "Please enter your age.";
  } else if (age < 12 || age > 50) {
    message = "Age must be between 12 and 50.";
  } else {
    message = "Login Successful!";
    msgBox.style.color = "green";
  }

  msgBox.innerText = message;
}
