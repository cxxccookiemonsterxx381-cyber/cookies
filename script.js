// live clock on the member pass
const clock = document.getElementById("clock");
const tick = () => {
  if (clock) clock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
tick();
setInterval(tick, 15000);

// reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// cursor-following specular highlight on glass panels
const fine = window.matchMedia("(pointer: fine)").matches;
if (fine) {
  document.addEventListener("mousemove", (e) => {
    const el = e.target.closest?.(".glass");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
}

// demo form handler
const form = document.getElementById("join-form");
const note = document.getElementById("form-note");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (note) note.hidden = false;
  form.reset();
});
