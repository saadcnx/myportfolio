// ===== TYPED EFFECT =====
const roles = [
  "DevOps Engineer",
  "Linux SysAdmin",
  "Cloud Automation Specialist",
  "Kubernetes Practitioner",
  "CI/CD Pipeline Builder"
];
let rIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById("typed-output");

function type() {
  const current = roles[rIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++cIdx);
    if (cIdx === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typedEl.textContent = current.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// ===== HAMBURGER =====
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// ===== NAVBAR SCROLL =====
window.addEventListener("scroll", () => {
  document.getElementById("navbar").style.boxShadow =
    window.scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.4)" : "none";
});

// ===== SKILLS TABS =====
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
  });
});

// ===== TIMELINE TOGGLE =====
function toggleTimeline(header) {
  header.classList.toggle("open");
  const body = header.nextElementSibling;
  body.classList.toggle("open");
}

// ===== RENDER PROJECTS =====
function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";
  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.innerHTML = `
      <div class="project-icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <a href="${p.github}" target="_blank" class="project-link">
        <i class="fab fa-github"></i> View on GitHub
      </a>`;
    grid.appendChild(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add("visible")));
  });
}

renderProjects();

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// ===== FADE IN ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// ===== CONTACT FORM (mailto fallback) =====
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this[0].value;
  const email = this[1].value;
  const subject = this[2].value || "Portfolio Contact";
  const message = this[3].value;
  window.location.href = `mailto:saadcnx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
});
