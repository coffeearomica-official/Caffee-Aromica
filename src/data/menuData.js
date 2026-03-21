// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
//  Caffee Aromica â€” Single Source of Truth for Menu Data
//  Used by: MenuContext, MenuPage, OrderModal
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

let _id = 1;
const id = () => _id++;

export const menuData = {
    "Hot Beverages": [
        { id: id(), name: "Cappuccino Caramel", price: 129, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Cafe Latte Vanilla", price: 129, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Cafe Mocha", price: 119, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Tiramisu Cappuccino", price: 129, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Irish Cappuccino", price: 129, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Hazelnut Cappuccino", price: 129, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Vanilla Cappuccino", price: 129, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Cafe Latte", price: 99, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Cappuccino", price: 99, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Americano", price: 79, image: "/cup.png", category: "Hot Beverages" },
        { id: id(), name: "Double Espresso", price: 79, image: "/cup.png", category: "Hot Beverages" },
    ],
    "Hot Chocolate": [
        { id: id(), name: "Brownie Hot Chocolate", price: 149, image: "/cup.png", category: "Hot Chocolate" },
        { id: id(), name: "Hot Chocolate", price: 119, image: "/cup.png", category: "Hot Chocolate" },
        { id: id(), name: "Nutella Hot Chocolate", price: 149, image: "/cup.png", category: "Hot Chocolate" },
    ],
    "Ice Tea": [
        { id: id(), name: "Peach Ice Tea", price: 99, image: "/cup.png", category: "Ice Tea" },
        { id: id(), name: "Lemon Ice Tea", price: 99, image: "/cup.png", category: "Ice Tea" },
        { id: id(), name: "Caranberry Ice Tea", price: 99, image: "/cup.png", category: "Ice Tea" },
    ],
    "Iced Coffee": [
        { id: id(), name: "Iced Americano", price: 129, image: "/cup.png", category: "Iced Coffee" },
        { id: id(), name: "Ice Latte", price: 139, image: "/cup.png", category: "Iced Coffee" },
        { id: id(), name: "Ice Mocha", price: 139, image: "/cup.png", category: "Iced Coffee" },
        { id: id(), name: "Veithamies Ice Latte", price: 159, image: "/cup.png", category: "Iced Coffee" },
    ],
    "Cold Beverages": [
        { id: id(), name: "Indian Frappe", price: 129, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Caffe Frappe", price: 139, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Chocolate Chips Frappe", price: 149, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Double Chocolate Frappe", price: 149, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Cookie Crumble Frappe", price: 179, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Java Chips Frappe", price: 199, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Caramel Java Chips Frappe", price: 219, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Biscoff Frappe", price: 219, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Nutella Frappe", price: 219, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "Chocolate Brownie Frappe", price: 199, image: "/cup.png", category: "Cold Beverages" },
        { id: id(), name: "KitKat Frappe", price: 219, image: "/cup.png", category: "Cold Beverages" },
    ],
    "Mojito": [
        { id: id(), name: "Strawberry Lemonade Mojito", price: 129, image: "/cup.png", category: "Mojito" },
        { id: id(), name: "Blue Lagoon Mojito", price: 129, image: "/cup.png", category: "Mojito" },
        { id: id(), name: "Mint Mojito", price: 129, image: "/cup.png", category: "Mojito" },
        { id: id(), name: "Blue Berry Mojito", price: 129, image: "/cup.png", category: "Mojito" },
        { id: id(), name: "Green Apple Mojito", price: 129, image: "/cup.png", category: "Mojito" },
        { id: id(), name: "Chilli Guava Mojito", price: 139, image: "/cup.png", category: "Mojito" },
        { id: id(), name: "Classic Mojito", price: 99, image: "/cup.png", category: "Mojito" },
        { id: id(), name: "Cranberry Mojito", price: 129, image: "/cup.png", category: "Mojito" },
    ],
    "Shakes": [
        { id: id(), name: "Belgium Chocolate Shake", price: 139, image: "/cup.png", category: "Shakes" },
        { id: id(), name: "Chocolate Eclair Shake", price: 139, image: "/cup.png", category: "Shakes" },
        { id: id(), name: "Blueberry Cheesecake Shake", price: 139, image: "/cup.png", category: "Shakes" },
        { id: id(), name: "Strawberry Shake", price: 139, image: "/cup.png", category: "Shakes" },
        { id: id(), name: "Very Berry Shake", price: 139, image: "/cup.png", category: "Shakes" },
        { id: id(), name: "Mango Shake", price: 129, image: "/cup.png", category: "Shakes" },
        { id: id(), name: "Oreo Shake", price: 139, image: "/cup.png", category: "Shakes" },
        { id: id(), name: "Brownie Shake", price: 159, image: "/cup.png", category: "Shakes" },
    ],
    "Signature Beverages": [
        { id: id(), name: "Biscoff Frappe", price: 219, image: "/cup.png", category: "Signature Beverages" },
        { id: id(), name: "Chocolate Brownie frappe", price: 199, image: "/cup.png", category: "Signature Beverages" },
        { id: id(), name: "Vietnamese Iced Latte", price: 159, image: "/cup.png", category: "Signature Beverages" },
        { id: id(), name: "Brownie Hot Chocolate", price: 149, image: "/cup.png", category: "Signature Beverages" },
        { id: id(), name: "Spanish Latte", price: 139, image: "/cup.png", category: "Signature Beverages" },
        { id: id(), name: "Strawberry Lemonade Mojito", price: 129, image: "/cup.png", category: "Signature Beverages" }
    ],
};

/** Flat array of all menu items */
export const allMenuItems = Object.values(menuData).flat();

/** Category names */
export const menuCategories = Object.keys(menuData);



