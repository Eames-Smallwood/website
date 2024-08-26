// Function to handle order placement
function placeOrder() {
    const cheeseburger = document.getElementById('cheeseburger').value;
    const jalapenos = document.getElementById('jalapenos').checked;
    const confirmation = document.getElementById('orderConfirmation');

    confirmation.innerHTML = `Thank you for ordering a ${cheeseburger} cheeseburger${jalapenos ? ' with jalapenos' : ''}! We will have it ready for you soon.`;
}

// Function to handle catering event scheduling
function scheduleCatering() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const confirmation = document.getElementById('cateringConfirmation');

    if (eventName && eventDate && eventTime) {
        confirmation.innerHTML = `Your catering event '${eventName}' is scheduled for ${eventDate} at ${eventTime}. We look forward to serving you!`;
    } else {
        confirmation.innerHTML = 'Please fill out all fields correctly.';
    }
}

// Function to handle billing information submission
function submitBilling() {
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const confirmation = document.getElementById('billingConfirmation');

    if (fullName && address && city && state && zip && cardNumber && expiryDate && cvv) {
        confirmation.innerHTML = `Thank you for providing your billing information. Your order will be processed soon.`;
    } else {
        confirmation.innerHTML = 'Please fill out all fields correctly.';
    }
}