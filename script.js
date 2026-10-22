// Uusi lista -menun näyttö ja piilotus nappulalla
const listMenuButton = document.querySelector("#new-list-menu");
const listMenu = document.querySelector(".form-container");
// Toggletus lomake-menulle, käyttäen hidden-luokkaa.
listMenuButton.addEventListener("click", function () {
    listMenu.classList.toggle("hidden");
});
