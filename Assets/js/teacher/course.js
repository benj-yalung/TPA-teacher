/**
 * Scripts for the Course Page
 */

// Course Action Dropdown
const buttons = document.querySelectorAll("[data-id = course-action]");

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    buttons.forEach(
      (innerButton, innerIdx) =>
        idx !== innerIdx && innerButton.setAttribute("aria-expanded", "false")
    );

    button.setAttribute(
      "aria-expanded",
      button.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
});
