document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("resourceKitForm");
  const formMessage = document.getElementById("formMessage");
  const submitButton = form.querySelector('button[type="submit"]');
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    // Create mailto link with pre-filled content
    const subject = encodeURIComponent("FIRE Method Resource Kit Request");
    const body = encodeURIComponent(`Hi Tony,

I'm interested in receiving the FIRE Method Resource Kit. 

My email address: ${email}

Best regards,
[Your name]`);

    const mailtoLink = `mailto:tony.oreglia@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showMessage(
      "Email client opened! Please send the email to receive your resource kit.",
      "success"
    );

    // Reset form
    form.reset();
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
