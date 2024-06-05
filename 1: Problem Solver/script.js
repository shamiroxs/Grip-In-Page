function handleAnswer(answer) {
    const questionContainer = document.getElementById('question-container');
    const popupMessage = document.getElementById('popup-message');

    if (questionContainer.innerHTML.includes("Do you have a problem in your life?")) {
        // Handling the first question
        if (answer === 'no') {
            // If 'No' is selected for the first question
            popupMessage.innerText = "Then Don't Worry!";
            showPopup();
        } else if (answer === 'yes') {
            // If 'Yes' is selected for the first question
            questionContainer.innerHTML = `
                <h1>Can you do something about it?</h1>
                <button onclick="handleAnswer('yes')">Yes</button>
                <button onclick="handleAnswer('no')">No</button>
            `;
        }
    } else if (questionContainer.innerHTML.includes("Can you do something about it?")) {
        // Handling the second question
        popupMessage.innerText = "Then Don't Worry!";
        showPopup();
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    const resetButton = document.getElementById('reset-button');
    popup.style.display = 'block';
    resetButton.style.display = 'none';  // Ensure reset button is hidden initially
    setTimeout(() => {
        resetButton.style.display = 'inline-block';
    }, 3000);
}

function reset() {
    const questionContainer = document.getElementById('question-container');
    const popup = document.getElementById('popup');
    const resetButton = document.getElementById('reset-button');

    questionContainer.innerHTML = `
        <h1>Do you have a problem in your life?</h1>
        <button onclick="handleAnswer('yes')">Yes</button>
        <button onclick="handleAnswer('no')">No</button>
    `;
    popup.style.display = 'none';
    resetButton.style.display = 'none';
}
