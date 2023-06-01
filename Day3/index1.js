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
    image: "https://i0.wp.com/media.tumblr.com/tumblr_m7gi3yFRJd1qjs7e9.png?zoom=2",
    title: "The Dark Knight Rises",
    rating: "8.4/10",
},
{
    image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/mv5bmdk4mtdhyzetodk3os00zdbjlwfhntqtmdi2oddjnzqzzta3xkeyxkfqcgdeqxvymjmxote0oda-_v1_.jpg?q=50&fit=crop&h=720&dpr=1.5",
    title: "Megan",
    rating: "6.4/10",
},
{
    image: "http://m.gettywallpapers.com/wp-content/uploads/2022/05/Avatar-2-Wallpaper-New-.jpg",
    title: "Avatar : The Way of Water",
    rating: "8.4/10",
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
},
{
    image: "https://e0.pxfuel.com/wallpapers/947/677/desktop-wallpaper-avengers-infinity-war-superheroes-marvel-movie-poster-2018.jpg",
    title: "Avengers: Infinity war,",
    rating: "9.4/10",
},

];

const movieBox= document.getElementById("show_movies");

// ---------------------------- with loop (method-1) -----------------------------
/*
for(let i=0;i<data.length;i++){
    const div= document.createElement("div");
    const image= document.createElement("img");
    image.src = data[i].image;
    const movieTitle = document.createElement("h3");
    // movieTitle.innerText = data[i].title;
    movieTitle.innerText = data[i].title;
    const movieRating = document.createElement("p");
    movieRating.innerText = "Rating: "+data[i].rating;

//-----------------------------------------------
    const button=document.createElement("button");
    button.innerText = "Watch Movie";
    button.addEventListener("click",()=>{
        alert(`You are clicked on ${data[i].title}`);
    });

//--------------------------------------------------
    div.append(image,movieTitle,movieRating,button);
    movieBox.append(div);
}
*/



//------------------------ without loop (method-2) --------------------------

data.map((el)=>{
    const div=document.createElement("div");
    const img=document.createElement("img");
    img.src=el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = document.createElement("p");
    rating.innerText = "Rating : " + el.rating;
    const button =document.createElement("button");
    button.innerText = "Watch Movie";
    button.addEventListener("click",()=>{
        alert(`You clicked on ${el.title}`);
    }),
    div.append(img, movieTitle, rating,button);
    movieBox.append(div);
}
);
