import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

//Pagination
const getData = async () => {
  let url = `http://localhost:8080/user?_page=${currentPage}&_limit=10`;
  if (searchQuery) {
    url += `&q=${searchQuery}`;
  }

  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json();
  const totalCount = response.headers.get("X-Total-Count");
  const totalPages = Math.ceil(totalCount / 10);

  setArr(data);
  setTotalPages(totalPages);
};
//Update
const handlePatch = async (id) => {
  const updatedName = prompt("Enter new name to update:");
  const updatedmail = prompt("Enter new email to update:");
  const updateMob = prompt("Enter new mobile number to update:");
  const updateGen = prompt("Enter your correct gender:");
  const updatePic = prompt("Provide new url to update your profile picture");
  
  const requestBody = {};

  if (updatedName != null && updatedName.trim() !== "") {
    requestBody.name = updatedName;
  }
  if (updatedmail != null && updatedmail.trim() !== "") {
    requestBody.email = updatedmail;
  }
  if (updateMob != null && updateMob.trim() !== "") {
    requestBody.mobile = updateMob;
  }
  if (updateGen != null && updateGen.trim() !== "") {
    requestBody.gender = updateGen;
  }
  if (updatePic != null && updatePic.trim() !== "") {
    requestBody.url = updatePic;
  }

  if (Object.keys(requestBody).length > 0) {
    await fetch(`http://localhost:8080/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((res) => {
      if (res.ok) {
        alert("Data Updated successfully!");
        getData();
      } else {
        alert("Error in fetching");
      }
    });
  }
};

//Delete
const handleDelete = async (id) => {
  await fetch(`http://localhost:8080/user/${id}`, {
    method: "DELETE",
  }).then(() => {
    alert("Record Deleted!");
    getData();
  });
};
//Search
const handleSearch = (e) => {
  setSearchQuery(e.target.value)
  setCurrentPage(1);
 // getData();
};

const handlePageChange = (page) => {
  setCurrentPage(page);
};

useEffect(() => {
  getData();
}, [currentPage, searchQuery]);

  return (
    <div className="App">

     

{/* ------------------------Search------------------- */}
 <div className="search-container">
        <h1 style={{ marginLeft: '1rem' }}>Home</h1>
         <h1>Pages</h1>
         <h1>About</h1>
         <h1>Contact</h1>
        <input
          type="text"
          placeholder="Search..."
          className='search-input'
          value={searchQuery}
         // onChange={(e) => setSearchQuery(e.target.value)}
          onChange={handleSearch}
        />
         <Navbar />
      </div> 


{/*--------------------------- card content ---------------------------*/}
  <div className="card-container">
        {arr.length === 0?(
          <p>No data found</p>
        ):(
        arr.map((el) => (
          <Card
            // key={el.id}
            image={el.url}
            name={el.name}
            email={el.email}
            mobile={el.mobile}
            gender={el.gender}
            id={el.id}
            onDelete={() => handleDelete(el.id)}
            onPatch={() => handlePatch(el.id)}
            buttonText="Delete"
          />
        ))
        )}
      </div>
      {/* ------------------------Pagination------------------- */}
      <div className="pagination">
     {Array.from({ length: totalPages }, (_, index) => (
         <button
            key={index + 1}
            id='pagination_button'
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : "pageNumber"}
          >
            {index + 1}
          </button>
        ))}
      </div>
{/* ------------------------Pagination------------------- */}
    </div>
  );
}

export default App;

