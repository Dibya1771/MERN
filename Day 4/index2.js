// fetch("http://localhost:8080/mydata",{
// method:"GET",
// })
// .then((response) => response.json())
// .then((data) => renderData(data));

// function renderData(data){
//     console.log(data);
// }
const button = document.getElementById("mybutton");
const email = document.getElementById("email");
const password = document.getElementById("password");


function submitData() {
    if (email.value != "" && password.value != "") {
        const obj = {
            id: Date.now(),
            email: email.value,
            password: password.value,
        };
        fetch("http://localhost:8080/mydata", {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify(obj),

        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Account created");
            })
            .catch((err) => console.log(err));
    }
    else{
        alert("Please enter email and password");
    }
}