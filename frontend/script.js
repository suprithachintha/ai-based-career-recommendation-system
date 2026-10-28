```javascript
// AI-Based Career Recommendation System
// Frontend JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        const name = document.getElementById("name").value.trim();
        const interests = document.getElementById("interests").value;
        const skills = document.getElementById("skills").value;
        const subjects = document.getElementById("subjects").value;

        if (!name || !interests || !skills || !subjects) {
            event.preventDefault();
            alert("Please fill in all the fields.");
            return;
        }

        // Display a loading message while the form is submitted.
        const button = form.querySelector("button[type='submit']");

        if (button) {
            button.textContent = "Finding your career matches...";
            button.disabled = true;
        }
    });

});


// Career recommendation function
function recommendCareer(interest, skill, subject) {

    let career = "";
    let description = "";

    if (interest === "technology" && skill === "programming") {
        career = "Software Developer";
        description =
            "Learn programming, databases, and software development.";
    }

    else if (interest === "technology" && skill === "analysis") {
        career = "Data Analyst";
        description =
            "Explore data analysis, statistics, SQL, and Python.";
    }

    else if (interest === "technology") {
        career = "Cybersecurity Analyst";
        description =
            "Explore computer networks and cybersecurity.";
    }

    else if (interest === "design") {
        career = "UI/UX Designer";
        description =
            "Learn visual design, user experience, and prototyping.";
    }

    else if (interest === "business") {
        career = "Business Analyst";
        description =
            "Develop analytical, communication, and business skills.";
    }

    else if (interest === "health") {
        career = "Healthcare Professional";
        description =
            "Explore healthcare careers and their required qualifications.";
    }

    else if (interest === "teaching") {
        career = "Teacher";
        description =
            "Develop subject knowledge and communication skills.";
    }

    else if (interest === "research") {
        career = "Research Analyst";
        description =
            "Develop research and critical-thinking skills.";
    }

    else if (subject === "computer science") {
        career = "IT Professional";
        description =
            "Explore software development, databases, and networking.";
    }

    else {
        career = "Career Researcher";
        description =
            "Explore careers that match your interests and abilities.";
    }

    return {
        career: career,
        description: description
    };
}
```