document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;

    if (email.includes("@") && message.trim() !== "") {
        document.getElementById("successMessage").classList.remove("hidden");

        document.getElementById("emailInput").value = "";
        document.getElementById("messageInput").value = "";
    } else {
        alert("Voer een geldig e-mailadres en een bericht in! 📧📝");
    }
});
