// Hover effect on image-row images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-row img");
    images.forEach(img => {
      img.addEventListener("mouseover", () => {
        img.style.border = "3px solid #00bcd4";
        img.style.transform = "scale(1.05)";
        img.style.transition = "all 0.3s";
      });
      img.addEventListener("mouseout", () => {
        img.style.border = "none";
        img.style.transform = "scale(1)";
      });
    });

    // Toggle Goals Section
    const goalSection = document.querySelector('.clearfix h3');
    if (Goals) {
      const toggleBtn = document.createElement('button');
      toggleBtn.innerText = "Show/Hide Goals";
      toggleBtn.style.marginTop = "10px";
      toggleBtn.className = "button button2";

      const goalsDiv = goalSection.parentElement;
      goalsDiv.insertBefore(toggleBtn, goalSection);
      goalSection.style.display = "none";

      toggleBtn.addEventListener("click", () => {
        goalSection.style.display = goalSection.style.display === "none" ? "block" : "none";
      });
    }

    // Next Page Button
    const nextBtn = document.querySelector(".button.button2");
    if (nextBtn) {
      nextBtn.addEventListener("click", function (serviceshtml) {
        alert("Redirecting to next page (e.g., services.html)");
        // Uncomment below to actually redirect:
        // window.location.href = "service.html";
      });
    }
  });  // Enquiry form submission
  document.querySelector("form[action='/action_page.php']").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      const fname = document.getElementById("fname").value.trim();
      const lname = document.getElementById("lname").value.trim();
      const email = document.getElementById("Email").value.trim();
      const enquiry = document.querySelector("input[placeholder='Enquiry']").value.trim();

      if (!fname || !lname || !email || !enquiry) {
          alert("Please fill in all the enquiry form fields.");
          return;
      }

      // Basic email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      alert("Thank you " + fname + "! Your enquiry has been received.");
      this.reset(); // Clear form fields
  });

  // Staff form submission
  document.getElementById("staffForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const fname = document.getElementById("staffFname").value.trim();
      const lname = document.getElementById("staffLname").value.trim();
      const phone = document.getElementById("staffPhone").value.trim();
      const idNumber = document.getElementById("staffID").value.trim();

      if (!fname || !lname || !phone || !idNumber) {
          alert("Please fill in all the staff application fields.");
          return;
      }

      if (idNumber.length < 10) {
          alert("Please enter a valid ID number.");
          return;
      }

      alert("Thank you " + fname + "! Your application has been submitted.");
      this.reset(); // Clear form fields
  });     // Enquiry form submission

  // Staff form submission
  document.getElementById("staffForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const fname = document.getElementById("staffFname").value.trim();
      const lname = document.getElementById("staffLname").value.trim();
      const phone = document.getElementById("staffPhone").value.trim();
      const idNumber = document.getElementById("staffID").value.trim();

      if (!fname || !lname || !phone || !idNumber) {
          alert("Please fill in all the staff application fields.");
          return;
      }

      if (idNumber.length < 10) {
          alert("Please enter a valid ID number.");
          return;
      }

      alert("Thank you " + fname + "! Your application has been submitted.");
      this.reset(); // Clear form fields
  });
  document.addEventListener("DOMContentLoaded", function () {
// Enquiry form submission
const enquiryForm = document.querySelector("form[action='/action_page.php']");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const fname = document.getElementById("fname").value.trim();
      const lname = document.getElementById("lname").value.trim();
      const email = document.getElementById("Email").value.trim();
      const enquiry = document.querySelector("input[placeholder='Enquiry']").value.trim();

      if (!fname || !lname || !email || !enquiry) {
          alert("Please fill in all the enquiry form fields.");
          return;
      }

      // Basic email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      alert("Thank you " + fname + "! Your enquiry has been received.");
      this.reset(); // Clear form fields
  });
}

// Staff form submission
const staffForm = document.getElementById("staffForm");
if (staffForm) {
  staffForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const fname = document.getElementById("staffFname").value.trim();
      const lname = document.getElementById("staffLname").value.trim();
      const phone = document.getElementById("staffPhone").value.trim();
      const idNumber = document.getElementById("staffID").value.trim();

      if (!fname || !lname || !phone || !idNumber) {
          alert("Please fill in all the staff application fields.");
          return;
      }

      if (idNumber.length < 10) {
          alert("Please enter a valid ID number.");
          return;
      }

      alert("Thank you " + fname + "! Your application has been submitted.");
      this.reset(); // Clear form fields
  });
}
}); 
document.addEventListener("DOMContentLoaded", function () {
  function showThankYou(message, targetForm) {
      const thankYouDiv = document.createElement("div");
      thankYouDiv.textContent = message;
      thankYouDiv.style.cssText = `
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
          padding: 15px;
          margin-top: 10px;
          text-align: center;
          border-radius: 5px;
          font-weight: bold;
      `;

      targetForm.parentNode.insertBefore(thankYouDiv, targetForm.nextSibling);

      setTimeout(() => {
          thankYouDiv.remove();
      }, 4000); // Hide after 4 seconds
  }

  // Enquiry Form
  const enquiryForm = document.querySelector("form#enquiryForm");
  if (enquiryForm) {
      enquiryForm.addEventListener("submit", function (event) {
          event.preventDefault();

          const fname = document.getElementById("fname").value.trim();
          const lname = document.getElementById("lname").value.trim();
          const email = document.getElementById("email").value.trim();
          const enquiry = document.getElementById("enquiry").value.trim();

          if (!fname || !lname || !email || !enquiry) {
              showThankYou("⚠ Please fill in all the enquiry form fields.", enquiryForm);
              return;
          }

          const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if (!emailPattern.test(email)) {
              showThankYou("⚠ Invalid email address format.", enquiryForm);
              return;
          }

          showThankYou(`✅ Thank you ${fname}, your enquiry has been received!`, enquiryForm);
          enquiryForm.reset();
      });
  }

  // Staff Form
  const staffForm = document.querySelector("form#staffForm");
  if (staffForm) {
      staffForm.addEventListener("submit", function (event) {
          event.preventDefault();

          const fname = document.getElementById("staffFname").value.trim();
          const lname = document.getElementById("staffLname").value.trim();
          const phone = document.getElementById("staffPhone").value.trim();
          const idNumber = document.getElementById("staffID").value.trim();

          if (!fname || !lname || !phone || !idNumber) {
              showThankYou("⚠ Please fill in all the staff application fields.", staffForm);
              return;
          }

          if (idNumber.length < 10) {
              showThankYou("⚠ ID number must be at least 10 characters.", staffForm);
              return;
          }

          showThankYou(`✅ Thank you ${fname}, your application has been submitted!`, staffForm);
          staffForm.reset();
      });
  }
});
//=== Dynamic Footer for Year ===
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById ("year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});