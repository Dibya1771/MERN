//Creating a function
function hyy(age,address){    //age and address are parameters
    var name=prompt("What is your name");
    alert("HII "+name+", your age is: "+age+" Address: "+address);
    console.log("Name: "+name+" Age: "+age+" Address: "+address);
    return name+" "+" "+age+" "+address;
}

hyy(21,"Banglore");  //Function Call  (21 and banglore are arguments)