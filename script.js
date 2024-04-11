        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();

            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;

            if (name === "") {
                alert("Name is required");
                return;
            }

            if (email === "") {
                alert("Email is required");
                return;
            }

            if (message === "") {
                alert("Message is required");
                return;
            }

            // If all fields are filled, submit the form
            alert("Form submitted successfully!");
            this.submit();
        });