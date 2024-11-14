const products = [
    {
        name: 'Sony Playstation 5',
        url: 'images/playstation_5.png',
        category: 'games',
        price: 499999.99,
    },
    {
        name: 'Samsung Galaxy',
        url: 'images/samsung_galaxy.png',
        category: 'smartphones',
        price: 399999.99,
    },
    {
        name: 'Cannon EOS Camera',
        url: 'images/cannon_eos_camera.png',
        category: 'cameras',
        price: 749999.99,
    },
    {
        name: 'Sony A7 Camera',
        url: 'images/sony_a7_camera.png',
        category: 'cameras',
        price: 1999999.99,
    },
    {
        name: 'LG TV',
        url: 'images/lg_tv.png',
        category: 'televisions',
        price: 799999.99,
    },
    {
        name: 'Nintendo Switch',
        url: 'images/nintendo_switch.png',
        category: 'games',
        price: 299999.99,
    },
    {
        name: 'Xbox Series X',
        url: 'images/xbox_series_x.png',
        category: 'games',
        price: 499999.99,
    },
    {
        name: 'Samsung TV',
        url: 'images/samsung_tv.png',
        category: 'televisions',
        price: 1099999.99,
    },
    {
        name: 'Google Pixel',
        url: 'images/google_pixel.png',
        category: 'smartphones',
        price: 499999.99,
    },
    {
        name: 'Sony ZV1F Camera',
        url: 'images/sony_zv1f_camera.png',
        category: 'cameras',
        price: 799999.99,
    },
    {
        name: 'Toshiba TV',
        url: 'images/toshiba_tv.png',
        category: 'televisions',
        price: 499999.99,
    },
    {
        name: 'iPhone 14',
        url: 'images/iphone_14.png',
        category: 'smartphones',
        price: 999999.99,
    },
];

//Select DOM Elements
const productsWrapper = document.getElementById('products-wrapper');
const checkboxes = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartCount = document.getElementById('cart-count');

// Initialize cart item count
let cartItemCount = 0;

// Initialize product element array
const productElements = [];

// Event listeners for filtering
filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

// Loop over product and create an element
products.forEach((product) => {
    const productElement = createProductElement(product);
    productElements.push(productElement);
    productsWrapper.appendChild(productElement);
});

// Create product Element
function createProductElement(product) {
    const productElement = document.createElement('div');

    productElement.className = 'item space-y-2';

    productElement.innerHTML = `
        <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
          <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover" />
          <button
            class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
            Add To Cart
          </button>
        </div>
        <p class="text-xl">${product.name}</p>
        <strong>${product.price.toLocaleString()} Tshs</strong>
    `;
    productElement.querySelector('.status').addEventListener('click', updateCart);

    return productElement;
}

// Add or Remove item from cart
function updateCart(e) {
    const statusElement = e.target;

    if (statusElement.classList.contains('added')) {
        // Remove from cart
        statusElement.classList.remove('added');
        statusElement.innerText = 'Add To Cart';
        statusElement.classList.remove('bg-red-500');
        statusElement.classList.add('bg-black');

        cartItemCount--;
    } else {
        // Add to cart
        statusElement.classList.add('added');
        statusElement.innerText = 'Remove From Cart';
        statusElement.classList.remove('bg-black');
        statusElement.classList.add('bg-red-500');

        cartItemCount++;
    }

    // Update cart item count
    cartCount.innerText = cartItemCount.toString();
}

// Filter products by checkboxes and input
// function filterProducts() {
//     // Get search term
//     const searchTerm = searchInput.value.trim().toLowerCase();

//     // Get checked categories
//     const checkedCategories = Array.from(checkboxes).filter((check) => check.checked).map((check) => check.id);

//     // Loop over product and check for matches
//     productElements.forEach((productElement, index) => {
//         const product = products[index];

//         // Check to see if the product matches the search or the checked categories
//         const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm); // For search input field

//         const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.category); // For search from checkboxes

//         // Show or Hide product based on matches
//         if (matchesSearchTerm && isInCheckedCategory) {
//             productElement.classList.remove('hidden');
//         } else {
//             productElement.classList.add('hidden');
//         }
//     });
// }

// Filter products by checkboxes and input
function filterProducts() {
    // Get search term
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Get checked categories
    const checkedCategories = Array.from(document.querySelectorAll('.check:checked')).map((check) => check.id);

    // Loop over product elements and check for matches
    productElements.forEach((productElement, index) => {
        const product = products[index];

        // Check if the product matches the search term
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);

        // Check if the product category is one of the checked categories
        const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.category);

        // Show or hide the product based on matches
        if (matchesSearchTerm && isInCheckedCategory) {
            productElement.classList.remove('hidden');
        } else {
            productElement.classList.add('hidden');
        }
    });
}
