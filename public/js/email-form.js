document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("resourceKitForm");
  const formMessage = document.getElementById("formMessage");
  const submitButton = form.querySelector('button[type="submit"]');
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    try {
      // Send GET request to enqueue endpoint
      const response = await fetch(
        `/enqueue?email=${encodeURIComponent(email)}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Show success message
      showMessage(
        "Thank you! The resource kit will be sent to your email shortly.",
        "success"
      );

      // Reset form
      form.reset();
    } catch (error) {
      showMessage(
        "Sorry, there was an error processing your request. Please try again.",
        "error"
      );
      console.error("Error:", error);
    }
  });

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `mt-4 p-4 rounded-md ${
      type === "success"
        ? "bg-green-50 text-green-800 border border-green-200"
        : "bg-red-50 text-red-800 border border-red-200"
    }`;
    formMessage.classList.remove("hidden");

    // Hide message after 8 seconds (longer for success message)
    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 8000);
  }
});
