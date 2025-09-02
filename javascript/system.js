const containers = document.querySelectorAll(".wnd");
window.addEventListener("pointermove", (e) => {
  containers.forEach((container) => {
    let rect = container.getBoundingClientRect();

    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    container.style.setProperty("--x", x + "%");
    container.style.setProperty("--y", y + "%");
  });
});

const background = document.querySelector(".bkg");
const strength = 50;
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * strength;
  const y = (e.clientY / window.innerHeight - 0.5) * strength;

  background.style.backgroundPosition = `${x}px ${y}px`;
});

const bars = document.querySelectorAll(".bar-fil");
window.addEventListener("mousemove", (e) => {
  bars.forEach((bar) => {
    let percent = (e.clientX / window.innerWidth) * 100;
    bar.style.width = percent + "%";
  });
});
const cores = document.querySelectorAll(".inf-cpu");
window.addEventListener("mousemove", (e) => {
  cores.forEach((core) => {
    let percent = (e.clientX / window.innerWidth) * 100;
    core.textContent = percent.toFixed(1) + "%";
  });
});
