const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length} `);



for (let category of allCategories) {
   console.log('Category:',category.querySelector('h2').textContent)
   console.log('Elements:',category.querySelectorAll("li").length)
}