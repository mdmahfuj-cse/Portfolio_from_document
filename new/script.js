// --- CONTACT FORM VALIDATION ---
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('portfolioContactForm'); // Matches id in contact.html

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop page reload

            // Get form values
            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const subject = document.querySelector('input[name="subject"]').value.trim();
            const message = document.querySelector('textarea[name="message"]').value.trim();

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

    // --- REAL-TIME CLOCK ---
    function updateClock() {
        const clockElement = document.getElementById('clockDisplay');
        if (clockElement) {
            const now = new Date();
            // Format: "Friday, Jan 12, 2024 | 10:30:45 AM"
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            const dateString = now.toLocaleDateString('en-US', options);
            const timeString = now.toLocaleTimeString('en-US');
            
            clockElement.innerText = `${dateString} | ${timeString}`;
        }
    }

    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call
});