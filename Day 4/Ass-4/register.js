const takenName = document.getElementById("name");
const takenMobile = document.getElementById("mobile");
const takenEmail = document.getElementById("email");
const takenPassword = document.getElementById("password");

function submitData() {
  //e.preventDefault();

  if (takenEmail.value !== "" && takenPassword.value !== "" && takenName.value !=="" && takenMobile.value !== "") {
    const obj = {
      id: Date.now(),
      name: takenName.value,   //left hand side is the key (that is same as the id name (and it is created in the data.json))
      mobile: takenMobile.value,
      email: takenEmail.value,
      password: takenPassword.value,
    };
    // console.log(obj);  //it shows all the values declare in the objects
    // console.log(Name,Mobile,Email);

    fetch("http://localhost:8080/userDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    .then((res) => res.json())
    .then((udata) => {
      console.log(udata);
      alert("Your account has been created...\n Please Login to continue.");
    })
    .catch((err) => console.log(err));
    }
    
    else {
      alert("All fields are required to fill");
    }
    window.location.href = "./login.html";  
}

//without making function we can directly write addEventListener also (like class assignment (name- register_new.js ))