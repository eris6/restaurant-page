function generateMenu(){
    const content = document.querySelector("#content");
    const contentHeader = document.createElement("div");
    contentHeader.classList.add("content-header");
    content.appendChild(contentHeader);

    const menu = document.createElement("div")
    menu.textContent = "Menu";
    contentHeader.appendChild(menu);

    let itemArray = [];
    itemArray.push({
        itemHead: "Baleadas Bowl",
        itemText: "A scrumptious rice bowl you can customize with plantains, pico de gallo, pickled red onion corn salsa, chips, cheese, cilantro, lettuce, or pickled jalapenos.",
        itemPrice: "$7.99"
    });

    itemArray.push({
        itemHead: "Honey Tea",
        itemText: "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
        itemPrice: "$1.99"
    })

    itemArray.push({
        itemHead: "Pancakes",
        itemText: "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
        itemPrice: "$5.99"
    })

    itemArray.push({
        itemHead: "Ham",
        itemText: "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
        itemPrice: "$5.99"
    })


    for (let i = 0; i < itemArray.length; i++){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        content.appendChild(menuItem);

        const itemHead = document.createElement("div");
        itemHead.textContent = itemArray[i].itemHead;
        itemHead.classList.add("menu-item-head");
        menuItem.appendChild(itemHead);
        
        const itemText = document.createElement("div");
        itemText.textContent = itemArray[i].itemText;
        menuItem.appendChild(itemText);

        const itemPrice = document.createElement("div");
        itemPrice.textContent = itemArray[i].itemPrice;
        itemPrice.classList.add("menu-item-head");
        menuItem.appendChild(itemPrice);
        
    }
}

export {generateMenu};