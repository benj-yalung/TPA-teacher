// START # Attendance Donut Chart # START
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
// END # Attendance Donut Chart # END
