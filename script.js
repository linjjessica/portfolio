// Smooth scrolling
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.target;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Change color of active section
const sections = document.querySelectorAll("section");
console.log("sections found:", sections.length);
console.log("skills element:", document.getElementById("skills"));
console.log("skills is a section?", document.getElementById("skills")?.tagName);

const navButtons = document.querySelectorAll(".nav-btn");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
        if (entry.target.id === "skills") {
        console.log("SKILLS:", {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
            bottom: entry.boundingClientRect.bottom,
        });
        }
      if (entry.isIntersecting) {
        console.log("entry shown: ", entry)
        navButtons.forEach(btn => {
          btn.classList.toggle(
            "active",
            btn.dataset.target === entry.target.id
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => observer.observe(section));
