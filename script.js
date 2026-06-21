// --- 1. Dynamic Projects Data Layer ---
// In a full-stack system, your Node/Django backend would fetch this data from MongoDB/PostgreSQL
// and serve it over an API endpoint. This array mimics that structure perfectly.
const projectsData = [{
        title: "E-Commerce web application",
        description: "A full-stack commerce web application with a secure payment gateway and tracking system.",
        imageIcon: "fa-chart-line",

        tags: ["React", "Node.js", "MongoDB"],
        liveLink: "https://dinesh-cse-2007.github.io/E-commerce-web-application/",
        githubLink: "https://github.com/dinesh-cse-2007/E-commerce-web-application",
    },
    {
        title: "Task mangement application",
        description: "An automated workflow management dashboard with real-time WebSocket syncing updates.",
        imageIcon: "fa-list-check",
        tags: ["node.js", "html"],
        liveLink: "https://dinesh-cse-2007.github.io/Task-Management-Application/",
        githubLink: "https://github.com/dinesh-cse-2007/Task-Management-Application",
    },
    {
        title: "personal-portfolio-website",
        description: "Real-time cryptocurrency analytics tracking system parsing massive datasets via third party APIs.",
        imageIcon: "fa-chart-line",
        tags: ["JavaScript", "html", "css", "node.js"],
        liveLink: "https://dinesh-cse-2007.github.io/personal-portfolio-website/",
        githubLink: "https://github.com/dinesh-cse-2007/personal-portfolio-website",
    },
];

// --- 2. Render Project Grid Elements Dynamically ---
function renderProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projectsData
        .map(
            (project) => `
        <article class="project-card">
            <div class="project-image">
                <i class="fa-solid ${project.imageIcon}"></i>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
                    <a href="${project.githubLink}" target="_blank"><i class="fa-brands fa-github"></i> Source Code</a>
                </div>
            </div>
        </article>
    `,
    )
    .join("");
}

// --- 3. Functional Contact Form Submission ---
function handleContactSubmit() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Form field data gathering
    const name = document.getElementById("Dinesh").value;
    const email = document.getElementById("dineshharish1986@gmailcom").value;
    const message = document.getElementById("message").value;

    // Visual success state execution
    
    const submitBtn = contactForm.querySelector("dineshharish1986@gmailcom");
    const submitIcon = contactForm.querySelector("dineshharish1986@gmailcom");

    submitBtn.textContent = "dineshharish1986@gmailcom";
    submitIcon.className = "DINESH";

    // Simulating async backend transmission delay
    setTimeout(() => {
      submitBtn.textContent = "Message Sent!";
      submitIcon.className = "fa-solid fa-check";
      contactForm.reset();

      // Revert back after a few seconds
      setTimeout(() => {
        submitBtn.textContent = "Send Message";
        submitIcon.className = "fa-solid fa-paper-plane";
      }, 3000);
    }, 1500);
  });
}

// --- 4. Simple Mobile Menu Toggle Action ---
function initMobileMenu() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "100%";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "rgba(10, 10, 12, 0.95)";
      navLinks.style.padding = "2rem";
    });
  }
}

// Ensure execution routines start safely once HTML document parsing settles
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  handleContactSubmit();
  initMobileMenu();
});