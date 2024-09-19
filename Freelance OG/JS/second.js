// Typing effect function for the title
const title = document.getElementById("mainTitle");
let titleText = "Welcome to Skill-Link";
let index = 0;

function typeTitle() {
    if (index < titleText.length) {
        title.innerHTML += titleText.charAt(index);
        index++;
        setTimeout(typeTitle, 100);
    }
}

typeTitle();

// Button functionality for interactions
document.getElementById('learnMore').addEventListener('click', function() {
    alert("Learn more about freelancing without prior skills!");
});

document.getElementById('certification').addEventListener('click', function() {
    alert("Become a certified freelancer!");
});

document.getElementById('showcase').addEventListener('click', function() {
    alert("Showcase your skills and get noticed!");
});

document.getElementById('earn').addEventListener('click', function() {
    alert("Start earning as a successful freelancer!");
});
