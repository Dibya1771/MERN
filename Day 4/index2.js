const button = document.getElementById("mybutton");

button.addEventListener("click",()=>{
    const Takenemail = document.getElementById("email").value;
    const Takenpassword = document.getElementById("password").value;

    fetch("http://localhost:8080/mydata",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: Takenemail,
        password: Takenpassword,
    })
});

})
body: the heading is a