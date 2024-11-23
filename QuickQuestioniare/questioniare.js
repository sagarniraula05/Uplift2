function calculateFeedback() {
    const form = document.getElementById("questionnaire");
    const questions = new Set(); 
    const unansweredQuestions = [];

    form.querySelectorAll("input[type='radio']").forEach((input) => {
        questions.add(input.name);
    });

    questions.forEach((question) => {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (!selected) {
            unansweredQuestions.push(question);
        }
    });

    if (unansweredQuestions.length > 0) {
        document.getElementById("feedback").innerText =
            `Please complete all questions. (${unansweredQuestions.length} unanswered)`;
        return;
    }

    form.setAttribute("hidden","")
    
    // Calculate total score
    let totalScore = 0;
    const scores = {
        generalWellbeing: 0,
        emotionalStates: 0,
        socialInteraction: 0,
        lifestyle: 0,
    };

    
    form.querySelectorAll("input[type='radio']:checked").forEach((input) => {
        const name = input.name;
        const value = parseInt(input.value);

        if (["overwhelmed", "mentalHealth", "relax"].includes(name)) {
        scores.generalWellbeing += value;
        } else if (["sadness", "anxiety", "stressCoping"].includes(name)) {
        scores.emotionalStates += value;
        } else if (["isolation", "discussion", "relationships"].includes(name)) {
        scores.socialInteraction += value;
        } else if (["exercise", "hobbies", "sleep"].includes(name)) {
        scores.lifestyle += value;
        }
        totalScore += parseInt(input.value);
    });

    var feedback = "";
    // Provide feedback based on total score
    if (totalScore >= 50 && totalScore <= 60) {
        feedback = "You are doing well overall. Your responses indicate a balanced lifestyle and good mental health. Keep up the positive habits!";
    } else if (totalScore >= 40 && totalScore < 50) {
        feedback = "You are managing well, but there may be areas to improve, such as engaging in hobbies, maintaining relationships, or reducing stress. Consider prioritizing these areas.";
    } else if (totalScore >= 30 && totalScore < 40) {
        feedback = "Your responses suggest that you may be experiencing challenges in multiple areas. Identifying stressors and seeking support from friends, family, or professionals could be beneficial.";
    } else {
        feedback = "Your mental health may need immediate attention. It's important to reach out to a mental health professional to discuss your concerns and explore helpful strategies.";
    }

    let suggestions = "";

    if (scores.generalWellbeing > 9) {
        suggestions += "General Well-being: Consider practicing mindfulness, setting realistic goals, or delegating tasks to avoid feeling overwhelmed.";
    }

    if (scores.emotionalStates > 9) {
        suggestions += "<br />Emotional States: Try journaling your feelings, engaging in calming activities like yoga, or reaching out to a counselor if needed.";
    }

    if (scores.socialInteraction > 9) {
        suggestions += "<br />Social Interaction: Reach out to friends or family, join a community group, or consider volunteering to build social connections.";
    }

    if (scores.lifestyle > 9) {
        suggestions += "<br />Lifestyle and Activities: Incorporate small changes like taking short walks, exploring a new hobby, or setting a consistent sleep schedule.";
    }
    document.getElementById("feedback").innerHTML = feedback+'<br />'+suggestions;
}

// function calculateFeedback() {
//     const form = document.getElementById('questionnaire');
//     const formData = new FormData(form);

//     let totalScore = 0;
//     let responseCount = 0;

//     formData.forEach((value) => {
//         totalScore += parseInt(value);
//         responseCount++;
//     });

//     if (responseCount < 2) {
//         document.getElementById('feedback').innerText = "Please answer all questions.";
//         return;
//     }

//     let feedback = "";
//     if (totalScore <= 3) {
//         feedback = "You seem to be in a good mental state!";
//     } else if (totalScore <= 5) {
//         feedback = "Consider light activities to reduce stress.";
//     } else {
//         feedback = "You may need to take some rest and talk to a professional.";
//     }
//     document.getElementById('feedback').innerText = feedback;

//     const activities = [
//         "Meditation",
//         "A relaxing walk",
//         "Journaling your thoughts",
//         "Listening to calming music",
//         "Practicing deep breathing exercises"
//     ];
//     const randomActivity = activities[Math.floor(Math.random() * activities.length)];
//     document.getElementById('recommendation').innerText = "Recommended Activity: " + randomActivity;
// }