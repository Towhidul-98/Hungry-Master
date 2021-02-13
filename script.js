function clickDiv(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then( Response => Response.json() )
    .then( data => displayItems(data))
}

clickDiv();

function displayItems(meals){
    const itemsDiv= document.getElementById("displayZone");
    const categoryArray = meals.categories;
    categoryArray.forEach( mealItem => {
        //console.log(23)
        const itemDiv = document.createElement('div');
        itemDiv.className= 'item';
        itemDiv.innerText = mealItem.strCategory;
        itemsDiv.appendChild(itemDiv)
    });
    // for (let i = 0; i < meals.categories.length; i++) {
    //     const mealItem = meals.categories[i].strCategory;
    //     const itemDiv = document.createElement('div');
    //     itemDiv.className= 'item';
    //     itemDiv.innerText = mealItem;
    //     itemsDiv.appendChild(itemDiv)
    // }
}