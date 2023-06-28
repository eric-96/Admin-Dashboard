
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

   // Chart 1: USA Profile Visits
   var options1 = {
    chart: {
      type: 'area',
      height: '100%',
      sparkline: {
        enabled: true // Enable sparkline mode to remove unnecessary elements
      }
    },
    series: [{
      data: [600, 3000, 2500, 3000, 5000] // Profile visit data for USA
    }],
    dataLabels: {
      enabled: false // Disable data labels
    },
    stroke: {
      show: false // Hide the line stroke
    },
    markers: {
      show: false // Hide the data point markers
    },
    xaxis: {
      labels: {
        show: false // Hide the X-axis labels
      }
    },
    yaxis: {
      show: false // Hide the Y-axis
    },
    tooltip: {
      enabled: false // Disable tooltips
    },
    fill: {
      colors: ['#e11d48'] // Custom color for the area chart (Brazil)
    }
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  chart1.render();


  // Chart 2: Brazil Profile Visits
  var options2 = {
    chart: {
      type: 'area',
      height: '100%',
      sparkline: {
        enabled: true // Enable sparkline mode to remove unnecessary elements
      }
    },
    series: [{
      data: [500, 3500, 900, 5000, 5000] // Profile visit data for Brazil
    }],
    dataLabels: {
      enabled: false // Disable data labels
    },
    stroke: {
      show: false // Hide the line stroke
    },
    markers: {
      show: false // Hide the data point markers
    },
    xaxis: {
      labels: {
        show: false // Hide the X-axis labels
      }
    },
    yaxis: {
      show: false // Hide the Y-axis
    },
    tooltip: {
      enabled: false // Disable tooltips
    },
    fill: {
      colors: ['#6ee7b7'] // Custom color for the area chart (Brazil)
    }
  };

  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();

  // Chart 3: Portugal Profile Visits
  var options3 = {
    chart: {
      type: 'area',
      height: '100%',
      sparkline: {
        enabled: true // Enable sparkline mode to remove unnecessary elements
      }
    },
    series: [{
      data: [500, 700, 900, 10000, 8000, 5000, 8000] // Profile visit data for Brazil
    }],
    dataLabels: {
      enabled: false // Disable data labels
    },
    stroke: {
      show: false // Hide the line stroke
    },
    markers: {
      show: false // Hide the data point markers
    },
    xaxis: {
      labels: {
        show: false // Hide the X-axis labels
      }
    },
    yaxis: {
      show: false // Hide the Y-axis
    },
    tooltip: {
      enabled: false // Disable tooltips
    },
    fill: {
      colors: ['#22d3ee'] // Custom color for the area chart (Brazil)
    }
    
  };

  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();


  // pie chart
  var options = {
    series: [50, 35, 15],
    chart: {
      width: 380,
      type: 'donut',
    },
    labels: ['Devs', 'Recruiters', 'Users'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    legend: {
      position: 'bottom'
    },
    colors: ['#FF6384', '#36A2EB', '#FFCE56'] 
  };

  var chart4 = new ApexCharts(document.querySelector("#chart4"), options);
  chart4.render();
