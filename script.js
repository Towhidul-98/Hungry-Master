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
    console.log(name.strCategory)
}