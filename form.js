"use strict";
var _a;

(_a = document.getElementById("resumeForm")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("submit", function (e) {
      var _a;
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const title = document.getElementById("title").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const location = document.getElementById("location").value.trim();
      const education = document.getElementById("education").value.trim();
      const experience = document.getElementById("experience").value.trim();
      const skillsInput = document.getElementById("skills").value.trim();
      const linksInput = document.getElementById("links").value.trim();
      const imageInput = document.getElementById("image");
      const imageFile =
        (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];

      if (
        !name ||
        !title ||
        !email ||
        !phone ||
        !location ||
        !education ||
        !experience ||
        !skillsInput ||
        !linksInput
      ) {
        alert("All fields are required.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
      }

      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        return;
      }

      const skills = skillsInput.split(",").map((skill) => {
        const [name, level] = skill.trim().split(":");
        if (
          !name ||
          !level ||
          isNaN(Number(level)) ||
          Number(level) < 0 ||
          Number(level) > 100
        ) {
          alert(
            "Please enter valid skills in the format 'Skill:Level' (e.g., 'HTML:80')."
          );
          throw new Error("Invalid skills format");
        }
        return `${name}:${level}`;
      });

      const links = linksInput.split(",").map((link) => link.trim());
      const linkPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/gm;
      for (let link of links) {
        if (!linkPattern.test(link)) {
          alert(`Invalid URL format: ${link}. Please provide a valid URL.`);
          return;
        }
      }
      let image = "";
      if (imageFile) {
        const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedImageTypes.includes(imageFile.type)) {
          alert("Please upload a valid image file (JPEG, PNG).");
          return;
        }
        const reader = new FileReader();
        reader.onloadend = function () {
          image = reader.result;
          const resumeData = {
            name,
            title,
            email,
            phone,
            location,
            education,
            experience,
            skills,
            links,
            image,
          };
          localStorage.setItem("resumeData", JSON.stringify(resumeData));
          window.location.href = "resume.html";
        };
        reader.readAsDataURL(imageFile);
      } else {
        const resumeData = {
          name,
          title,
          email,
          phone,
          location,
          education,
          experience,
          skills,
          links,
          image: "",
        };
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = "resume.html";
      }
    });
