import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file for styling

function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [url, setUrl] = useState('');

  const handlePostClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      mobile,
      gender,
      url
    };

    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data stored successfully:', data);
        setName('');
        setEmail('');
        setMobile('');
        setGender('');
        setUrl('');
        setShowForm(false);
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };

  return (
    <div>
      <nav className="navbar">
        {/* <input type="text" placeholder="Search..." className="search-input"/> */}
        
        <button onClick={handlePostClick} className="post-button">
          Post
        </button>
      </nav>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <span className="close-button" onClick={() => setShowForm(false)}>
              &#x2715;
            </span>
            <form onSubmit={handleSubmit} className="post-form">
                <br></br>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
              <br></br>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
              <br></br>
              <input
                type="text"
                placeholder="Mobile No."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="form-input"
              />
              <br></br>
              <input
                type="text"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-input"
              />
              <br></br>
              <input
                type="text"
                placeholder="Image URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="form-input"
              />
              <br></br>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="data-content">
        {/* Render your API data or other content */}
      </div>
    </div>
  );
}

export default Navbar;
