var ctx = document.getElementById('myChartNew').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [79, 21],
      backgroundColor: [
        'rgba(40, 237, 252)',
        'rgba(113, 142, 212)'
      ],
      borderWidth: 0,
      height: 150,
      width: 150
    }]
  }
});