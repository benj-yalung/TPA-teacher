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

// Attendance Donut Chart
const chart = document.getElementById("attendance-chart");

new Chart(chart, {
  type: "doughnut",

  data: {
    labels: ["On Time", "Late", "Absent"],
    datasets: [
      {
        // label: "",
        data: [9, 5, 1],
        borderWidth: 1,
        backgroundColor: ["#0F0346", "#28EDFC", "#A447FD"],
        rotation: 135,
      },
    ],
  },

  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
