/* =====================================================
   BBD CAMPUS FOOD - COMPLETE MENU SCRIPT
   Includes: menus, food images, categories, cart,
   order policy, customer details and order confirmation.
   ===================================================== */


/* -------------------- FOOD IMAGES -------------------- */

const foodImages = {

    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",

    fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",

    pizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",

    pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",

    coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",

    tea: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",

    sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",

    wrap: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",

    dosa: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80",

    dessert: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80"

};


/* -------------------- MENU DATA -------------------- */

const menuData = {

    /* ==================== NESCAFE ==================== */

    nescafe: {

        name: "Nescafé",

        icon: "☕",

        description:
            "Coffee, refreshing drinks, snacks and quick bites.",

        categories: {

            "Hot Favourites": [

                ["Nescafé Regular", 15, "☕"],

                ["Hot Chocolate", 30, "🍫"],

                ["NESTEA Cappuccino", 30, "☕"],

                ["NESTEA Lemon Tea", 10, "🍋"],

                ["NESTEA Tea", 15, "🍵"],

                ["Hot Cup Tomato Soup", 15, "🥣"]

            ],

            "Cold Refreshers": [

                ["Nescafé Ice", 20, "🧊"],

                ["Iced Tea Lemon", 25, "🍋"],

                ["Cold Chocolate", 30, "🥤"]

            ],

            "Little Bites": [

                ["Noodles", 25, "🍜"],

                ["Oats Noodles", 35, "🍜"],

                ["Veg Atta Noodles", 40, "🍜"],

                ["Pasta", 25, "🍝"],

                ["Maggi Cup Noodles", null, "🍜"]

            ]

        }

    },


    /* ==================== MCCAIN ==================== */

    mccain: {

        name: "McCain",

        icon: "🍟",

        description:
            "Burgers, fries, wraps, sandwiches, snacks and more.",

        categories: {

            "Hot Beverages": [

                ["Cappuccino", 30, "☕"],

                ["Cafe Latte", 30, "☕"],

                ["Black Coffee", 30, "☕"],

                ["Cardamom Tea", 20, "🍵"],

                ["Hot Lemon Tea", 20, "🍋"]

            ],

            "Cold Beverages": [

                ["Iced Tea - Lemon", 50, "🧊"],

                ["Frappe Cold Coffee Classic", 55, "🥤"],

                ["Cold Coffee Hazelnut", 75, "🥤"],

                ["Cold Coffee Caramel", 75, "🥤"],

                ["Cold Coffee Irish", 75, "🥤"]

            ],

            "Burgers": [

                ["Herb Chilli Aloo", 60, "🍔"],

                ["Super Veggie", 70, "🍔"],

                ["Tandoori Paneer", 100, "🍔"]

            ],

            "Double Decker Burgers": [

                ["Potato Krunch King", 80, "🍔"],

                ["Veggie Blast", 90, "🍔"],

                ["Zingy Paneer Delight", 140, "🍔"]

            ],

            "Wraps": [

                ["Potato Crunch", 80, "🌯"],

                ["Veggie Cheese", 90, "🌯"],

                ["Harabhara Kebab", 120, "🌯"],

                ["Spiced Paneer", 120, "🌯"]

            ],

            "French Fries": [

                ["Classic Fries", 60, "🍟"],

                ["Cheesy Fries", 90, "🍟"],

                ["Super Crispy Fries", 90, "🍟"],

                ["Creamy Peri Peri Fries", 100, "🍟"],

                ["Cheesy Chipotle Bites", 130, "🍟"]

            ],

            "Other McCain Specials": [

                ["Mini Pizza Cheese Triangles", 75, "🍕"],

                ["Onion Rings", 75, "🧅"],

                ["Smiles", 60, "😊"],

                ["Spiced Potato Cheese Shots", 90, "🥔"],

                ["Veggie Fingers", 60, "🥔"],

                ["Veggie Nuggets", 70, "🥔"],

                ["Chilli Garlic Potato Pops", 80, "🥔"],

                ["Spiced Savoury Wedges", 80, "🥔"],

                ["Masala Paneer Cutlets", 120, "🥔"]

            ],

            "Must Try Delights": [

                ["Spring Rolls", 90, "🥟"],

                ["Harabhara Kebab", 80, "🥙"],

                ["Mini Aloo Punjabi Samosa", 65, "🥟"],

                ["Vada Pav", 40, "🥪"]

            ],

            "Hot Dogs": [

                ["Veggie Supreme", 80, "🌭"],

                ["Cheese Magic", 100, "🌭"],

                ["Paneer Royale", 120, "🌭"]

            ],

            "Pasta": [

                ["Masala Penne", 70, "🍝"],

                ["Tomato Twist", 70, "🍝"],

                ["Cheese Macaroni", 70, "🍝"],

                ["Mushroom Penne", 70, "🍝"]

            ],

            "Sweet Corn": [

                ["Masala", 50, "🌽"],

                ["Peri Peri", 60, "🌽"],

                ["Chipotle", 70, "🌽"],

                ["Tandoori Butter", 70, "🌽"],

                ["Korean Butter", 70, "🌽"],

                ["Cheese Butter", 80, "🌽"]

            ],

            "Desserts": [

                ["Doughnuts", 80, "🍩"],

                ["Chocolava", 80, "🍫"],

                ["Chocolates (Nestle/Cadbury)", null, "🍫"]

            ],

            "Sandwich": [

                ["Veggie", 80, "🥪"],

                ["Veggie Cheese", 100, "🥪"],

                ["Classic Cheese and Corn", 120, "🥪"],

                ["Smoky Tandoor Paneer", 140, "🥪"],

                ["Paneer Cheese", 160, "🥪"],

                ["Royal Paneer Cheese Corn", 170, "🥪"],

                ["Pen Pen Twist: Veggie/Cheese/Paneer", 100, "🥪"],

                ["Chipotle Fusion: Veggie/Cheese/Paneer", 100, "🥪"]

            ],

            "Maggi": [

                ["Masala Maggi", 30, "🍜"],

                ["Butter Maggi", 40, "🍜"],

                ["Vegetable Maggi", 40, "🍜"],

                ["Vegetable Fry Maggi", 50, "🍜"],

                ["Peri Peri Maggi", 50, "🍜"],

                ["Peri Peri Cheese Maggi", 60, "🍜"],

                ["Veg Corn Maggi", 60, "🍜"],

                ["Cheese Maggi", 60, "🍜"],

                ["Tandoori Maggi", 60, "🍜"],

                ["Spicy Garlic Maggi", 60, "🍜"],

                ["Chipotle Maggi", 60, "🍜"],

                ["Veg Corn Fry Maggi", 70, "🍜"],

                ["Peri Peri Paneer Maggi", 80, "🍜"],

                ["Veg Corn Paneer Fry", 90, "🍜"],

                ["Frieggi", 100, "🍜"]

            ],

            "Spicy Korean Twist": [

                ["Korean Masala Maggi", 45, "🍜"],

                ["Korean Vegetable Maggi", 55, "🍜"],

                ["Korean Fries", 80, "🍟"],

                ["Korean Burgers (Veggie/Paneer)", 90, "🍔"],

                ["Korean Sandwich", 100, "🥪"],

                ["Korean Chilli Garlic Potato Pops", 110, "🥔"],

                ["Korean Wrap (Veggie/Harabhara Kebab/Paneer)", 110, "🌯"],

                ["Korean Hot Dog (Veggie/Paneer)", 120, "🌭"]

            ],

            "Combos": [

                ["Burger + Chilli Garlic Pops + Cold Ice Tea", 109, "🍔"],

                ["Burger + Chilli Garlic Pops + Cold Ice Tea", 119, "🍔"],

                ["Sandwich + Chilli Garlic Pops + Cold Ice Tea", 129, "🥪"]

            ]

        }

    },


    /* ==================== KE7 ==================== */

    ke7: {

        name: "KE7",

        icon: "🍴",

        description:
            "Indian, Chinese, snacks, beverages and everyday favourites.",

        categories: {

            "Hot Beverages & Snacks": [

                ["Kulhad Tea", 15, "🍵"],

                ["Expresso Coffee", 25, "☕"],

                ["Samosa", 12, "🥟"],

                ["Chhole Samosa", 60, "🥟"],

                ["Chhole with Pickle & Onion", 20, "🍛"],

                ["Chhole Puri", 30, "🍛"],

                ["Aloo Paratha", 50, "🫓"],

                ["Green Chaat", 30, "🌿"],

                ["Kabab Paratha", 40, "🫓"],

                ["Paneer Roll", 40, "🌯"],

                ["Kabab Roll", 60, "🌯"],

                ["Egg Roll", 40, "🌯"],

                ["Omelette", 40, "🍳"]

            ],

            "Indian": [

                ["Plain Dosa", 50, "🥞"],

                ["Masala Dosa", 60, "🥞"],

                ["Paneer Dosa", 70, "🥞"],

                ["Onion Uttapam", 50, "🥞"],

                ["Tomato Uttapam", 60, "🥞"],

                ["Mix Uttapam", 70, "🥞"],

                ["Paneer Uttapam", 80, "🥞"],

                ["Schezwan Uttapam", 80, "🥞"],

                ["Idli Sambhar", 50, "🍛"],

                ["Sambhar Vada", 50, "🍛"]

            ],

            "Chinese": [

                ["Masala Maggi", 35, "🍜"],

                ["Cheese Maggi", 45, "🍜"],

                ["Veg Maggi", 50, "🍜"],

                ["French Fries", 45, "🍟"],

                ["Spring Roll", 50, "🥟"],

                ["Fried Rice", 50, "🍚"],

                ["Paneer Fried Rice", 60, "🍚"],

                ["Chilli Garlic Fried Rice", 60, "🍚"],

                ["Honey Chilli Potato", 70, "🥔"],

                ["Chilli Potato", 50, "🥔"],

                ["White Sauce Pasta", 70, "🍝"],

                ["Red Sauce Pasta", 70, "🍝"],

                ["Pav Bhaji with Butter", 80, "🍛"]

            ],

            "Juice & Shakes": [

                ["Cold Coffee", 50, "🥤"],

                ["Cold Coffee with Ice Cream", 60, "🥤"],

                ["Chocolate Shake", 70, "🥤"],

                ["Oreo Shake", 80, "🥤"],

                ["Vanilla Shake", 70, "🥤"]

            ]

        }

    },


    /* ==================== DOMINO'S ==================== */

    dominos: {

        name: "Domino's",

        icon: "🍕",

        description:
            "Pizzas, sides, pasta, desserts and beverages.",

        categories: {

            "Veg Pizzas": [

                ["Margherita", 149, "🍕"],

                ["Achari Do Pyaza", 149, "🍕"],

                ["Corn & Cheese Paratha Pizza", 199, "🍕"],

                ["Moroccan Spice Pasta Pizza", 229, "🍕"],

                ["Double Cheese Margherita", 279, "🍕"],

                ["Fresh Veggie", 229, "🍕"],

                ["Cheese N Corn", 229, "🍕"],

                ["Paneer Paratha Pizza", 229, "🍕"],

                ["Peppy Paneer", 279, "🍕"],

                ["Veggie Paradise", 279, "🍕"],

                ["Paneer Makhani", 319, "🍕"],

                ["Deluxe Veggie", 319, "🍕"]

            ],

            "Non-Veg Pizzas": [

                ["Chicken Sausage", 229, "🍕"],

                ["Keema Do Pyaza", 269, "🍕"],

                ["Pepper Barbecue Chicken", 269, "🍕"],

                ["Keema Paratha Pizza", 299, "🍕"],

                ["Spiced Double Chicken", 319, "🍕"],

                ["Golden Delight", 369, "🍕"],

                ["Chicken Dominator", 369, "🍕"],

                ["Chicken Maximus", 409, "🍕"]

            ],

            "Sides": [

                ["Garlic Breadsticks", 109, "🥖"],

                ["Stuffed Garlic Bread", 159, "🥖"],

                ["Zingy Parcel", 45, "🥟"],

                ["Taco Mexicana", 79, "🌮"],

                ["Potato Cheese Shots", 79, "🥔"],

                ["Crinkle Fries", 69, "🍟"],

                ["Crunchy Strips", 69, "🍗"]

            ],

            "Pasta": [

                ["Creamy Tomato Pasta Veg", 139, "🍝"],

                ["Creamy Tomato Pasta Non-Veg", 149, "🍝"],

                ["Tikka Masala Pasta Veg", 139, "🍝"],

                ["Tikka Masala Pasta Non-Veg", 149, "🍝"],

                ["Cheesy Jalapeno Pasta Veg", 139, "🍝"],

                ["Cheesy Jalapeno Pasta Non-Veg", 149, "🍝"]

            ],

            "Desserts": [

                ["Red Velvet Lava Cake", 139, "🍰"],

                ["Choco Lava Cake", 109, "🍫"],

                ["Butterscotch Mousse Cake", 109, "🍰"],

                ["Brownie Fantasy", 79, "🍫"]

            ],

            "Beverages": [

                ["Thirsteez", 89, "🥤"],

                ["Pepsi / 7UP / Mirinda / Mountain Dew", 65, "🥤"]

            ],

            "Combos": [

                ["Meal For 1 Veg", 149, "🍕"],

                ["Meal For 1 Non-Veg", 229, "🍕"],

                ["Meal For 2 Veg", 299, "🍕"],

                ["Meal For 2 Non-Veg", 449, "🍕"],

                ["Meal For 4 Veg", 549, "🍕"],

                ["Meal For 4 Non-Veg", 749, "🍕"]

            ]

        }

    },


    /* ==================== VADA PAV KING ==================== */

    vadapavking: {

        name: "Vada Pav King",

        icon: "🌯",

        description:
            "Mumbai-style vada pav, cheesy bites, fries and refreshing drinks.",

        categories: {

            "Vada Pav": [

                ["Classic Vada Pav", 40, "🌯"],

                ["Cheese Vada Pav", 60, "🧀"],

                ["Schezwan Vada Pav", 55, "🌶️"],

                ["Double Vada Pav", 70, "🌯"]

            ],

            "Snacks": [

                ["Masala Fries", 70, "🍟"],

                ["Cheese Fries", 90, "🧀"],

                ["Veg Sandwich", 80, "🥪"],

                ["Paneer Roll", 100, "🌯"]

            ],

            "Drinks": [

                ["Masala Chaas", 40, "🥛"],

                ["Cold Coffee", 80, "☕"],

                ["Fresh Lime Soda", 60, "🥤"],

                ["Cold Drink", 40, "🥤"]

            ]

        }

    }

};


