// Active tests data
var activeTests = [
  {
    id: 1,
    title: "Mathematics Quiz",
    description: "A quick quiz to test your math skills.",
    link: "math_test.html",
    image: "https://tse2.mm.bing.net/th?id=OIP.Dun1P3Yyn1w615-DNKNEWgHaD4&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    title: "English Grammar Test",
    description: "Assess your grammar and sentence structure knowledge.",
    link: "grammar_test.html",
    image: "https://tse3.mm.bing.net/th?id=OIP.6E7G7I6PRdvpHQCnkc51UAHaFj&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    title: "Science Challenge",
    description: "Test your knowledge of basic science concepts.",
    link: "science_test.html",
    image: "https://tse4.mm.bing.net/th?id=OIP.x3iUQBZ-ucaGF8LaCaY54gAAAA&pid=Api&P=0&h=180"
  },
  {
    id: 4,
    title: "History Trivia",
    description: "See how much you know about world history.",
    link: "history_test.html",
    image: "https://tse3.mm.bing.net/th?id=OIP.2NG7sIluajHpve7g4zWoagHaD4&pid=Api&P=0&h=180"
  },
  {
    id: 5,
    title: "Coding Skills Test",
    description: "Solve basic coding problems in a timed environment.",
    link: "coding_test.html",
    image: "https://tse1.mm.bing.net/th?id=OIP.ftMvro11cO0g1lZ56AqXBAHaD_&pid=Api&P=0&h=180"
  }
];

// Function to create a test card
function createTestCard(test) {
  var testCard = document.createElement("div");
  testCard.className = "test-card";

  var img = document.createElement("img");
  img.src = test.image;
  img.alt = test.title;
  testCard.appendChild(img);

  var content = document.createElement("div");
  content.className = "content";

  var h3 = document.createElement("h3");
  h3.textContent = test.title;
  content.appendChild(h3);

  var p = document.createElement("p");
  p.textContent = test.description;
  content.appendChild(p);

  var a = document.createElement("a");
  a.href = test.link;
  a.className = "btn";
  a.textContent = "Start Test";
  content.appendChild(a);

  testCard.appendChild(content);

  return testCard;
}

// Render active tests in the container
function renderActiveTests() {
  var testsContainer = document.getElementById("tests-container");

  for (var i = 0; i < activeTests.length; i++) {
    var testCard = createTestCard(activeTests[i]);
    testsContainer.appendChild(testCard);
  }
}

// Filter tests based on input
function filterTests() {
  var searchInput = document.getElementById("search").value.toLowerCase();
  var filteredTests = [];

  for (var i = 0; i < activeTests.length; i++) {
    var test = activeTests[i];
    if (test.title.toLowerCase().indexOf(searchInput) !== -1 ||
        test.description.toLowerCase().indexOf(searchInput) !== -1) {
      filteredTests.push(test);
    }
  }

  var testsContainer = document.getElementById("tests-container");
  testsContainer.innerHTML = ""; // Clear previous content

  for (var j = 0; j < filteredTests.length; j++) {
    var testCard = createTestCard(filteredTests[j]);
    testsContainer.appendChild(testCard);
  }
}

// Initialize the page by rendering active tests
document.addEventListener("DOMContentLoaded", renderActiveTests);
