const Name = document.getElementById("name");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const password = document.getElementById("password");
console.log(name,email, password);

function submitData() {
  if (email.value != "" && password.value != "") {
    const obj = {
      id: Date.now(),
      name: Name.value,
      mobile: mobile.value,
      email: email.value,
      password: password.value,
    };
    fetch("http://localhost:8080/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Your account has been created...\n Please Login to continue.");
      })
      .catch((err) =>console.log(err));
  } else {
    alert("Please enter email and password.");
  }
}
