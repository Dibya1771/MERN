// const data=[
// {
//     image: "https://e0.pxfuel.com/wallpapers/227/1006/desktop-wallpaper-burger-sandwich-food-fire.jpg",
//     foodName: "Burger",
//     recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
// },
// //we can give \n for new line  ()
// {
//     image: "https://e0.pxfuel.com/wallpapers/656/834/desktop-wallpaper-craving-biryani-head-over-to-these-delectable-spots-in-mumbai-biriyani.jpg",
//     foodName: "Biriyani",
//     recipe: "Step 1: Gather the ingredients.\nStep 2: Rinse and soak the basmati rice.\nStep 3: Sauté onions and ginger-garlic paste.\nStep 4: Cook meat/vegetables with tomatoes, yogurt, and spices.\nStep 5: Add water and rice, cook until rice is fluffy.\nStep 6: Optional: Add saffron and garnish with fried onions and cilantro.\nStep 7: Fluff the rice and serve hot with raita or accompaniments.",
// },
// {
//     image: "https://e0.pxfuel.com/wallpapers/256/32/desktop-wallpaper-delicious-pizza-food.jpg",
//     foodName: "Pizza",
//     recipe: "Step 1: Gather the ingredients - pizza dough, sauce, cheese, and toppings.Step 2: Preheat the oven to the recommended temperature.\nStep 3: Roll out the dough and transfer it to a baking sheet.\nStep 4: Spread sauce on the dough.\nStep 5: Sprinkle cheese over the sauce.\nStep 6: Add your favorite toppings.\nStep 7: Remove from the oven, let it cool slightly, and enjoy your homemade pizza.",
// },

// {
//     image: "https://e1.pxfuel.com/desktop-wallpaper/883/921/desktop-wallpaper-indian-food-india-and-mobile-backgrounds-egg-roll.jpg",
//     foodName: "Egg Chicken Roll",
//     recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
// },
// {
//     image: "https://geekrobocook.com/wp-content/uploads/2021/03/6.-Paneer-Tikka.jpg",
//     foodName: "Paneer Tikka",
//     recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
// },
// {
//     image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     foodName: "Noodles",
//     recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
// },
// {
//     image: "https://www.secondrecipe.com/wp-content/uploads/2016/04/channa-bhatura-540x720.jpg",
//     foodName: "channa Bhatura",
//     recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
// },
// {
//     image: "https://e1.pxfuel.com/desktop-wallpaper/482/834/desktop-wallpaper-gulab-jamun-in-india-gulab-jamun.jpg",
//     foodName: "Gulab Jamun",
//     recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
// },

// ];

Display();
function Display() {
    fetch("http://localhost:8080/rec", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((udata) => {
        const Food= document.getElementById("food");

        udata.map((el)=>{
            const div=document.createElement("div");
            const img=document.createElement("img");
            img.src=el.image;  //This image is which we declare in the data
            const food_Name = document.createElement("h3");
            food_Name.innerText = el.foodName;  //This title is which we declare in the data
            const Recipe = document.createElement("p");
            Recipe.innerText = "";
        
            const button1 =document.createElement("button");
            button1.classList.add("view_button");
            const button2 =document.createElement("button");
            button2.classList.add("remove_button");
        
            button1.innerText = "View Recipe";
            button2.innerText = "Hide Recipe";
        
            button1.addEventListener("click",()=>{
                Recipe.innerText=el.recipe;
            }),
        
            button2.addEventListener("click",() =>{
                Recipe.innerText="";
            });
            div.append(img, food_Name, Recipe,button1,button2);
            Food.append(div);
        });
    })
}





