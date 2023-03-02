const share = document.querySelector(".share");
const social = document.querySelector(".social");
const body = document.body;

share.addEventListener("click", () => {
  social.classList.toggle("active");
});

document.querySelectorAll(".soc").forEach((s) => {
  s.addEventListener("click", () => {
    social.classList.remove("active");
  });
});
