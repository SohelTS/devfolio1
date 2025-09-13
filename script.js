function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("theme-toggle");
  btn.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
}
const roles = ["Frontend Developer", "Data Analyst", "Software Engineer"];
let roleIndex = 0;
const roleElement = document.getElementById("dynamic-role");

function changeRole() {
  roleIndex = (roleIndex + 1) % roles.length;
  roleElement.textContent = roles[roleIndex];
}

// Change role every 2 seconds
setInterval(changeRole, 2000);
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const btn = document.getElementById("theme-toggle");
  btn.textContent = document.body.classList.contains("light-mode") ? "Dark" : "Light";
}
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const icon = document.getElementById("theme-icon");

  if (document.body.classList.contains("light-mode")) {
    // Sun icon (Light mode)
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    `;
  } else {
    // Moon icon (Dark mode)
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
      </svg>
    `;
  }
}
