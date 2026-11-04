// Krátký hodinový sprint mozku – malý easter egg mimo hlavní studijní logiku.
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.createElement("div");
  root.className = "neuro-easter-egg";
  root.setAttribute("role", "status");
  root.setAttribute("aria-live", "polite");
  root.setAttribute("aria-label", "Hodinový neuro sprint");
  root.innerHTML = `
    <div class="neuro-easter-egg-bubble">Neuro sprint! 🧠</div>
    <button class="neuro-sprinter" type="button" aria-label="Nechat mozeček poskočit">
      <span class="neuro-sprinter-face" aria-hidden="true">🧠</span>
      <span class="neuro-sprinter-leg leg-one" aria-hidden="true"></span>
      <span class="neuro-sprinter-leg leg-two" aria-hidden="true"></span>
      <span class="neuro-sprinter-leg leg-three" aria-hidden="true"></span>
      <span class="neuro-sprinter-leg leg-four" aria-hidden="true"></span>
    </button>
    <button class="neuro-easter-egg-close" type="button" aria-label="Zavřít neuro sprint">×</button>
  `;
  document.body.appendChild(root);

  const sprinter = root.querySelector(".neuro-sprinter");
  const closeButton = root.querySelector(".neuro-easter-egg-close");
  let hideTimer;

  const hideSprint = () => {
    window.clearTimeout(hideTimer);
    root.classList.remove("is-running");
  };

  const showSprint = () => {
    window.clearTimeout(hideTimer);
    root.classList.remove("is-running");
    // Restart CSS animation even when two hourly triggers happen close together.
    void root.offsetWidth;
    root.classList.add("is-running");
    hideTimer = window.setTimeout(hideSprint, 12_500);
  };

  sprinter.addEventListener("click", () => {
    root.classList.toggle("is-celebrating");
    window.setTimeout(() => root.classList.remove("is-celebrating"), 450);
  });
  closeButton.addEventListener("click", hideSprint);

  const millisecondsToNextHour = () => {
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setMinutes(60, 0, 0);
    return Math.max(1000, nextHour.getTime() - now.getTime());
  };

  const scheduleNextSprint = () => {
    window.setTimeout(() => {
      showSprint();
      window.setInterval(showSprint, 60 * 60 * 1000);
    }, millisecondsToNextHour());
  };

  // ?neuro-easter-egg=1 umožní rychlé ruční ověření bez čekání na celou hodinu.
  const isPreview = new URLSearchParams(window.location.search).get("neuro-easter-egg") === "1";
  const now = new Date();
  const justPastHour = now.getMinutes() === 0 && now.getSeconds() < 15;

  if (!prefersReducedMotion.matches && (isPreview || justPastHour)) {
    showSprint();
  }
  scheduleNextSprint();
});