/* -------------------- OUTLET / ELEMENTS -------------------- */

const params =
    new URLSearchParams(
        window.location.search
    );

let selectedOutlet =
    params.get("outlet");


if (
    !selectedOutlet ||
    !menuData[selectedOutlet]
) {

    selectedOutlet = "nescafe";

}


const outlet =
    menuData[selectedOutlet];


const outletName =
    document.getElementById(
        "outletName"
    );


const outletDescription =
    document.getElementById(
        "outletDescription"
    );


const categories =
    document.getElementById(
        "categories"
    );


const menuGrid =
    document.getElementById(
        "menuGrid"
    );


if (outletName) {

    outletName.textContent =
        `${outlet.icon} ${outlet.name}`;

}


if (outletDescription) {

    outletDescription.textContent =
        outlet.description;

}


/* -------------------- HELPERS -------------------- */

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


function getFoodImage(
    name,
    category
) {

    const item =
        name.toLowerCase();

    const cat =
        category.toLowerCase();


    /* COFFEE */

    if (

        (
            item.includes("cappuccino") ||
            item.includes("latte") ||
            item.includes("coffee") ||
            item.includes("espresso") ||
            item.includes("expresso")
        )

        &&

        !item.includes("cold coffee")

    ) {

        return foodImages.coffee;

    }


    /* TEA */

    if (

        item.includes("tea") ||
        item.includes("chai") ||
        item.includes("kulhad")

    ) {

        return foodImages.tea;

    }


    /* BURGER */

    if (

        item.includes("burger") &&
        !cat.includes("combo")

    ) {

        return foodImages.burger;

    }


    /* FRIES */

    if (

        item.includes("fries") ||
        cat === "french fries"

    ) {

        return foodImages.fries;

    }


    /* PIZZA */

    if (

        item.includes("pizza") ||
        cat.includes("pizza")

    ) {

        return foodImages.pizza;

    }


    /* PASTA */

    if (

        item.includes("pasta") ||
        item.includes("macaroni") ||
        cat === "pasta"

    ) {

        return foodImages.pasta;

    }


    /* SANDWICH */

    if (

        item.includes("sandwich") ||
        cat === "sandwich"

    ) {

        return foodImages.sandwich;

    }


    /* WRAP */

    if (

        item.includes("wrap") ||
        cat === "wraps"

    ) {

        return foodImages.wrap;

    }


    /* DOSA */

    if (
        item.includes("dosa")
    ) {

        return foodImages.dosa;

    }


    /* DESSERT */

    if (

        cat === "desserts" &&

        (
            item.includes("doughnut") ||
            item.includes("chocolava") ||
            item.includes("lava cake") ||
            item.includes("brownie")
        )

    ) {

        return foodImages.dessert;

    }


    return null;

}


