// ================= FARMING GUIDE FILTER =================

function filterGuides(category) {

    let cards = document.querySelectorAll(".guide-card");

    cards.forEach(function(card) {

        if (category === "all") {

            card.style.display = "block";

        } 
        else if (card.classList.contains(category)) {

            card.style.display = "block";

        } 
        else {

            card.style.display = "none";

        }

    });

}


// ================= CONTACT FORM =================

function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been submitted.");

}