// Loader screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
  revealSections(); // trigger scroll effect on load
});

// Menu toggle
function toggleMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("active");
}

// Section scroll animation
function revealSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealSections);

// Form terms validation
function validateForm() {
  const termsAccepted = document.getElementById("terms").checked;
  if (!termsAccepted) {
    alert("You must accept the terms and conditions to register.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

// Admin functions
function addNotice() {
  const noticeText = document.getElementById("newNotice").value;
  if (noticeText.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = noticeText;
    document.getElementById("notices").appendChild(li);
    document.getElementById("newNotice").value = "";
  }
}
function addEvent() {
  const eventText = document.getElementById("newEvent").value;
  if (eventText.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = eventText;
    document.getElementById("events").appendChild(li);
    document.getElementById("newEvent").value = "";
  }
}
