
window.onload = function() {
    const form = document.querySelector('#quizForm'); // Hämta formuläret
    const successMessage = document.getElementById('successMessage'); // Hämta meddelande-elementet

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Förhindra formulärets automatiska inskickning
    

        // Validera förnamn och efternamn
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const nameRegex = /^[A-Za-zåäöÅÄÖ ]+$/;

        if (!nameRegex.test(firstName)) {
            document.getElementById('firstNameError').textContent = 'Ange ett giltigt förnamn';
            return;
        } else {
            document.getElementById('lastNameError').textContent = '';
        }

        if (!nameRegex.test(lastName)) {
            document.getElementById('lastNameError').textContent = 'Ange ett giltigt efternamn';
            return;
        } else {
            document.getElementById('lastNameError').textContent = '';
        }

        // Validera email
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Ange en giltig e-postadress';
            return;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Validera att minst två obligatoriska frågor är besvarade
        const mandatoryQuestions = ['question3', 'question4']; // Namnen på de obligatoriska frågorna

        let answeredMandatoryQuestions = 0;
        mandatoryQuestions.forEach(questionName => {
            if(questionName ==='question3') {
                const answer = document.getElementById(questionName).value.trim();
                if(answer!==''){
                    answeredMandatoryQuestions++;
                }
            } else if (questionName === 'question4') {
                const answers = document.querySelectorAll(`input[name="${questionName}"]:checked`);
                if (answers.length > 0) {
                    answeredMandatoryQuestions++;
                }
            }
        });

        if (answeredMandatoryQuestions < 2) {
            alert('Answer the mandatory questions to move forward with the quiz');
            return;
        }

        // Om all validering passerade, kan du skicka formuläret till servern eller göra något annat med svaren
        successMessage.textContent = 'All information has been submitted successfully!';
        successMessage.style.display = 'block';

        const isFormValid = true; // Ändra detta beroende på din logik
        if (isFormValid) {
            form.submit();
        }
    });
};
