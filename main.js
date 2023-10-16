let menuIcon = document.querySelector("#menu-icon");
let remove = document.querySelector(".icon");
let section = document.querySelector(".icon-sec");

menuIcon.onclick = () => {
  section.classList.remove("hide");
};
remove.onclick = () => {
  section.classList.add("hide");
};
