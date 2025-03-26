document.getElementById("grammar-test-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Correct answers
    const answers = {
      q1: "B",
      q2: "B",
      q3: "A",
    };
  
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
  
    // Calculate the score
    for (let key in answers) {
      const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
      if (userAnswer && userAnswer.value === answers[key]) {
        score++;
      }
    }
  
    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `You scored ${score} out of ${totalQuestions} (${((score / totalQuestions) * 100).toFixed(2)}%)`;
  
    // Reset the form for a retake (if desired)
    document.getElementById("grammar-test-form").reset();
  });
  