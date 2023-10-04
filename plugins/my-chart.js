document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('donutChart').getContext('2d');
    var data = {
        datasets: [{
            data: [7, 33, 60],
            backgroundColor: ['#6610f2', '#36A2EB', '#18145a'],
            hoverBackgroundColor: ['#6610f2', '#36A2EB', '#18145a'],
            borderWidth: 1
        }]
    };
    var options = {
        maintainAspectRatio: false,
        cutoutPercentage: 65,
        legend: {
            position: 'bottom'
        }
    };
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
});
