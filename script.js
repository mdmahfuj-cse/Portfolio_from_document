document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('portfolioContactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop page reload

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple Validation
            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success Simulation
            alert(`Thank you, ${name}! Your message regarding "${subject}" has been sent successfully.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});