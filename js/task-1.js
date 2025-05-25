const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

const listCategory = document.querySelectorAll(".item");

listCategory.forEach((item) => {
    const categoryName = item.querySelector("h2");
    const name = categoryName.textContent;
    const number = item.querySelector("ul").children.length;

    console.log(`Category: ${name}`);
    console.log(`Elements: ${number}`);
});


