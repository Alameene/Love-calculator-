function generateConfession() {
    var name = document.getElementById('name').value;
    var crush = document.getElementById('crush').value;
    
    if (name.trim() === '' || crush.trim() === '') {
        alert('Please enter your name and your crush\'s name.');
        return;
    }

    var confession = [
        `I've been thinking about you a lot lately, ${crush}.`,
        `Every time I see you, my heart skips a beat, ${crush}.`,
        `I can't stop smiling whenever I'm around you, ${crush}.`,
        `You make my world brighter, ${crush}.`,
        `I never believed in love at first sight until I met you, ${crush}.`,
        `Life is so much better with you in it, ${crush}.`,
        `I'm completely and utterly in awe of you, ${crush}.`,
        `You're the most amazing person I've ever met, ${crush}.`,
        `I just wanted to let you know how much I appreciate you, ${crush}.`,
        `You're the best thing that's ever happened to me, ${crush}.`
    ];

    var randomIndex = Math.floor(Math.random() * confession.length);
    var generatedConfession = confession[randomIndex];
    
    var confessionDiv = document.getElementById('confession');
    confessionDiv.innerHTML = `"${generatedConfession}" - ${name}`;
}

function calculateLove() {
    var name = document.getElementById('name').value.trim().toLowerCase();
    var crush = document.getElementById('crush').value.trim().toLowerCase();

    var totalLetters = name.length + crush.length;
    var loveScore = 0;

    for (var i = 0; i < name.length; i++) {
        for (var j = 0; j < crush.length; j++) {
            if (name[i] === crush[j]) {
                loveScore += 20;
            }
        }
    }

    var loveResultDiv = document.getElementById('loveResult');

    var animationDuration = 2000; // Duration of the animation in milliseconds
    var animationInterval = animationDuration / (loveScore + 1); // Interval between each percentage increase
    var currentPercentage = 1;

    var animation = setInterval(function() {
        if (currentPercentage <= loveScore) {
            loveResultDiv.innerHTML = `Love Score: ${currentPercentage}%`;
            currentPercentage++;
        } else {
            clearInterval(animation);
        }
    }, animationInterval);
}
