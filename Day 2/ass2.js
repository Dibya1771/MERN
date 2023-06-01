//---------------------------------------- view image when clicking and also remove image-------------------------------------------
const button_view =document.getElementById("view_pic");
const button_remove =document.getElementById("remove_pic");

button_view.addEventListener("click",()=>{
    const div=document.getElementById("show_pic");
    const image=document.createElement("img");
    image.src="image/technology.jpg";
    image.classList.add("img_tree");    // adding class to apply css in css file
   
   // image.style="width:200px;"
    //image.style.marginLeft = "32px";

    // syntax for applying css in javaScript -   id.style.color="red";(it is inline)   or make an id then change in css(best way)
    div.append(image);
});

button_remove.addEventListener("click",()=>{
    window.location.reload();
});


//-------------------------------------------Show and reomove text from text area--------------------------------------
const button1= document.getElementById("clickable1");
const button2= document.getElementById("clickable2");
const textarea= document.getElementById("content");

button1.addEventListener("click",() =>{
    textarea.innerText="Hello! My name is Dibya Ranjan Rath, also known as Biku. I am currently a student at Silicon Institute of Technology in Bhubaneswar.";  //First the text area is empty so putting text when clicking 1st button (that is show button)
});

button2.addEventListener("click",() =>{
    textarea.innerText="";  //Second clear the text area while clicking 2nd button that is Remove
});

//-----------------------------------------------Table-----------------------------------------
//querySelector-- used if you have one element else use id
const table=document.querySelector("table");

button1.addEventListener("click",() =>{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText="20BCSE62";
    td1.style.color="#d0d0ff";
    const td2=document.createElement("td");
    td2.innerText="Biku";
    td2.style.color="#d0d0ff";
    const td3=document.createElement("td");
    td3.innerText="Male";
    td3.style.color="#d0d0ff";
    tr.append(td1,td2,td3);
    table.append(tr);
});

button2.addEventListener("click",() =>{
    window.location.reload();
 });
