// ===== HOME PAGE - CHANGING TEXT =====
const changingText = document.getElementById("changingText");

if (changingText) {
    const texts = [
        "Backend Developer",
        "Data Science Enthusiast",
        "Videographer",
        "Creative Designer"
    ];
    
    let index = 0;
    
    setInterval(() => {
        index = (index + 1) % texts.length;
        changingText.textContent = texts[index];
    }, 2000); // Change every 2 seconds
}

// ===== HOME PAGE - EXPLORE BUTTON =====
const exploreBtn = document.getElementById("exploreBtn");
const btnMessage = document.getElementById("btnMessage");

if (exploreBtn && btnMessage) {
    exploreBtn.addEventListener("click", () => {
        btnMessage.textContent = "🎉 Let's explore! Check out my projects below!";
        
        // Smooth scroll after 1 second
        setTimeout(() => {
            window.scrollTo({
                top: 800,
                behavior: "smooth"
            });
        }, 1000);
    });
}

// ===== CONTACT FORM - VALIDATION =====
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMsg = document.getElementById("successMsg");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Clear previous errors
        nameError.classList.remove("show");
        emailError.classList.remove("show");
        messageError.classList.remove("show");
        
        nameInput.classList.remove("error-input");
        emailInput.classList.remove("error-input");
        messageInput.classList.remove("error-input");
        
        let hasError = false;
        
        // Validate Name
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name";
            nameError.classList.add("show");
            nameInput.classList.add("error-input");
            hasError = true;
        } else if (nameInput.value.trim().length < 3) {
            nameError.textContent = "Name must be at least 3 characters";
            nameError.classList.add("show");
            nameInput.classList.add("error-input");
            hasError = true;
        }
        
        // Validate Email
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email";
            emailError.classList.add("show");
            emailInput.classList.add("error-input");
            hasError = true;
        } else if (!emailInput.value.includes("@")) {
            emailError.textContent = "Please enter a valid email";
            emailError.classList.add("show");
            emailInput.classList.add("error-input");
            hasError = true;
        }
        
        // Validate Message
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter your message";
            messageError.classList.add("show");
            messageInput.classList.add("error-input");
            hasError = true;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = "Message must be at least 10 characters";
            messageError.classList.add("show");
            messageInput.classList.add("error-input");
            hasError = true;
        }
        
        // If no errors, show success
        if (!hasError) {
            console.log("Form submitted!");
            console.log("Name:", nameInput.value);
            console.log("Email:", emailInput.value);
            console.log("Message:", messageInput.value);
            
            // Hide form and show success
            contactForm.style.display = "none";
            successMsg.classList.add("show");
            
            // Reset after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = "flex";
                successMsg.classList.remove("show");
            }, 5000);
        }
    });
}

// ===== CONSOLE MESSAGE =====
console.log("👋 Welcome to my portfolio!");
console.log("💻 Built with HTML, CSS, and JavaScript");