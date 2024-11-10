
    
    
    document.addEventListener("DOMContentLoaded", function() {
        const questions = document.querySelectorAll('.faq-question');

        questions.forEach(question => {
            question.addEventListener('click', function() {
                const answerId = this.getAttribute('data-toggle');
                const answer = document.getElementById(answerId);
                
                // Toggle visibility with animation
                if (answer.style.display === "none" || answer.style.display === "") {
                    answer.style.display = "block"; // Show answer
                    setTimeout(() => {
                        answer.style.opacity = "1"; // Fade in
                    }, 10); // Small delay to allow display change
                } else {
                    answer.style.opacity = "0"; // Fade out
                    setTimeout(() => {
                        answer.style.display = "none"; // Hide answer after fade out
                    }, 300); // Match duration with CSS transition
                }
            });
        });
    });
