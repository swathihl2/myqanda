document.addEventListener('DOMContentLoaded', loadQuestions);

function toggleQuestions(categoryId) {
    const questions = document.getElementById(categoryId);
    questions.style.display = questions.style.display === "none" || questions.style.display === "" ? "block" : "none";
}

function toggleAnswer(event, answerId, questionElement) {
    event.stopPropagation(); // Prevent the parent card click event
    const answer = document.getElementById(answerId);

    // Toggle the answer visibility on click
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    questionElement.classList.toggle('clicked'); // Toggle clicked class
}

function filterQuestions() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const allQuestions = document.querySelectorAll('.question');

    allQuestions.forEach(question => {
        const questionText = question.querySelector('h3').textContent.toLowerCase();
        const answerElement = question.querySelector('.answer');
        const answerText = answerElement.textContent.toLowerCase();

        const matchesQuestion = questionText.includes(searchTerm);
        const matchesAnswer = answerText.includes(searchTerm);

        // Show the question if it matches either the question text or the answer text
        question.style.display = matchesQuestion || matchesAnswer ? 'block' : 'none';

        // Highlight the search term in the question
        if (matchesQuestion) {
            question.querySelector('h3').innerHTML = highlightText(question.querySelector('h3').textContent, searchTerm);
        } else {
            question.querySelector('h3').innerHTML = question.querySelector('h3').textContent; // Reset to original
        }

        // Highlight the search term in the answer
        if (matchesAnswer) {
            answerElement.innerHTML = highlightText(answerText, searchTerm);
        } else {
            answerElement.innerHTML = answerText; // Reset to original
        }
    });

    // Hide categories without visible questions
    const categories = document.querySelectorAll('.card');
    categories.forEach(category => {
        const questionsInCategory = category.querySelectorAll('.question');
        const hasVisibleQuestions = Array.from(questionsInCategory).some(q => q.style.display === 'block');
        category.style.display = hasVisibleQuestions ? 'block' : 'none';
    });
}

// Helper function to wrap the matching text
function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Case-insensitive match
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function addCategory() {
    const newCategory = document.getElementById('newCategory').value.trim();
    const categorySelect = document.getElementById('questionCategory');

    if (newCategory) {
        const option = document.createElement('option');
        option.value = newCategory;
        option.textContent = newCategory;
        categorySelect.appendChild(option);
        document.getElementById('newCategory').value = '';
    } else {
        alert("Please enter a category name.");
    }
}

function updateQuestions(category, questionText, answerText, uid) {
    const newQuestion = {
        uid: uid,
        question: questionText,
        answer: answerText,
        category: category
    };

    fetch('https://shl-server.onrender.com/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(() => {
        loadQuestions(); // Reload questions to get updated list
    })
    .catch(error => console.error('Error updating questions:', error));
}

function addQuestion() {
    const questionText = document.getElementById('newQuestion').value.trim();
    const answerText = document.getElementById('newAnswer').value.trim();
    const category = document.getElementById('questionCategory').value;

    if (questionText && answerText && category) {
        const uid = `q${Date.now()}`; // Generate a unique ID for the question
        updateQuestions(category, questionText, answerText, uid); // Update the server with new question
        document.getElementById('newQuestion').value = '';
        document.getElementById('newAnswer').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

function deleteQuestion(event, buttonElement, uid) {
    event.stopPropagation(); // Prevent the parent question click event
    fetch(`https://shl-server.onrender.com/items?uid=${uid}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        loadQuestions(); // Reload the questions after deletion
    })
    .catch(error => console.error('Error deleting question:', error));
}

function deleteCategory(category) {
    fetch(`https://shl-server.onrender.com/items?category=${category}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        loadQuestions(); // Reload the questions after deletion
    })
    .catch(error => console.error('Error deleting category:', error));
}

function loadQuestions() {
    fetch('https://shl-server.onrender.com/items')
        .then(response => response.json())
        .then(data => {
            const categoriesContainer = document.getElementById('categoriesContainer');
            const categorySelect = document.getElementById('questionCategory');

            categoriesContainer.innerHTML = '';
            categorySelect.innerHTML = '';

            const questionsByCategory = data.reduce((acc, item) => {
                const category = item.category || "Uncategorized"; // Use "Uncategorized" if category is empty
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push(item);
                return acc;
            }, {});

            for (const [category, items] of Object.entries(questionsByCategory)) {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'card';
                categoryCard.innerHTML = `<h2 onclick="toggleQuestions('${category}')">${category}</h2><div class="questions" id="${category}"></div>`;

                if (items.length === 0) {
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete Category';
                    deleteButton.onclick = () => deleteCategory(category);
                    categoryCard.appendChild(deleteButton);
                }

                categoriesContainer.appendChild(categoryCard);

                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);

                items.forEach(item => {
                    const answerId = `answer${item.uid}`; // Use UID for unique ID
                    const newQuestionHtml = `
                        <div class="question" onclick="toggleAnswer(event, '${answerId}', this)">
                            
                                <h3>${item.question}</h3>
                                <div class="answer" id="${answerId}" style="display:none;">${item.answer}</div>
                                <button class="delete-button" onclick="deleteQuestion(event, this, '${item.uid}')">Delete</button>
                        </div>
                        
                    `;
                    document.getElementById(category).insertAdjacentHTML('beforeend', newQuestionHtml);
                });
            }
        })
        .catch(error => console.error('Error loading questions:', error));
}
