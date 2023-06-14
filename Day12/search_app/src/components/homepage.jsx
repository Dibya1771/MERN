import React from "react";
import Card from "./card";
import { useEffect,useState,useContext } from "react";
import Navbar from "./navbar";
import SearchContext from "../searchContext"

function HomePage(){
    const { search } = useContext(SearchContext);
    console.log(search);
    const [arr,setArr]=useState([]);
    const [wholearr, setWholeArr] = useState([]);
    const [searchStr, setSearchStr] = useState("");

    // const [newarr, setNewArr] = useState([]);
    // const [pageArr, setPageArr] = useState([]);

    const pageArr =[];
    let i=1;
    while(i<= wholearr.length/10){
        pageArr.push(i);
        i++;
    }
    //console.log(pageArr);

    const [page,setPage]=useState(1);

    // const handleChange = (e) =. {
    //     setSearchStr(e.target.value);
    // };
  

    const getData = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method:"GET",
        })
        .then((res)=> res.json())
        .then((data) => {
            setWholeArr(data);
            const end =page*20;
            const start= page-1;
            const newData =data.slice(start*20,end);
            setArr(newData)
        });
    };

    const handlePage=(el) =>{
        setPage(el);
    };

//-----------------------------------------------------
// comments line- 48 to 135

// console.log(page);

// const handlePost = async() => {
//     const obj = {
//         profile: "https:",
//         name: "ANSHU",
//         email: "anshu@gmaol.com",
//         address: "Silicon",
//     };
//     await fetch("http://localhost:8080/users",{
//         method: "POST",
//         headers:{
//             "Content-Type" : "application/json",
//         },
//         body: JSON.stringify(obj),
//     }).then((res)=>{
//         if(res.ok){
//             alert("Posted!");
//         }
//     });
// };

// const handlePut = async(id)=>{
//     await fetch(`http://localhost:8080/users/${id}`,{
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             profile: "https://---------",
//         name: "SAMA",
//         email: "sanshu@gmaol.com",
//         address: "Mera Silicon",
//         }),
//     }).then((res)=>{
//         if(res.ok){
//             alert("Updated!");
//             getData();
//         }
//     });
// };



//-----------------------------------------------------

useEffect(() => {
    getData();
    }, [page]);

    //comment from 141 to 146

    return(
        <div>
            <Navbar />

            {/* <button onClick={handlePost}>Post</button>
            <input
            type="text"
            placeholder="Search"
            value={searchStr}
            onChange={(e)=> handleChange(e)}
            /> */}

            {/* <button onClick={getSearchedData}>Search</button> */}

            {arr.length > 0? (
                <div
                style={{
                    display:"grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    marginTop: "5%",
                }}
                >
                    {arr.map((el)=>{
                        return <Card userid={el.userId} title={el.title} body={el.body} />;
                    })}
                </div>
            ): (
                <h1>No Data Found</h1>
            )}



            {pageArr.map((el)=>{
                return <button onClick={() => handlePage(el)} >{el}</button>;
            })}
        </div>
    );

}  //Function end

export default HomePage;