var toggle = document.getElementById("toggle-education");
var Education = document.getElementById("Education");
toggle.addEventListener("click", function () {
    if (Education.style.display === "none") {
        Education.style.display = "block";
    }
    else {
        Education.style.display = "none";
    }
});
