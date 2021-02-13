function mealList(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then( Response => Response.json() )
    .then( data => displayItems(data))
}
mealList();
function displayItems(meals){
    const itemsDiv= document.getElementById("displayZone");
    const categoryArray = meals.categories;
    categoryArray.forEach( mealItem => {
        const itemDiv = document.createElement('div');
        itemDiv.className= 'item';
        
        const elements = `
            <img src="${mealItem.strCategoryThumb}" class="img-property">
            <p>${mealItem.strCategory}</p>
        `
        
        itemDiv.innerHTML = elements;
        itemDiv.onclick= () =>displayMealDetail(mealItem);
        itemsDiv.appendChild(itemDiv);

    });
}

const displayMealDetail = name => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${name.strCategory}`
    fetch(url)
    .then( res => res.json())
    .then( data => meals(data))
   
}

const meals = name => {
    const mealArray = name.meals;
    const categoryBaseMeal=document.getElementById("categoryBaseMeal");
    const displayZone=document.getElementById("displayZone");
    displayZone.style.display="none";
    mealArray.forEach(element => {
        console.log(element.strMeal);
        const meal = document.createElement('div');
        meal.className= 'item';
        const displayMeal = `
             <img class="img-property" src="${element.strMealThumb}">
             <h3>${element.strMeal}</h3>
        `
        meal.innerHTML=displayMeal;
        categoryBaseMeal.appendChild(meal)
    });
}