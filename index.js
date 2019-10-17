window.addEventListener("mousemove", e => {
    document.documentElement.style.setProperty("--mouseX", e.x + "px")
    document.documentElement.style.setProperty("--mouseY", e.y + "px")
});
  