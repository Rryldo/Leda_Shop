
const cardNumberInput = document.getElementById("cardNumber");
const cardTypeDisplay = document.getElementById("cardType");

cardNumberInput.addEventListener("input", () => {
    const value = cardNumberInput.value.replace(/\s+/g, "");

    if (/^4/.test(value)) {
        cardTypeDisplay.textContent = "Visa";
    } else if (/^5[1-5]/.test(value)) {
        cardTypeDisplay.textContent = "Mastercard";
    } else if (/^3[47]/.test(value)) {
        cardTypeDisplay.textContent = "American Express";
    } else {
        cardTypeDisplay.textContent = "";
    }
});

// Auto add / in expiry date
const expiryInput = document.getElementById("expiry");
expiryInput.addEventListener("input", () => {
    let value = expiryInput.value.replace(/\D/g, "");
    if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    expiryInput.value = value;
});

// Remove item from cart
const closeBtn = document.querySelector(".x-button");
const itemRow = document.querySelector(".item-row");
const totalPrice = document.querySelector(".item-price-number");

closeBtn.addEventListener("click", () => {
    itemRow.remove();
    totalPrice.textContent = "0 €";
});

// Buy button validation
const buyButton = document.getElementById("buyButton");
buyButton.addEventListener("click", () => {
    const requiredInputs = document.querySelectorAll("input[required]");
    let valid = true;

    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = "1px solid red";
            valid = false;
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    if (!valid) {
        alert("Please fill all required fields.");
        return;
    }

    alert("Purchase successful!");
});
