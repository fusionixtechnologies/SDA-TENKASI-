const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

/* Replace this with your deployed Google Apps Script URL */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxeivcemjbiyJNhbTbMXP6vP9kPRISBjqIM1n_f3c0MPqXwh_mN7cKxQgyz5bEAqBgEmQ/exec";

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    formStatus.textContent = "";
    formStatus.className = "form-status";
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const formData = {
      studentName: document.getElementById("studentName").value.trim(),
      parentName: document.getElementById("parentName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      classApplying: document.getElementById("classApplying").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === "success") {
        formStatus.textContent = "Your Response Has Been Received , We Will Contact You Soon.";
        formStatus.classList.add("success");
        form.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.classList.add("error");
      }
    } catch (error) {
      formStatus.textContent = "Unable to submit right now. Please try again later.";
      formStatus.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
    }
  });
}