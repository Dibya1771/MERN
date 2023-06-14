import React, { useEffect, useState } from 'react';
import Card from './components/card';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getData = async () => {
    let url = 'http://localhost:8080/user';
    if (searchQuery) {
      url += `?q=${searchQuery}`;
    }

    await fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setArr(data);
      });
  };

  const handlePatch = async (id) => {
    const updatedName = prompt('Enter updated name:');
    await fetch(`http://localhost:8080/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: updatedName,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('Name Updated!');
          getData();
        } else {
          alert('Error in fetching');
        }
      });
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/user/${id}`, {
      method: 'DELETE',
    }).then(() => {
      alert('Record Deleted!');
      getData();
    });
  };

const handleSearch = () => {
  getData();
};

useEffect(() => {
  handleSearch();
}, [searchQuery]);

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} className='Search'>&#128269;</button>
      </div>

      <div className="card-container">
        {arr.length === 0?(
          <p>No data found</p>
        ):(
        arr.map((el) => (
          <Card
            key={el.id}
            image={el.url}
            title={el.title}
            id={el.id}
            onDelete={() => handleDelete(el.id)}
            onPatch={() => handlePatch(el.id)}
            buttonText="Delete"
          />

        ))
        )}
      </div>
    </div>
  );
}

export default App;









// ------------------------- EEE -------------------------------------

// import logo from './logo.svg';

// import './App.css';
// import Card from './components/card';
// import { useEffect, useState } from 'react';


// //Handling of data from jsonplaceholder json link

// function App() {
//   const [arr, setArr] = useState([]);

//   const getData = async() => {
//     await fetch("https://jsonplaceholder.typicode.com/photos", {
//       method: "GET"
//     })
//     .then(res => res.json()).then(data => {
//       const newData = data.splice(0,20);
//       setArr(newData);
//     });
//   }

//   useEffect(() => {
//     getData();
//   },[]);  //[] empty dependency helps to know the website to know how many times it has to render (i.e. only once)

//   console.log(arr);

//   return (
//     <div className="App">
//     {arr.map((el) => {
//       return(
//         <Card
//           name={el.title}
//           image = {el.url} />
//       );
//     })

//     }
//     </div>
//   );
// }





// function App() {
//     const [arr, setArr] = useState([]);
  
//     const getData = async() => {
//       await fetch(`http://localhost:8080/users{$(id)`, {
//         method: "GET"
//       })
//       .then(res => res.json()).then(data => {
//         const newData = data.splice(0,20);
//         setArr(newData);
//       });
//     }
  
//     useEffect(() => {
//       getData();
//     },[]);  //[] empty dependency helps to know the website to know how many times it has to render (i.e. only once)
  
//     console.log(arr);
  
//     return (
//       <div className="App">
//       {arr.map((el) => {
//         return(
//           <Card key={el.id} userId={el.id} title={el.title} body={el.body} onClick=[() => handleClick(el.id)] />
//         );
//       })
  
//       }
//       </div>
//     );
//   }

// //PATCH OPERATION
// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   const handleUpdate = (userId) => {
//     const newTitle = prompt('Enter the new title:');
//     if (newTitle) {
//       const updatedUsers = users.map(user => {
//         if (user.id === userId) {
//           return { ...user, title: newTitle };
//         }
//         return user;
//       });
//       setUsers(updatedUsers);

//       fetch(`http://localhost:8080/users/${userId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title: newTitle }),
//       })
//         .then(response => response.json())
//         .then(updatedData => {
//           console.log('Data updated:', updatedData);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     }
//   };

//   return (
//     <div>
//       {users.map(user => (
//         <Card1
//           key={user.id}
//           title={user.title}
//           body={user.body}
//           onClick={() => handleUpdate(user.id)}
//         />
//       ))}
//     </div>
//   );
// }



// //PUT OPERATION
// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   const handleUpdate = (userId) => {
//     const updatedTitle = prompt('Enter the new title:');
//     if (updatedTitle) {
//       const updatedUsers = users.map(user => {
//         if (user.id === userId) {
//           return { ...user, title: updatedTitle };
//         }
//         return user;
//       });
//       setUsers(updatedUsers);

//       fetch(`http://localhost:8080/users/${userId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title: updatedTitle }),
//       })
//         .then(response => response.json())
//         .then(updatedUser => {
//           console.log('Data updated:', updatedUser);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     }
//   };

//   return (
//     <div>
//       {users.map(user => (
//         <Card1
//           key={user.id}
//           user={user}
//           onClick={() => handleUpdate(user.id)}
//         />
//       ))}
//     </div>
//   );
// }


// //DELETE OPERATION

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   const handleUpdate = (userId) => {
//     const updatedTitle = prompt('Enter the new title:');
//     if (updatedTitle) {
//       const updatedUsers = users.map(user => {
//         if (user.id === userId) {
//           return { ...user, title: updatedTitle };
//         }
//         return user;
//       });
//       setUsers(updatedUsers);

//       fetch(`http://localhost:8080/users/${userId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title: updatedTitle }),
//       })
//         .then(response => response.json())
//         .then(updatedUser => {
//           console.log('Data updated:', updatedUser);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     }
//   };

//   const handleDelete = (userId) => {
//     fetch(`http://localhost:8080/users/${userId}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         const updatedUsers = users.filter(user => user.id !== userId);
//         setUsers(updatedUsers);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       {users.map(user => (
//         <Card
//           key={user.id}
//           user={user}
//           onUpdate={() => handleUpdate(user.id)}
//           onDelete={() => handleDelete(user.id)}
//         />
//       ))}
//     </div>
//   );
// }



// function App() {
//   const [arr, setArr] = useState([]);
//   const [searchStr, setSearchStr] = useState("");

//   const getData = async () => {
//     await fetch("http://localhost:8080/users", {
//       method: "GET"
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setArr(data);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleChange = (e) => {
//     setSearchStr(e.target.value);
//   };

//   const filteredArr = arr.filter((item) =>
//     item.name.toLowerCase().includes(searchStr.toLowerCase())
//   );





  
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchStr}
//         onChange={handleChange}
//       />
//       {filteredArr.length > 0 ? (
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)"
//         }}>
//           {filteredArr.map((el) => (
//             <Card key={el.id} image={el.profile} title={el.name} />
//           ))}
//         </div>
//       ) : (
//         <h1>No Data Found</h1>
//       )}
//     </div>
//   );
// }


//export default App;