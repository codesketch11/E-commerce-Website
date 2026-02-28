/* Form Validation for checkout page */
function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address1 = document.getElementById("address1").value.trim();
    var state = document.getElementById("state").value.trim();
    var pincode = document.getElementById("pincode").value.trim();
    var country = document.getElementById("country").value.trim();

    if (firstName === "" || lastName === "" || email === "" || phone === "" || 
        address1 === "" || state === "" || pincode === "" || country === "") {
        alert("All required fields must be filled out");
        return false;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    var phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }
    
    var pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(pincode)) {
        alert("Please enter a valid 6-digit pincode");
        return false;
    }
    
    return true;
}

// Attach validation to the Place Order button
document.addEventListener("DOMContentLoaded", function() {
    var placeOrderBtn = document.querySelector(".btn-primary.btn-block");
    placeOrderBtn.addEventListener("click", function(e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });
});