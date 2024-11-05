const toggle = document.getElementById("toggle-education") as HTMLButtonElement;
const Education = document.getElementById("Education") as HTMLElement;

toggle.addEventListener("click", () => {
  if (Education.style.display === "none") {
    Education.style.display = "block";
  } else {
    Education.style.display = "none";
  }
});
