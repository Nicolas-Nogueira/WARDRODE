
const items = [
    {
        "name": "iPhone 17 Pro",
        "price": 1099.00,
        "description": "The all-new iPhone 17 Pro. Any more pro and it would need an agent.",
        "productCategory": "smartphone"
    },
    {
        "name": "Samsung Galaxy S25 Ultra",
        "price": 1299.99,
        "description": "The all-new Samsung Galaxy S25 Ultra. Next-level power, next-level play.",
        "productCategory": "smartphone"
    },
    {
        "name": "Samsung Galaxy Z Fold7",
        "price": 1999.99,
        "description": "Experience the all-new Fold. The thinnest, lightest Galaxy Z Fold yet.",
        "productCategory": "smartphone"
    },
    {
        "name": "Google Pixel 10 Pro",
        "price": 999.00,
        "description": "Meet the new Pixel 10 Pro. Next-level everything.",
        "productCategory": "smartphone"
    },
    {
        "name": "Google Pixel 10 Pro Fold",
        "price": 1799.00,
        "description": "Meet the new Pixel 10 Pro Fold. Unfold Extraordinary."
    }
];

const createItemCard = ({name, price, description}) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const itemSection1 = document.createElement("div");
    itemSection1.classList.add("item-section");
    item.appendChild(itemSection1);

    const itemName = document.createElement("h2");
    itemName.classList.add("item-name");
    itemName.textContent = name;
    itemSection1.appendChild(itemName);

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = `$${price}`;
    itemSection1.appendChild(itemPrice);

    const itemSection2 = document.createElement("div");
    itemSection2.classList.add("item-section");
    item.appendChild(itemSection2);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-description");
    itemDesc.textContent = description;
    itemSection2.appendChild(itemDesc);

    return item;
}

const createItems = () => {
    const itemContainer1 = document.querySelector("#top-items");
    const itemsMapped1 = items.map(item => createItemCard(item));
    itemsMapped1.forEach(item => itemContainer1.appendChild(item));

    const itemContainer2 = document.querySelector("#bottom-items");
    const itemsMapped2 = items.map(item => createItemCard(item));
    itemsMapped2.forEach(item => itemContainer2.appendChild(item));

    const itemContainer3 = document.querySelector("#accessory-items");
    const itemsMapped3 = items.map(item => createItemCard(item));
    itemsMapped3.forEach(item => itemContainer3.appendChild(item));
}

export default createItems;