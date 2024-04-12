    // Define menu items as an array of objects
    const menuItems = [
        
    { id: 1, title: "Soup of the day", category: "starters", price:"$5", description: "Freshly made soup with seasonalingredients",img:"https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
    { id: 2, title: "Bruschetta", category: "starters", price:"$7", description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella",img:"https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg" },
    
    { id: 3, title: "Chicken Parmesan", category: "mains", price:"$12", description: "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti",img:"https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
    
    { id: 4, title: "Steak Frites", category: "mains", price:"$18", description: "Grilled steak served with french fries and salad" , img:"https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk="},
    
    { id: 5, title: "Chocolate Lava Cake", category: "desserts",price: "$8", description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream" , img:"https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478="},
    
    { id: 6, title: "Apple Pie", category: "desserts", price:"$6", description: "Classic apple pie with a flaky crust,served with whipped cream", img:"https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},

    { id: 7, title: "Vegan Burger", category: "mains", price:"$10", description: "Plant-based burger served with fries",img:"https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    
    { id: 8, title: "Caesar Salad", category: "starters", price:"$6", description: "Fresh romaine lettuce with Caesar dressing,parmesan, and croutons", img:"https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    
    { id: 9, title: "Spaghetti Carbonara", category: "mains",price: "$14", description: "Classic carbonara with pancetta,egg, hard cheese, and pepper", img:"https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    
    { id: 10, title: "Tiramisu", category: "desserts", price:"$7", description: "Italian dessert made of savoiardi dipped incoffee, layered with a whipped mixture of eggs, sugar, andmascarpone cheese", img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    
    { id: 11, title: "Iced Coffee", category: "beverages", price:"$4", description: "Chilled coffee served with ice and cream",img:"https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=" },
    
    { id: 12, title: "Mango Lassi", category: "beverages", price:"$5", description: "Refreshing Indian drink made with mango andyogurt", img:"https://media.istockphoto.com/id/535787620/photo/mango-lassi-with-saffron-garnish-on-wooden-background.jpg?s=612x612&w=0&k=20&c=1Stbt4EtLsGBbuUSvkg4B0u8fRrWFjQOdCpl8_pb8xc=" },
    
    { id: 13, title: "Green Tea", category: "beverages", price:"$3", description: "Traditional green tea with antioxidants",img:"https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" }
            ];

//----------------------------------------------------------------------------------------------------------------


    
// Function to create a card for each menu item
    function createMenuItemCard(item) {
    const card = document.createElement('div');
        card.classList.add('card');
    
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title;
        img.classList.add('card-img-top');
    
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item.title;
    
        const subtitle = document.createElement('h6');
        subtitle.classList.add('card-subtitle');
        subtitle.textContent = item.price;
    
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = item.description;
    
        const category = document.createElement('p');
        category.classList.add('card-text');
        category.innerHTML = `<small class="text-muted">Category: ${item.category}</small>`;
    
        cardBody.appendChild(title);
        cardBody.appendChild(subtitle);
        cardBody.appendChild(description);
        cardBody.appendChild(category);
    
        card.appendChild(img);
        card.appendChild(cardBody);
    
        return card;
    }
    
    // Get the menu items container
    const menuItemsContainer = document.getElementById('menu-items');
    
    // Loop through the menu items and create cards for each item
    menuItems.forEach(item => {
        const menuItemCard = createMenuItemCard(item);
        menuItemsContainer.appendChild(menuItemCard);
    });

//----------------------------------------------------------------------------------------------------------------


//search -bar 
function filterByCategory(category) {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = ''; // Clear previous items

    let filteredItems;
    if (category === 'All') {
        filteredItems = menuItems;
    } else {
        filteredItems = menuItems.filter(item => item.category === category);
    }

    if (filteredItems.length === 0) {
        // If no items match the category, display all items
        filteredItems = menuItems;
    }

    filteredItems.forEach(item => {
        const menuItemCard = createMenuItemCard(item);
        menuItemsContainer.appendChild(menuItemCard);
    });
}

//----------------------------------------------------------------------------------------------------------------
function searchMenu() {
    // Get the input value and convert it to uppercase for case-insensitive search
    const searchInput = document.getElementById('searchInput').value.trim().toUpperCase();

    // Get the menu items container
    const menuItemsContainer = document.getElementById('menu-items');

    // Clear previous search results
    menuItemsContainer.innerHTML = '';

    // Filter menu items based on search input
    const filteredItems = menuItems.filter(item =>
        item.title.toUpperCase() === searchInput ||
        item.category.toUpperCase() === searchInput ||
        item.title.toUpperCase().includes(searchInput)
    );

    // Create cards for filtered items and append to menu items container
    filteredItems.forEach(item => {
        const menuItemCard = createMenuItemCard(item);
        menuItemsContainer.appendChild(menuItemCard);
    });
}
