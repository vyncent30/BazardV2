//Menu carroussel
let currentIndex = 0;

function rotateMenu(direction) {
    const optionsContainer = document.getElementById('options');
    const options = document.getElementsByClassName('option');
    const optionWidth = options[0].offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = options.length - 1;
    } else if (currentIndex >= options.length) {
        currentIndex = 0;
    }

    const transformValue = -currentIndex * optionWidth;
    optionsContainer.style.transform = `translateX(${transformValue}px)`;
}

//Barre de défilement
function search() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var products = document.getElementsByClassName("product");

    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getElementsByClassName("product-name")[0];
        if (productName) {
            var textValue = productName.textContent || productName.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
}

//Menu de navigations a gauche
function toggleMenu() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Fermer le menu si l'utilisateur clique en dehors du menu
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
