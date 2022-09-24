const projectsList = document.querySelectorAll(".projects__list-item");
const btnTechs = document.querySelectorAll(".projects__filter div button");
const projectCount = document.querySelector(".projects__filter h3 span");

btnTechs.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Removes the "btn-clicked" class from all buttons when any button is clicked.
    btnTechs.forEach((oi) => oi.classList.remove("btn-clicked"));
    // Adds the "btn-clicked" class to the clicked button.
    btn.classList.add("btn-clicked");

    // Gets the content of the button clicked by the user turned lowercase.
    const selectedTech = btn.textContent.toLowerCase();
    // Updates the number of existing projects according to the technology selected by the user.
    projectCount.textContent = document.querySelectorAll(
      "." + selectedTech
    ).length;

    // It shows the projects with the technology chosen by the user and hides the others.
    projectsList.forEach((project) => {
      project.style.display = "block";
      if (!project.classList.contains(selectedTech)) {
        project.style.display = "none";
      }
    });
  });
});
