/**
 * Scripts for the Course Page
 */

// Course Action Dropdown
const button = document.querySelector("[data-id = course-action]");

button.addEventListener("click", () => {
  button.setAttribute(
    "aria-expanded",
    button.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});
