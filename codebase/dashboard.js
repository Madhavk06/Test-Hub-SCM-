document.addEventListener("DOMContentLoaded", () => {
  // Mock data for statistics
  const totalTests = 15;
  const activeTests = 5;
  const totalUsers = 50;

  // Update statistics in the DOM
  document.getElementById("total-tests").textContent = totalTests;
  document.getElementById("active-tests").textContent = activeTests;
  document.getElementById("total-users").textContent = totalUsers;

  // Performance Chart
  const performanceCtx = document.getElementById("performance-chart").getContext("2d");
  new Chart(performanceCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Performance Score",
          data: [70, 75, 80, 85, 90, 95, 100],
          borderColor: "#002147",
          backgroundColor: "rgba(0, 33, 71, 0.1)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });

  // Test Activity Chart
  const activityCtx = document.getElementById("activity-chart").getContext("2d");
  const activityData = [50, 30, 10, 5, 5];
  const totalActivities = activityData.reduce((a, b) => a + b, 0);
  new Chart(activityCtx, {
    type: "doughnut",
    data: {
      labels: ["Math", "Science", "History", "English", "Others"],
      datasets: [
        {
          data: activityData,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw;
              const percentage = ((value / totalActivities) * 100).toFixed(2);
              return `${context.label}: ${value} (${percentage}%)`;
            },
          },
        },
        legend: {
          display: true,
          position: "bottom",
        },
      },
    },
  });
});
