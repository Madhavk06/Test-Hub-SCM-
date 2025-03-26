// Mock data for results
const results = [
  { testName: "Math", studentName: "Parth", score: 85, date: "2024-11-22" },
  { testName: "Science", studentName: "Madhav", score: 92, date: "2024-11-23" },
  { testName: "Math", studentName: "Jashu", score: 78, date: "2024-11-24" },
  { testName: "History", studentName: "Navjot", score: 88, date: "2024-11-25" },
  { testName: "Science", studentName: "Naman", score: 95, date: "2024-11-26" },
  { testName: "Math", studentName: "Manan", score: 90, date: "2024-11-27" },
  { testName: "History", studentName: "Arsh", score: 85, date: "2024-11-28" },
];

// Function to render results table
function renderResults(filter = "all") {
  const tableBody = document.querySelector("#results-table tbody");
  tableBody.innerHTML = ""; // Clear existing table rows

  const filteredResults = filter === "all" ? results : results.filter(result => result.testName === filter);

  filteredResults.forEach(result => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.testName}</td>
      <td>${result.studentName}</td>
      <td>${result.score}</td>
      <td>${result.date}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Event listener for filter
document.getElementById("filter-tests").addEventListener("change", event => {
  const selectedFilter = event.target.value;
  renderResults(selectedFilter);
});

// Initialize page with all results
document.addEventListener("DOMContentLoaded", () => renderResults());
