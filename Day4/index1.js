fetch("http://localhost:8080/mydata",
{
    method: "GET",
})
.then((response)=>response.json())
.then((data) => renderData(data));

function renderData(data){
    console.log(data);
}