let typed = new Typed(".changing-text", {
  strings: ["MERN-stack Developer", "UI/UX Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  onStringTyped: function (arrayPos, self) {
    if (self.strings[arrayPos] === "Creative Coder") {
      document.querySelector(".part-2").textContent =
        "Psst... How's your day today?";
      setTimeout(function () {
        document.querySelector(".part-2").innerHTML =
          "<h3 class='part-2'>I'm a <span class='changing-text'></span></h3>";
        typed.destroy();
        typed = new Typed(".changing-text", {
          strings: ["MERN-stack Developer", "UI/UX Developer"],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
        });
      }, 5000);
    }
  },
});
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Add click event listener to each nav-link
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Select the collapse button
    const collapseButton = document.querySelector(".navbar-toggler");

    // Check if the collapse button exists and is expanded
    if (
      collapseButton &&
      collapseButton.getAttribute("aria-expanded") === "true"
    ) {
      // Click the collapse button to hide the collapse menu
      collapseButton.click();
    }
  });
});
document.addEventListener("click", function (event) {
  // Select the collapse button
  const collapseButton = document.querySelector(".navbar-toggler");
  // Check if the collapse button exists and is expanded
  if (
    collapseButton &&
    collapseButton.getAttribute("aria-expanded") === "true"
  ) {
    // Check if the click event target is not inside the collapse menu
    if (!event.target.closest(".navbar-collapse")) {
      // Click the collapse button to hide the collapse menu
      collapseButton.click();
    }
  }
});
