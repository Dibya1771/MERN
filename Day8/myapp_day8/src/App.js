import logo from './logo.svg';
import './App.css';
// import Card from "./components/Card.jsx"


import Card2 from "./components/Card2.jsx"
import { useEffect } from 'react';
import { useState } from 'react';

//Card for  in bmrowser show change and modified which display true and false value in console
//When you do card only comment card2 import statements
// function App() {
//   return (
//     <div className="App">
//         <Card />
//         {/* <Card1 /> */}
//     </div>
//   );
// }

//Card2 is for API
function App() {
    const [arr,setArr] = useState([]);
      const getData =async() =>{
        await fetch("https://jsonplaceholder.typicode.com/photos",{    //This is API
          method:"GET"   
      }).then((res)=>res.json()).then((data)=>{
        const newData = data.splice(0,11)
        setArr(newData);
      })
  
      };
      useEffect(()=>{
        getData();
      },[])
    return (
      arr.map((el)=>{return(
        <Card2 image={el.url} title={el.title}/>
      )})
    );
  }

export default App;