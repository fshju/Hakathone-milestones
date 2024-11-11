"use strict";
var _a;
(_a = document.getElementById("downloadResumeBtn")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("click", () => {
      const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

      const doc = new jsPDF();

      doc.setFont("helvetica", "normal");
      doc.text(`Name: ${resumeData.name}`, 10, 10);
      doc.text(`Title: ${resumeData.title}`, 10, 20);
      doc.text(`Email: ${resumeData.email}`, 10, 30);
      doc.text(`Phone: ${resumeData.phone}`, 10, 40);
      doc.text(`Location: ${resumeData.location}`, 10, 50);
      doc.text(`Education: ${resumeData.education}`, 10, 60);
      doc.text(`Experience: ${resumeData.experience}`, 10, 70);

      const skillsText = resumeData.skills.join(", ");
      doc.text(`Skills: ${skillsText}`, 10, 80);

      const linksText = resumeData.links.join(", ");
      doc.text(`Links: ${linksText}`, 10, 90);

      if (resumeData.image) {
        const imageData = resumeData.image;
        doc.addImage(imageData, "JPEG", 10, 100, 30, 30);
      }

      doc.save(`${resumeData.name}_resume.pdf`);
    });
window.addEventListener("DOMContentLoaded", () => {
  const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
  if (resumeData) {
    document.getElementById("resumeName").innerText =
      resumeData.name || "Your Name";
    document.getElementById("resumeTitle").innerText =
      resumeData.title || "Your Job Title";
    document.getElementById("resumeEmail").innerText =
      resumeData.email || "Your Email";
    document.getElementById("resumePhone").innerText =
      resumeData.phone || "Your Phone";
    document.getElementById("resumeLocation").innerText =
      resumeData.location || "Your Location";
    document.getElementById("resumeEducation").innerText =
      resumeData.education || "Your Education";
    document.getElementById("resumeExperience").innerText =
      resumeData.experience || "Your Experience";
    const skillsList = document.getElementById("resumeSkills");
    skillsList.innerHTML = resumeData.skills
      .map((skill) => `<li>${skill}</li>`)
      .join("");
    const linksContainer = document.getElementById("resumeLinks");
    linksContainer.innerHTML = resumeData.links
      .map((link) => `<a href="${link}" target="_blank">${link}</a>`)
      .join("");
    const imageElement = document.getElementById("resumeImage");
    if (resumeData.image) {
      imageElement.src = resumeData.image;
    }
  }

  const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
  const skillsSection = document.getElementById("resumeSkills");

  let skillsVisible = true;
  toggleSkillsBtn.addEventListener("click", () => {
    if (skillsVisible) {
      skillsSection.style.display = "none";
      toggleSkillsBtn.innerText = "Show Skills";
    } else {
      skillsSection.style.display = "block";
      toggleSkillsBtn.innerText = "Hide Skills";
    }
    skillsVisible = !skillsVisible;
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const resumeId = urlParams.get("id");
  if (resumeId) {
    const resumeData = JSON.parse(localStorage.getItem(resumeId) || "{}");
    if (resumeData) {
      document.getElementById("resumeName").innerText =
        resumeData.name || "Your Name";
      document.getElementById("resumeTitle").innerText =
        resumeData.title || "Your Job Title";
      document.getElementById("resumeEmail").innerText =
        resumeData.email || "Your Email";
      document.getElementById("resumePhone").innerText =
        resumeData.phone || "Your Phone";
      document.getElementById("resumeLocation").innerText =
        resumeData.location || "Your Location";
      document.getElementById("resumeEducation").innerText =
        resumeData.education || "Your Education";
      document.getElementById("resumeExperience").innerText =
        resumeData.experience || "Your Experience";
      const skillsList = document.getElementById("resumeSkills");
      skillsList.innerHTML = resumeData.skills
        .map((skill) => `<li>${skill}</li>`)
        .join("");
      const linksContainer = document.getElementById("resumeLinks");
      linksContainer.innerHTML = resumeData.links
        .map((link) => `<a href="${link}" target="_blank">${link}</a>`)
        .join("");
      const imageElement = document.getElementById("resumeImage");
      if (resumeData.image) {
        imageElement.src = resumeData.image;
      }
    }
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.getElementById("editResumeBtn");
  const editModal = document.getElementById("editModal");
  const closeBtn = document.querySelector(".close");
  const saveBtn = document.getElementById("saveResumeBtn");
  const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

  editBtn.onclick = () => {
    document.getElementById("editName").value = resumeData.name || "";
    document.getElementById("editTitle").value = resumeData.title || "";
    document.getElementById("editEmail").value = resumeData.email || "";
    document.getElementById("editPhone").value = resumeData.phone || "";
    document.getElementById("editLocation").value = resumeData.location || "";
    document.getElementById("editEducation").value = resumeData.education || "";
    document.getElementById("editExperience").value =
      resumeData.experience || "";
    document.getElementById("editSkills").value = (
      resumeData.skills || []
    ).join(", ");
    document.getElementById("editLinks").value = (resumeData.links || []).join(
      ", "
    );
    editModal.style.display = "flex";
  };
  closeBtn.onclick = () => {
    editModal.style.display = "none";
  };
  saveBtn.onclick = () => {
    resumeData.name = document.getElementById("editName").value;
    resumeData.title = document.getElementById("editTitle").value;
    resumeData.email = document.getElementById("editEmail").value;
    resumeData.phone = document.getElementById("editPhone").value;
    resumeData.location = document.getElementById("editLocation").value;
    resumeData.education = document.getElementById("editEducation").value;
    resumeData.experience = document.getElementById("editExperience").value;
    resumeData.skills = document
      .getElementById("editSkills")
      .value.split(",")
      .map((skill) => skill.trim());
    resumeData.links = document
      .getElementById("editLinks")
      .value.split(",")
      .map((link) => link.trim());
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    updateResumeDisplay();
    editModal.style.display = "none";
  };
  function updateResumeDisplay() {}
  window.onclick = (event) => {
    if (event.target === editModal) {
      editModal.style.display = "none";
    }
  };
});