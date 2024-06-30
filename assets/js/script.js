const menu = document.querySelector('.menu'),
      navLists = document.querySelector('.nav-lists'),
      crossIcon = document.querySelector('.cross-icon');

menu.addEventListener('click', () => {
    navLists.style.right = 0;
})

crossIcon.addEventListener('click', ()=> {
    navLists.style.right = "";
})

// page up
const scrollUp = document.querySelector('.page-up');

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollUp.style.display = "block";
        scrollUp.style.transition = "ease .5s"
        scrollUp.style.transform = "translateY(-15px)"
    } else {
        scrollUp.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollUp.addEventListener('click', function() {
    scrollToTop();
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//add-to-cart
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;
        
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
            totalPrice += item.price;
        });
        
        totalPriceContainer.textContent = totalPrice.toFixed(2);
    }

    function addToCart(event) {
        const shoeBox = event.target.closest('.shoe-box');
        const price = parseFloat(shoeBox.querySelector('.price').textContent.replace('$', ''));
        const imgSrc = shoeBox.querySelector('img').src;
        const itemName = imgSrc.split('/').pop().split('.')[0];

        const item = {
            name: itemName,
            price: price
        };

        cart.push(item);
        updateCart();
    }

    const addButtons = document.querySelectorAll('.add');
    addButtons.forEach(button => button.addEventListener('click', addToCart));
});


//hide-show cart

function showCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cart = document.querySelector('.cart-container');
    cartIcon.addEventListener('click', () => {
        cart.style.display = "block";
    });
    function hideCart() {
        const cartIcon = document.querySelector('.cart-icon');
        const crossIcon = document.querySelector('.cart-cross-icon');
        const cart = document.querySelector('.cart-container');
        crossIcon.addEventListener('click', () => {
            cart.style.display = "none";
        });
        cartIcon.addEventListener('dblclick', () => {
            cart.style.display = "none";
        })
    }
    hideCart();
}

// function hideCart() {
//     const crossIcon = document.querySelector('.cart-cross-icon');
//     const cart = document.querySelector('.cart-container');
//     crossIcon.addEventListener('click', () => {
//         cart.style.display = "none";
//     });
// }

showCart();
// hideCart();


// JavaScript for fullscreen image functionality
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".shoe-box img");
    const overlay = document.getElementById("fullscreenOverlay");
    const fullscreenImage = document.getElementById("fullscreenImage");
    const closeBtn = document.getElementById("closeBtn");

    images.forEach(image => {
        image.addEventListener("click", function() {
            fullscreenImage.src = this.src;
            overlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
});