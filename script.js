document.addEventListener("DOMContentLoaded", function() {
    // Show the default popup when the page loads
    olay[7].style.display = "block";
    pop[7].style.display = "block";

    // Add event listener for delete button of the default popup
    deleteButton[7].addEventListener("click", function() {
        // Hide the default popup when the delete button is clicked
        olay[7].style.display = "none";
        pop[7].style.display = "none";
    });
});

// JavaScript for handling click events for 10 buttons
var olay = [];
var pop = [];
var addButton = [];
var deleteButton = [];

for (var i = 1; i <= 10; i++) {
    olay[i] = document.querySelector(".popupoverlay" + i);
    pop[i] = document.querySelector(".popupbox" + i);
    addButton[i] = document.getElementById("clck" + i);
    deleteButton[i] = document.getElementById("cancel" + i);

    addButton[i].addEventListener("click", (function(index) {
        return function() {
            olay[index].style.display = "block";
            pop[index].style.display = "block";
            // Add specific content for each button here
        }
    })(i));

    // Add event listener for delete button
    deleteButton[i].addEventListener("click", (function(index) {
        return function() {
            // Call the corresponding delete function based on the button index
            deleteContent(index);
        }
    })(i));
}

// Function for deleting content based on the button index
function deleteContent(index) {
    // Add your delete content functionality here based on the index
    
    olay[index].style.display = "none";
    pop[index].style.display = "none";
}
