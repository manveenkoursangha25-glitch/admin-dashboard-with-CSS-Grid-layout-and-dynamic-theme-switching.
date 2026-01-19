const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    toggleBtn.textContent = "🌙 Dark Mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌞 Light Mode";
    }
});
