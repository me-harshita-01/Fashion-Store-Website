
// Select all Add to Bag buttons
const buttons = document.querySelectorAll(".product button");

// Add click functionality to every button
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Product added to your shopping bag!");

    });

});
