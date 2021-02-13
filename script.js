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
    if (mealArray== null){
        alert("Your Searched Item Is Not Found")
    }
    const categoryBaseMeal=document.getElementById("categoryBaseMeal");
    const displayZone=document.getElementById("displayZone");
    displayZone.style.display="none";
    mealArray.forEach(element => {
        const meal = document.createElement('div');
        meal.className= 'item';
        const displayMeal = `
             <img class="img-property" src="${element.strMealThumb}">
             <h3>${element.strMeal}</h3>
        `
        meal.innerHTML=displayMeal;
        meal.onclick = () => ingredient(element.idMeal)
        categoryBaseMeal.appendChild(meal)
    });
}

function ingredient( id ){
    const url1 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url1)
    .then (res=> res.json())
    .then(data => ingredientDisplay(data.meals[0]))
}

function ingredientDisplay(data){
    const div = document.getElementById("ingredient");
    const element = `
        <img class="img-property" src="${data.strMealThumb}">
        <h2>${data.strMeal}</h2>
        <h3>Ingredients</h3>
    `
    const ul =  document.createElement("ul")
    for (let i = 1; i <= 20; i++) {
        const li = document.createElement('li')
        const item = "strIngredient"+i;
        console.log(data[item])
        if(data[item] == ''){
            break
        }else{
            li.innerText = data[item];
            ul.appendChild(li)
        }  
    }
    div.innerHTML = element;
    div.appendChild(ul)
}

function randomInputCalls(){
    const input = document.getElementById("inputField");
    const inputValue = input.value;
    const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url2)
    .then( res => res.json())
    .then( data => meals(data))
    
}