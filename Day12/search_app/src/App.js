import HomePage from './components/homepage';
import AllRoutes from './AllRoutes';
import Navbar from './components/navbar';
import './App.css';

function App(){
  // return (
  // <AllRoutes />);

  return <AllRoutes />;

 // ---------------------------------------------------------------------------------------------------
  //if we don't give () bracket then write return in one line-  return <AllRoutes />;  (This will work)
  // but if we write in new line it would not be work- 
  // like-             return  
  //                      <AllRoutes />;         (Not work)
  //so use bracket for new line that is- 
  // return (
  // <AllRoutes />);
 // ---------------------------------------------------------------------------------------------------
  
}

export default App;