/* -------------------- CATEGORIES -------------------- */

function createCategories() {

    if (!categories) {

        return;

    }


    categories.innerHTML =
        "";


    Object.keys(
        outlet.categories
    )

    .forEach(
        (
            category,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "category-btn";


            button.type =
                "button";


            button.textContent =
                category;


            if (index === 0) {

                button.classList.add(
                    "active"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".category-btn"
                        )
                        .forEach(
                            btn => {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    showCategory(
                        category
                    );

                }
            );


            categories.appendChild(
                button
            );

        }
    );

}


/* -------------------- MENU DISPLAY -------------------- */

function showCategory(
    category
) {

    if (!menuGrid) {

        return;

    }


    menuGrid.innerHTML =
        "";


    const items =
        outlet.categories[category];


    if (!items) {

        menuGrid.innerHTML = `
            <p style="text-align:center;padding:30px;">
                Menu not available.
            </p>
        `;

        return;

    }


    items.forEach(
        item => {

            const name =
                item[0];


            const price =
                item[1];


            const emoji =
                item[2];


            const image =
                getFoodImage(
                    name,
                    category
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "food-card";


            const imageHTML =
                image
                    ? `
                        <div class="food-image">

                            <img
                                src="${image}"
                                alt="${escapeHTML(name)}"
                                loading="lazy"
                                referrerpolicy="no-referrer"
                            >

                        </div>
                    `
                    : "";


            card.innerHTML = `

                ${imageHTML}

                <div class="food-info">

                    <div class="food-category">
                        ${escapeHTML(category)}
                    </div>

                    <h3>
                        ${emoji}
                        ${escapeHTML(name)}
                    </h3>

                    <div class="food-bottom">

                        <div class="price">

                            ${
                                price === null
                                    ? "MRP"
                                    : "₹" + price
                            }

                        </div>

                        ${
                            price === null

                                ? ""

                                :

                                `
                                    <button
                                        class="add-btn"
                                        type="button"
                                    >
                                        + Add
                                    </button>
                                `
                        }

                    </div>

                </div>
            `;


            if (price !== null) {

                const addButton =
                    card.querySelector(
                        ".add-btn"
                    );


                if (addButton) {

                    addButton.addEventListener(
                        "click",
                        () => {

                            addToCart(
                                name,
                                price
                            );

                        }
                    );

                }

            }


            menuGrid.appendChild(
                card
            );

        }
    );

}


/* -------------------- CART -------------------- */

let cart = [];


function addToCart(
    name,
    price
) {

    const existing =
        cart.find(
            item =>
                item.name === name &&
                item.price === price
        );


    if (existing) {

        existing.quantity += 1;

    }

    else {

        cart.push({

            name:
                name,

            price:
                price,

            quantity:
                1

        });

    }


    updateCart();


    const cartPanel =
        document.getElementById(
            "cartPanel"
        );


    if (cartPanel) {

        cartPanel.classList.add(
            "show"
        );

    }

}


/* -------------------- UPDATE CART -------------------- */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartCount =
        document.getElementById(
            "cartCount"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (

        !cartItems ||
        !cartCount ||
        !cartTotal

    ) {

        return;

    }


    cartItems.innerHTML =
        "";


    let total =
        0;


    let count =
        0;


    cart.forEach(
        (
            item,
            index
        ) => {

            total +=
                item.price *
                item.quantity;


            count +=
                item.quantity;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "cart-item";


            div.innerHTML = `

                <div>

                    <strong>
                        ${escapeHTML(
                            item.name
                        )}
                    </strong>

                    <br>

                    ₹${item.price}
                    × ${item.quantity}

                </div>

                <button
                    class="remove-btn"
                    type="button"
                >
                    ✕
                </button>

            `;


            const removeButton =
                div.querySelector(
                    ".remove-btn"
                );


            if (removeButton) {

                removeButton.addEventListener(
                    "click",
                    () => {

                        removeItem(
                            index
                        );

                    }
                );

            }


            cartItems.appendChild(
                div
            );

        }
    );


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p style="
                text-align:center;
                color:#76645b;
                padding:10px;
            ">

                Your cart is empty 🛒

            </p>

        `;

    }


    cartCount.textContent =
        count;


    cartTotal.textContent =
        "₹" + total;

}


/* -------------------- REMOVE ITEM -------------------- */

function removeItem(
    index
) {

    cart.splice(
        index,
        1
    );


    updateCart();

}


/* -------------------- CART OPEN / CLOSE -------------------- */

function toggleCart() {

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );


    if (!cartPanel) {

        return;

    }


    cartPanel.classList.toggle(
        "show"
    );

}


/* -------------------- ORDER POLICY -------------------- */

function showOrderPolicy() {

    const oldModal =
        document.getElementById(
            "orderPolicyModal"
        );


    if (oldModal) {

        oldModal.remove();

    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "orderPolicyModal";


    modal.innerHTML = `

        <div
            class="order-policy-overlay"
            onclick="closeOrderPolicy()"
        >

            <div
                class="order-policy-box"
                onclick="event.stopPropagation()"
            >

                <button
                    class="order-policy-close"
                    type="button"
                    onclick="closeOrderPolicy()"
                    aria-label="Close"
                >
                    ✕
                </button>


                <div class="order-policy-icon">
                    🛒
                </div>


                <p class="order-policy-small-title">
                    BBD CAMPUS FOOD
                </p>


                <h2>
                    Order Policy
                </h2>


                <p class="order-policy-intro">

                    Please read the following
                    before placing your order
                    request.

                </p>


                <div class="order-policy-list">

                    <div class="policy-item">

                        <span>
                            01
                        </span>

                        <p>
                            Your order request
                            will be placed for
                            the selected outlet.
                        </p>

                    </div>


                    <div class="policy-item">

                        <span>
                            02
                        </span>

                        <p>
                            Payment is made
                            directly at the
                            selected outlet.
                        </p>

                    </div>


                    <div class="policy-item">

                        <span>
                            03
                        </span>

                        <p>
                            Food availability
                            may vary depending
                            on the outlet.
                        </p>

                    </div>


                    <div class="policy-item">

                        <span>
                            04
                        </span>

                        <p>
                            Once preparation
                            starts, cancellation
                            may not be possible.
                        </p>

                    </div>


                    <div class="policy-item">

                        <span>
                            05
                        </span>

                        <p>
                            Prices and
                            availability may be
                            changed by the outlet.
                        </p>

                    </div>


                    <div class="policy-item">

                        <span>
                            06
                        </span>

                        <p>
                            Preparation time
                            may vary depending
                            on the order and outlet.
                        </p>

                    </div>

                </div>


                <label class="policy-check">

                    <input
                        type="checkbox"
                        id="policyAgreement"
                    >

                    <span>

                        I have read and agree
                        to the Order Policy.

                    </span>

                </label>


                <div class="policy-actions">

                    <button
                        class="policy-back-btn"
                        type="button"
                        onclick="closeOrderPolicy()"
                    >
                        Go Back
                    </button>


                    <button
                        class="policy-confirm-btn"
                        type="button"
                        onclick="confirmOrder()"
                    >
                        Confirm &amp; Place Order →
                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    addOrderPolicyStyles();


    document.body.style.overflow =
        "hidden";

}


/* -------------------- CLOSE POLICY -------------------- */

function closeOrderPolicy() {

    const modal =
        document.getElementById(
            "orderPolicyModal"
        );


    if (modal) {

        modal.remove();

    }


    document.body.style.overflow =
        "";

}


/* -------------------- CUSTOMER DETAILS -------------------- */

function showCustomerDetails() {

    const oldModal =
        document.getElementById(
            "customerDetailsModal"
        );


    if (oldModal) {

        oldModal.remove();

    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "customerDetailsModal";


    modal.innerHTML = `

        <div
            class="customer-details-overlay"
            onclick="closeCustomerDetails()"
        >

            <div
                class="customer-details-box"
                onclick="event.stopPropagation()"
            >

                <button
                    class="customer-close-btn"
                    type="button"
                    onclick="closeCustomerDetails()"
                >
                    ✕
                </button>


                <div class="customer-icon">
                    👤
                </div>


                <p class="customer-small-title">
                    BBD CAMPUS FOOD
                </p>


                <h2>
                    Your Details
                </h2>


                <p class="customer-intro">

                    Enter your details so the outlet
                    can identify your order.

                </p>


                <div class="customer-form-group">

                    <label for="customerName">
                        Full Name
                    </label>

                    <input
                        type="text"
                        id="customerName"
                        placeholder="Enter your name"
                        autocomplete="name"
                    >

                </div>


                <div class="customer-form-group">

                    <label for="customerPhone">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        id="customerPhone"
                        placeholder="Enter 10-digit phone number"
                        maxlength="10"
                        inputmode="numeric"
                        autocomplete="tel"
                    >

                </div>


                <div class="customer-form-group">

                    <label for="customerCollege">
                        College
                    </label>

                    <input
                        type="text"
                        id="customerCollege"
                        value="BBD University"
                        autocomplete="organization"
                    >

                </div>


                <div class="customer-actions">

                    <button
                        class="customer-back-btn"
                        type="button"
                        onclick="closeCustomerDetails()"
                    >
                        Go Back
                    </button>


                    <button
                        class="customer-continue-btn"
                        type="button"
                        onclick="continueToOrderPolicy()"
                    >
                        Continue →
                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    addCustomerDetailsStyles();


    document.body.style.overflow =
        "hidden";


    setTimeout(
        () => {

            const nameInput =
                document.getElementById(
                    "customerName"
                );


            if (nameInput) {

                nameInput.focus();

            }

        },
        100
    );

}


/* -------------------- CLOSE CUSTOMER DETAILS -------------------- */

function closeCustomerDetails() {

    const modal =
        document.getElementById(
            "customerDetailsModal"
        );


    if (modal) {

        modal.remove();

    }


    document.body.style.overflow =
        "";

}


/* -------------------- CONTINUE TO POLICY -------------------- */

function continueToOrderPolicy() {

    const nameInput =
        document.getElementById(
            "customerName"
        );


    const phoneInput =
        document.getElementById(
            "customerPhone"
        );


    const collegeInput =
        document.getElementById(
            "customerCollege"
        );


    if (

        !nameInput ||
        !phoneInput ||
        !collegeInput

    ) {

        alert(
            "Please fill in your details."
        );

        return;

    }


    const name =
        nameInput.value.trim();


    const phone =
        phoneInput.value.trim();


    const college =
        collegeInput.value.trim();


    /* NAME VALIDATION */

    if (!name) {

        alert(
            "Please enter your name. 😊"
        );

        nameInput.focus();

        return;

    }


    /* PHONE VALIDATION */

    if (
        !/^[0-9]{10}$/.test(phone)
    ) {

        alert(
            "Please enter a valid 10-digit phone number. 📱"
        );

        phoneInput.focus();

        return;

    }


    /* COLLEGE VALIDATION */

    if (!college) {

        alert(
            "Please enter your college name."
        );

        collegeInput.focus();

        return;

    }


    /* SAVE CUSTOMER DETAILS */

    window.orderCustomer = {

        name:
            name,

        phone:
            phone,

        college:
            college

    };


    /* CLOSE CUSTOMER FORM */

    closeCustomerDetails();


    /* OPEN ORDER POLICY */

    showOrderPolicy();

}


/* -------------------- PLACE ORDER -------------------- */

function placeOrder() {

    if (cart.length === 0) {

        alert(
            "Please add something to your cart first! 🛒"
        );

        return;

    }


    showCustomerDetails();

}


/* -------------------- CONFIRM ORDER -------------------- */

async function confirmOrder() {

    const checkbox = document.getElementById("policyAgreement");

    if (!checkbox || !checkbox.checked) {
        alert("Please read and accept the Order Policy before placing your order. 😊");
        return;
    }

    if (cart.length === 0) {
        closeOrderPolicy();

        alert("Your cart is empty! 🛒");
        return;
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const itemCount = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const customer = window.orderCustomer;

    try {

        const response = await fetch(
            "http://localhost:5000/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    customer: customer,

                    outlet: outlet.name,

                    outletKey: selectedOutlet,

                    items: cart,

                    total: total,

                    estimatedTime: "15–20 minutes"

                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Failed to place order."
            );
        }

        closeOrderPolicy();

        const orderId = data.order.orderId;

        cart = [];

        updateCart();

        // Automatically open Track Order page
        window.location.href =
            `track-order.html?orderId=${encodeURIComponent(orderId)}`;

    }

    catch (error) {

        console.error("Order error:", error);

        alert(
            "❌ Order could not be placed.\n\n" +
            "Please make sure the backend server is running."
        );

    }

}
/* -------------------- CUSTOMER DETAILS STYLES -------------------- */

function addCustomerDetailsStyles() {

    if (
        document.getElementById(
            "customerDetailsStyles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "customerDetailsStyles";


    style.textContent = `

        .customer-details-overlay {

            position: fixed;

            inset: 0;

            z-index: 99999;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                rgba(28, 16, 12, 0.76);

            backdrop-filter:
                blur(9px);

            animation:
                customerFadeIn .2s ease;

        }


        .customer-details-box {

            position: relative;

            width:
                min(500px, 100%);

            background:
                linear-gradient(
                    145deg,
                    #fffaf5,
                    #fff4eb
                );

            border:
                1px solid
                rgba(143, 47, 35, .10);

            border-radius:
                26px;

            padding:
                32px;

            box-shadow:
                0 30px 80px
                rgba(0, 0, 0, .30);

            animation:
                customerPop .25s ease;

        }


        .customer-close-btn {

            position: absolute;

            top:
                17px;

            right:
                17px;

            width:
                38px;

            height:
                38px;

            border:
                none;

            border-radius:
                50%;

            background:
                #f1e2d7;

            color:
                #5b241d;

            font-size:
                17px;

            cursor:
                pointer;

        }


        .customer-icon {

            width:
                60px;

            height:
                60px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            border-radius:
                18px;

            background:
                #f7dfcf;

            font-size:
                30px;

            margin-bottom:
                14px;

        }


        .customer-small-title {

            margin:
                0 0 5px;

            font-size:
                11px;

            font-weight:
                800;

            letter-spacing:
                2px;

            text-transform:
                uppercase;

            color:
                #d45b2c;

        }


        .customer-details-box h2 {

            margin:
                0 0 8px;

            color:
                #5b241d;

            font-size:
                32px;

            line-height:
                1.1;

        }


        .customer-intro {

            margin:
                0 0 24px;

            color:
                #76645b;

            line-height:
                1.55;

            font-size:
                14px;

        }


        .customer-form-group {

            margin-bottom:
                17px;

        }


        .customer-form-group label {

            display:
                block;

            margin-bottom:
                7px;

            color:
                #4d403a;

            font-size:
                13px;

            font-weight:
                800;

        }


        .customer-form-group input {

            width:
                100%;

            box-sizing:
                border-box;

            padding:
                14px 15px;

            border:
                1px solid
                #dfcfc4;

            border-radius:
                13px;

            background:
                #fff;

            color:
                #3f322c;

            font-size:
                14px;

            outline:
                none;

            transition:
                .2s ease;

        }


        .customer-form-group input:focus {

            border-color:
                #a14a3b;

            box-shadow:
                0 0 0 3px
                rgba(143, 47, 35, .10);

        }


        .customer-actions {

            display:
                flex;

            gap:
                10px;

            margin-top:
                24px;

        }


        .customer-back-btn,
        .customer-continue-btn {

            flex:
                1;

            border:
                none;

            border-radius:
                14px;

            padding:
                14px 16px;

            font-weight:
                800;

            cursor:
                pointer;

            font-size:
                13px;

            transition:
                .2s ease;

        }


        .customer-back-btn {

            background:
                #eaded6;

            color:
                #5b241d;

        }


        .customer-continue-btn {

            background:
                #8f2f23;

            color:
                #fff;

            box-shadow:
                0 8px 20px
                rgba(143, 47, 35, .22);

        }


        .customer-back-btn:hover,
        .customer-continue-btn:hover {

            transform:
                translateY(-2px);

        }


        .customer-continue-btn:hover {

            box-shadow:
                0 12px 25px
                rgba(143, 47, 35, .28);

        }


        @keyframes customerFadeIn {

            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }

        }


        @keyframes customerPop {

            from {

                opacity:
                    0;

                transform:
                    translateY(16px)
                    scale(.97);

            }

            to {

                opacity:
                    1;

                transform:
                    translateY(0)
                    scale(1);

            }

        }


        @media (max-width: 560px) {

            .customer-details-box {

                padding:
                    24px 18px;

                border-radius:
                    21px;

            }


            .customer-details-box h2 {

                font-size:
                    27px;

            }


            .customer-actions {

                flex-direction:
                    column-reverse;

            }


            .customer-continue-btn,
            .customer-back-btn {

                width:
                    100%;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* -------------------- POLICY STYLES -------------------- */

function addOrderPolicyStyles() {

    if (
        document.getElementById(
            "orderPolicyStyles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "orderPolicyStyles";


    style.textContent = `

        .order-policy-overlay {

            position: fixed;

            inset: 0;

            z-index: 99999;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                rgba(28, 16, 12, 0.76);

            backdrop-filter:
                blur(9px);

            animation:
                policyFadeIn .2s ease;

        }


        .order-policy-box {

            position: relative;

            width:
                min(570px, 100%);

            max-height:
                90vh;

            overflow-y:
                auto;

            background:
                linear-gradient(
                    145deg,
                    #fffaf5,
                    #fff4eb
                );

            border:
                1px solid
                rgba(143, 47, 35, .10);

            border-radius:
                26px;

            padding:
                32px;

            box-shadow:
                0 30px 80px
                rgba(0, 0, 0, .30);

            animation:
                policyPop .25s ease;

        }


        .order-policy-close {

            position: absolute;

            top:
                17px;

            right:
                17px;

            width:
                38px;

            height:
                38px;

            border:
                none;

            border-radius:
                50%;

            background:
                #f1e2d7;

            color:
                #5b241d;

            font-size:
                17px;

            cursor:
                pointer;

            transition:
                .2s ease;

        }


        .order-policy-close:hover {

            transform:
                scale(1.05);

            background:
                #ead4c5;

        }


        .order-policy-icon {

            width:
                60px;

            height:
                60px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            border-radius:
                18px;

            background:
                #f7dfcf;

            font-size:
                30px;

            margin-bottom:
                14px;

        }


        .order-policy-small-title {

            margin:
                0 0 5px;

            font-size:
                11px;

            font-weight:
                800;

            letter-spacing:
                2px;

            text-transform:
                uppercase;

            color:
                #d45b2c;

        }


        .order-policy-box h2 {

            margin:
                0 0 8px;

            color:
                #5b241d;

            font-size:
                32px;

            line-height:
                1.1;

        }


        .order-policy-intro {

            margin:
                0 0 22px;

            color:
                #76645b;

            line-height:
                1.55;

            font-size:
                14px;

        }


        .order-policy-list {

            display:
                flex;

            flex-direction:
                column;

            gap:
                10px;

        }


        .policy-item {

            display:
                flex;

            gap:
                13px;

            align-items:
                flex-start;

            padding:
                13px 14px;

            border-radius:
                15px;

            background:
                #f7eee7;

            border:
                1px solid
                rgba(118, 100, 91, .07);

        }


        .policy-item span {

            min-width:
                28px;

            font-size:
                12px;

            font-weight:
                900;

            color:
                #d45b2c;

            padding-top:
                2px;

        }


        .policy-item p {

            margin:
                0;

            color:
                #4d403a;

            line-height:
                1.5;

            font-size:
                13px;

        }


        .policy-check {

            display:
                flex;

            gap:
                10px;

            align-items:
                flex-start;

            margin:
                20px 0;

            padding:
                15px;

            border:
                1px solid
                #ead7ca;

            border-radius:
                15px;

            background:
                rgba(255, 255, 255, .8);

            color:
                #3f322c;

            font-size:
                13px;

            line-height:
                1.45;

            cursor:
                pointer;

        }


        .policy-check input {

            margin-top:
                2px;

            width:
                17px;

            height:
                17px;

            accent-color:
                #8f2f23;

            cursor:
                pointer;

            flex-shrink:
                0;

        }


        .policy-actions {

            display:
                flex;

            gap:
                10px;

        }


        .policy-back-btn,
        .policy-confirm-btn {

            flex:
                1;

            border:
                none;

            border-radius:
                14px;

            padding:
                14px 16px;

            font-weight:
                800;

            cursor:
                pointer;

            font-size:
                13px;

            transition:
                .2s ease;

        }


        .policy-back-btn {

            background:
                #eaded6;

            color:
                #5b241d;

        }


        .policy-confirm-btn {

            background:
                #8f2f23;

            color:
                #fff;

            box-shadow:
                0 8px 20px
                rgba(143, 47, 35, .22);

        }


        .policy-back-btn:hover,
        .policy-confirm-btn:hover {

            transform:
                translateY(-2px);

        }


        .policy-confirm-btn:hover {

            box-shadow:
                0 12px 25px
                rgba(143, 47, 35, .28);

        }


        @keyframes policyFadeIn {

            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }

        }


        @keyframes policyPop {

            from {

                opacity:
                    0;

                transform:
                    translateY(16px)
                    scale(.97);

            }

            to {

                opacity:
                    1;

                transform:
                    translateY(0)
                    scale(1);

            }

        }


        @media (max-width: 560px) {

            .order-policy-box {

                padding:
                    24px 18px;

                border-radius:
                    21px;

            }


            .order-policy-box h2 {

                font-size:
                    27px;

            }


            .policy-actions {

                flex-direction:
                    column-reverse;

            }


            .policy-confirm-btn,
            .policy-back-btn {

                width:
                    100%;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* -------------------- START -------------------- */

createCategories();


const firstCategory =
    Object.keys(
        outlet.categories
    )[0];


showCategory(
    firstCategory
);


updateCart();