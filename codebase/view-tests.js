// Mock Data for tests
const tests = [
  { id: 1, title: "Math Test", description: "A comprehensive math quiz covering algebra and geometry.", date: "2024-11-01" },
  { id: 2, title: "History Exam", description: "Test your knowledge of world history.", date: "2024-11-02" },
  { id: 3, title: "Science Quiz", description: "Covering physics, chemistry, and biology.", date: "2024-11-03" },
  { id: 4, title: "English Grammar", description: "Grammar and sentence structure test.", date: "2024-11-04" },
  { id: 5, title: "Geography Challenge", description: "A quiz about world geography and capitals.", date: "2024-11-05" },
];

// Function to render tests in the table
function renderTests() {
  const tableBody = document.getElementById("tests-table-body");
  tableBody.innerHTML = ""; // Clear existing content

  tests.forEach((test) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${test.title}</td>
      <td>${test.description}</td>
      <td>${test.date}</td>
      <td><button onclick="viewTest(${test.id})">View</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to view test details
function viewTest(testId) {
  const test = tests.find((test) => test.id === testId);
  alert(`Viewing test: ${test.title}\nDescription: ${test.description}`);
}

// Function to filter tests based on search input
function filterTests() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filteredTests = tests.filter((test) => 
    test.title.toLowerCase().includes(searchInput) || 
    test.description.toLowerCase().includes(searchInput)
  );
  
  // Update the table with filtered tests
  const tableBody = document.getElementById("tests-table-body");
  tableBody.innerHTML = ""; // Clear existing content
  
  filteredTests.forEach((test) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${test.title}</td>
      <td>${test.description}</td>
      <td>${test.date}</td>
      <td><button onclick="viewTest(${test.id})">View</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Initialize the page by rendering all tests
document.addEventListener("DOMContentLoaded", renderTests);
