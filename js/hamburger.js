(function () {
  let hamburger = document.querySelector(".hamburger");
  let userMenu = document.querySelector(".user-menu-wrap");
  hamburger.addEventListener(
    "click",
    function () {
      this.classList.toggle("is-active");
      userMenu.classList.toggle("user-menu-visible");
    },
    false
  );
})();
