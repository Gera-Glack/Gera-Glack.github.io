let hasEntered = false;

function enterSystem() {
  if (hasEntered) return;
  hasEntered = true;

  const boot = document.getElementById("boot");
  const desktop = document.getElementById("desktop");

  boot.classList.add("exit");

  setTimeout(() => {
    boot.style.display = "none";
    desktop.hidden = false;
  }, 600);
}

// ENTER key
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    enterSystem();
  }
});

// CLICK anywhere
document.addEventListener("click", () => {
  enterSystem();
});
