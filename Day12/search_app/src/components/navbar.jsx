import React from "react";
import SearchContext from "../searchContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { search, updateSearch } = useContext(SearchContext);
  const handleChange = (e) => {
    updateSearch(e.target.value);
  };
  // const handleSignin = ()=> {
  //    navigate("/signin");
  // };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
export default Navbar;