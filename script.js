// Switches between Phase 1 and Phase 2 viewing tracks
function switchPhase(phaseId) {
  const phases = document.querySelectorAll(".itinerary-phase");
  phases.forEach((phase) => phase.classList.remove("active-phase"));

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(phaseId).classList.add("active-phase");
  event.currentTarget.classList.add("active");

  // Smooth centers screen display positioning down to the panel line
  window.scrollTo({ top: 320, behavior: "smooth" });
}

// Controls dynamic text injection for active touch configurations
function showModal(carrier, code, notes) {
  const modal = document.getElementById("infoModal");
  document.getElementById("modalCarrier").innerText = carrier;
  document.getElementById("modalCode").innerText = code;
  document.getElementById("modalNotes").innerHTML = notes;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}

// Global click monitoring container logic to click away out of overlays
window.onclick = function (event) {
  const modal = document.getElementById("infoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
