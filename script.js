
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (username != "" && email != "") {
        document.getElementById("message").textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";
    } else {
        document.getElementById("message").textContent =
            "Please enter your name and email.";
    }
});


let rows = document.querySelectorAll("#menu-table tr");

rows.forEach(function(row) {
    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#dce8c5";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });
});



document.getElementById("theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});



let items = document.querySelectorAll(".item");

items.forEach(function(item) {
    item.addEventListener("change", calculateTotal);
});

function calculateTotal() {
    let total = 0;

    items.forEach(function(item) {
        if (item.checked) {
            total = total + Number(item.dataset.price);
        }
    });

    document.getElementById("total").textContent =
        "Total: Rs " + total;
}



document.getElementById("contact-form").addEventListener("submit", function() {
    let birthYear = parseInt(document.getElementById("birth-year").value);

    if (birthYear > 1900 && birthYear <= 2026) {
        let age = 2026 - birthYear;

        if (age <= 18 || age >= 60) {
            document.getElementById("message").textContent +=
                " You qualify for a special discount!";
        }
    }
});



var readBtn = document.getElementById("readBtn");
var extraText = document.getElementById("extraText");

readBtn.addEventListener("click", function() {
    if (extraText.hidden) {
        extraText.hidden = false;
        readBtn.textContent = "Read Less";
    } else {
        extraText.hidden = true;
        readBtn.textContent = "Read More";
    }
});




let filters = document.querySelectorAll(".filter");

filters.forEach(function(button) {
    button.addEventListener("click", function() {
        let category = button.dataset.category;

        rows.forEach(function(row, index) {
            if (index == 0 || category == "all" ||
                row.dataset.category == category) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});



let hour = new Date().getHours();
let status = document.createElement("p");

document.querySelector("header").appendChild(status);

if (hour >= 10 && hour < 21) {
    status.textContent = "We are Open!";
    status.style.color = "green";
} else {
    status.textContent = "Closed - Open at 10 AM";
    status.style.color = "red";
}



document.getElementById("special-notes").addEventListener("input", function() {
    let remaining = 100 - this.value.length;

    document.getElementById("counter").textContent =
        remaining + " characters remaining";
});
