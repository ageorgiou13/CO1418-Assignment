Description : This project is an Assignment for C0148 Web Technologies. It's a responsive front-end website for the
UCLan Student Shop. User can check out about UClan at homepage through 2 videos. Then user can see the eshop,
with hoodies, jumpers and T-shirts, can view the details in the Item Page and add products to the cart.

Files:
index.html - Homepage including welcome text and two embedded videos
products.html - Products page with all products and filters.
item.html - Page for a single item loading it using sessionStorage.
cart.html - Cart page that reads products that added by buy button to localStorage and shows quantity image name and price.
index.css - styling of the page and responsive layout
products.css - styling of the page and responsive layout
item.css - styling of the page and responsive layout
cart.css - styling of the page and responsive layout
index.js - Homepage hamburger menu
product.js - generating all data for products, use of filtering buttons, buy button and add to cart ,
and more link for item page, hamburger menu
item.js Loads the product from session storage and displays it, hamburger menu
cart.js gets cart items from local storage and shows the cart , hamburger menu
images/ file for logo and images of products
video/ file for local video 

Instructions
1. Open index.html in your browser
2. Use the navigation menu (or hamburger menu for responsive >768) to move between pages.
3. On products.html use filter buttons to filter products or scroll to find the product you want, click Buy to add to cart or more to open a detailed item page (item.html)(loaded from sessionStorage)
4. On cart.html view the items that you added to cart (loaded from localStorage)

Features
Four pages: Home, Products, Item, Cart
Responsive layout using CSS
Mobile navigation using hamburger menu
Listing and loading products using Javascript arrays.
Product filtering on Product page (All, Hoodies, Jumpers, T-Shirts)
Buy button that stores item in localStorage
Cart page reads from local storage to show items in cart
More link stores item in sessionStorage
Item page loads from sessionStorage the item
Back to top button
Use of semantic elements (header,main,footer,section)

Validation - Done with https://validator.w3.org/
index.html 1 error The frameborder attribute on the iframe element is obsolete
index.css no errors

products.html 1 error Bad value images\logo.png for attribute src on element img: Backslash ("\") used as path segment delimiter.
products.css no errors

item.html 1 error Bad value images\logo.png for attribute src on element img: Backslash ("\") used as path segment delimiter.
item.css no errors

cart.html 1 error Bad value images\logo.png for attribute src on element img: Backslash ("\") used as path segment delimiter.
cart.css no errors

