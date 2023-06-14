const email = document.getElementById("email");
const pass = document.getElementById("password");

function findUser() {
  fetch("http://localhost:8080/userDetails", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((udata) => {
      console.log(udata);   // we can give any name here like- data, udata etc... it is just an parameter
      const user = udata.find(            //
        (el) => el.email === email.value && el.password === pass.value
      );
      console.log(user);
      if (user) {

        
        alert("Logged in Successfully");
        window.location.href = "./application_form.html";
      } else {
        alert("Invalid Credentials!! ");
        window.location.href = "./register.html";
      }
    });
  console.log(udata);
}
