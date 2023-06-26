
  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // X-axis labels
      datasets: [{
        label: 'get rid of this label', // Legend label
        data: [10, 20, 15, 25, 12, 8, 16, 23, 18, 9, 14, 22], // Y-axis data values
        backgroundColor: '#25396F', // Bar color
        borderColor: '#25396F', // Bar border color
        borderWidth: 1 // Bar border width
      }]
    },
    options: {
      responsive: true, // Make the chart responsive
      scales: {
        y: {
          beginAtZero: true, // Start the Y-axis at zero
        }
      }
      
    }
  });
