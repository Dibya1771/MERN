import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Card from "./components/card";

function App() {

  const data=[{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYd3qWb7UlM_UBeis23ZV3SHzJpNy9-aBeScMnEzLHO1zc0wD",
    title: "WALL·E",
    rating: "8.4/10",
},

{
    image: "https://lh3.googleusercontent.com/B4cnobWyvdonq4TQ-ijq0tVNnKWo3ZwhPpEOQu2llSxuXLKyhTtSg9gmPhFrZC6MaLV03rD5aFm8_Kl2WDdcbP7P8TwimH8ZucRY34IB=w500-rw",
    title: "Aquaman",
    rating: "6.8/10",
},
{
    image: "https://images-cdn.ubuy.co.in/639c88534d20d83575030186-the-batman-movie-poster-profile-blue.jpg",
    title: "The Batman",
    rating: "7.8/10",
},

{
    image: "https://pbs.twimg.com/media/FvYLAURaEAIwqq0?format=jpg&name=medium",
    title: "Oppenheimer",
    rating: "9.1/10",
},


{
    image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/mv5bmdk4mtdhyzetodk3os00zdbjlwfhntqtmdi2oddjnzqzzta3xkeyxkfqcgdeqxvymjmxote0oda-_v1_.jpg?q=50&fit=crop&h=720&dpr=1.5",
    title: "Megan",
    rating: "6.4/10",
},

{
    image: "https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022.jpg",
    title: "Morbius",
    rating: "8.4/10",
},
{
    image: "https://e1.pxfuel.com/desktop-wallpaper/214/87/desktop-wallpaper-lovely-new-hollywood-movies-poster-movies-hollywood.jpg",
    title: "Ender's Game",
    rating: "8.4/10",
},
{
    image: "https://e1.pxfuel.com/desktop-wallpaper/19/469/desktop-wallpaper-new-movie-posters-hollywood-movie-2022.jpg",
    title: "The Lost City",
    rating: "8.4/10",
},
{
    image: "https://e1.pxfuel.com/desktop-wallpaper/236/875/desktop-wallpaper-new-giclee-art-print-2021-promo-for-snake-eyes-g-i-joe-hollywood-2022-movies-poster.jpg",
    title: "Snake Eyes",
    rating: "8.4/10",
}

];


  return (
    // <div className="App">
    //   { <div>
    //     <h1>Home</h1>
    //     <h1>About Us</h1>
    //     <h1>Contact us</h1>
    //     <h1>More</h1>
    //   </div> }
    // </div>  we can directly write here also

// Here we call the Navbar function   i.e., <Navbar /> (not the file name or the tag name it is function)
// Now we write all the things inside one parrent div



<div>
<Navbar />
<div className='after-nav' >
{data.map((el) => {
  return( <Card image={el.image} title={el.title} rating={el.rating} />);
  })}
</div>



{/* <Card 
username="Biku"
image={"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
/> */}

</div>


  );
}

export default App;


// we can give comment inside {/* */}