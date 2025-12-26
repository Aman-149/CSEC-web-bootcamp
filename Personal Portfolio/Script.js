document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "Sending...";
    setTimeout(() => {
        alert("Thank you! Your message has been sent successfully.");
        this.reset();
        btn.innerText = originalText;
    }, 500);
});
