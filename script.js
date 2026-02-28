/* Form Validation */
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();

    if (name === "" || email === "" || msg === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If validation passes, you can submit the form or show a success message
    alert("Thank you for contacting us! We will get back to you soon.");
    form.reset(); // Reset the form after submission
  });