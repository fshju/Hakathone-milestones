declare var jsPDF: any;

document.getElementById("downloadResumeBtn")?.addEventListener("click", () => {
  const resumeData: ResumeData = JSON.parse(
    localStorage.getItem("resumeData") || "{}"
  );

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
  const resumeData: ResumeData = JSON.parse(
    localStorage.getItem("resumeData") || "{}"
  );

  if (resumeData) {
    (document.getElementById("resumeName") as HTMLElement).innerText =
      resumeData.name || "Your Name";
    (document.getElementById("resumeTitle") as HTMLElement).innerText =
      resumeData.title || "Your Job Title";
    (document.getElementById("resumeEmail") as HTMLElement).innerText =
      resumeData.email || "Your Email";
    (document.getElementById("resumePhone") as HTMLElement).innerText =
      resumeData.phone || "Your Phone";
    (document.getElementById("resumeLocation") as HTMLElement).innerText =
      resumeData.location || "Your Location";
    (document.getElementById("resumeEducation") as HTMLElement).innerText =
      resumeData.education || "Your Education";
    (document.getElementById("resumeExperience") as HTMLElement).innerText =
      resumeData.experience || "Your Experience";

    const skillsList = document.getElementById("resumeSkills") as HTMLElement;
    skillsList.innerHTML = resumeData.skills
      .map((skill: string) => `<li>${skill}</li>`)
      .join("");

    const linksContainer = document.getElementById(
      "resumeLinks"
    ) as HTMLElement;
    linksContainer.innerHTML = resumeData.links
      .map((link: string) => `<a href="${link}" target="_blank">${link}</a>`)
      .join("");

    const imageElement = document.getElementById(
      "resumeImage"
    ) as HTMLImageElement;
    if (resumeData.image) {
      imageElement.src = resumeData.image;
    }
  }

  const toggleSkillsBtn = document.getElementById(
    "toggleSkillsBtn"
  ) as HTMLButtonElement;
  const skillsSection = document.getElementById("resumeSkills") as HTMLElement;

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
    const resumeData: ResumeData = JSON.parse(
      localStorage.getItem(resumeId) || "{}"
    );

    if (resumeData) {
      (document.getElementById("resumeName") as HTMLElement).innerText =
        resumeData.name || "Your Name";
      (document.getElementById("resumeTitle") as HTMLElement).innerText =
        resumeData.title || "Your Job Title";
      (document.getElementById("resumeEmail") as HTMLElement).innerText =
        resumeData.email || "Your Email";
      (document.getElementById("resumePhone") as HTMLElement).innerText =
        resumeData.phone || "Your Phone";
      (document.getElementById("resumeLocation") as HTMLElement).innerText =
        resumeData.location || "Your Location";
      (document.getElementById("resumeEducation") as HTMLElement).innerText =
        resumeData.education || "Your Education";
      (document.getElementById("resumeExperience") as HTMLElement).innerText =
        resumeData.experience || "Your Experience";

      const skillsList = document.getElementById("resumeSkills") as HTMLElement;
      skillsList.innerHTML = resumeData.skills
        .map((skill: string) => `<li>${skill}</li>`)
        .join("");

      const linksContainer = document.getElementById(
        "resumeLinks"
      ) as HTMLElement;
      linksContainer.innerHTML = resumeData.links
        .map((link: string) => `<a href="${link}" target="_blank">${link}</a>`)
        .join("");

      const imageElement = document.getElementById(
        "resumeImage"
      ) as HTMLImageElement;
      if (resumeData.image) {
        imageElement.src = resumeData.image;
      }
    }
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.getElementById("editResumeBtn") as HTMLButtonElement;
  const editModal = document.getElementById("editModal") as HTMLElement;
  const closeBtn = document.querySelector(".close") as HTMLElement;
  const saveBtn = document.getElementById("saveResumeBtn") as HTMLButtonElement;

  const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

  editBtn.onclick = () => {
    (document.getElementById("editName") as HTMLInputElement).value =
      resumeData.name || "";
    (document.getElementById("editTitle") as HTMLInputElement).value =
      resumeData.title || "";
    (document.getElementById("editEmail") as HTMLInputElement).value =
      resumeData.email || "";
    (document.getElementById("editPhone") as HTMLInputElement).value =
      resumeData.phone || "";
    (document.getElementById("editLocation") as HTMLInputElement).value =
      resumeData.location || "";
    (document.getElementById("editEducation") as HTMLTextAreaElement).value =
      resumeData.education || "";
    (document.getElementById("editExperience") as HTMLTextAreaElement).value =
      resumeData.experience || "";
    (document.getElementById("editSkills") as HTMLInputElement).value = (
      resumeData.skills || []
    ).join(", ");
    (document.getElementById("editLinks") as HTMLInputElement).value = (
      resumeData.links || []
    ).join(", ");

    editModal.style.display = "flex";
  };

  closeBtn.onclick = () => {
    editModal.style.display = "none";
  };

  saveBtn.onclick = () => {
    resumeData.name = (
      document.getElementById("editName") as HTMLInputElement
    ).value;
    resumeData.title = (
      document.getElementById("editTitle") as HTMLInputElement
    ).value;
    resumeData.email = (
      document.getElementById("editEmail") as HTMLInputElement
    ).value;
    resumeData.phone = (
      document.getElementById("editPhone") as HTMLInputElement
    ).value;
    resumeData.location = (
      document.getElementById("editLocation") as HTMLInputElement
    ).value;
    resumeData.education = (
      document.getElementById("editEducation") as HTMLTextAreaElement
    ).value;
    resumeData.experience = (
      document.getElementById("editExperience") as HTMLTextAreaElement
    ).value;
    resumeData.skills = (
      document.getElementById("editSkills") as HTMLInputElement
    ).value
      .split(",")
      .map((skill) => skill.trim());
    resumeData.links = (
      document.getElementById("editLinks") as HTMLInputElement
    ).value
      .split(",")
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
