const takenImage = document.getElementById("image");
const takenFoodName = document.getElementById("foodName");
const takenRecipe = document.getElementById("recipe");

function FormDataSubmit() {

  if (takenImage.value != "" && takenFoodName.value != "" && takenRecipe.value != "") {
    const obj = {
      image: takenImage.value,   //left hand side is the key (that is same as the id name (and it is created in the data.json))
      foodName: takenFoodName.value,
      recipe: takenRecipe.value,
    };
   
    fetch("http://localhost:8080/rec", {
      method: "POST",    //If you use post add a lid in the objectv
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    .then((res) => res.json())
    .then((udata) => {
      console.log(udata);
      alert("Your Data is submitted successfully!!");
    })
    .catch((err) => console.log(err));
    }
    
    else {
      alert("All fields are required to fill");
    }
    window.location.href = "./ass4_home.html";  
}

//without making function we can directly write addEventListener also (like class assignment (name- register_new.js ))
