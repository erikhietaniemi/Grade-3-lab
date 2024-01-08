
window.onload = function() {
    const form = document.querySelector('form'); // Hämta formuläret

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Förhindra formulärets automatiska inskickning
    

        // Validera förnamn och efternamn
        const firstNameInput = document.getElementById('Förnamn');
        const lastNameInput = document.getElementById('Efternamn');
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const nameRegex = /^[A-Za-zåäöÅÄÖ ]+$/;

        if (!nameRegex.test(firstName)) {
            document.getElementById('FörnamnError').textContent = 'Ange ett giltigt förnamn';
            return;
        } else {
            document.getElementById('FörnamnError').textContent = '';
        }

        if (!nameRegex.test(lastName)) {
            document.getElementById('EfternamnError').textContent = 'Ange ett giltigt efternamn';
            return;
        } else {
            document.getElementById('EfternamnError').textContent = '';
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
        const mandatoryQuestions = ['Fråga 1', 'Fråga4']; // Namnen på de obligatoriska frågorna

        let answeredMandatoryQuestions = 0;
        mandatoryQuestions.forEach(questionName => {
            const answers = document.querySelectorAll(`input[name="${questionName}"]`);
            if ([...answers].some(answer => answer.checked)) {
                answeredMandatoryQuestions++;
            }
        });

        if (answeredMandatoryQuestions < 2) {
            alert('Vänligen besvara minst två obligatoriska frågor');
            return;
        }

        // Om all validering passerade, kan du skicka formuläret till servern eller göra något annat med svaren
        // Exempel: form.submit(); för att skicka formuläret till servern
    });
};