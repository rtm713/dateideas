const food = document.querySelector('#food');
const entertainment = document.querySelector('#entertainment');
const activities = document.querySelector('#activities');
const athome = document.querySelector('#athome');
const outdoors = document.querySelector('#outdoors');
const any = document.querySelector('#any');
const viewall = document.querySelector('#viewall');
const ideaButton = document.querySelectorAll('.ideaButton');

const answer = document.querySelector('#answer');

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.ideaButton');
    const answer = document.querySelector('#answer');

    const dateIdeaList = [
        {
            category: "food",
            idea: "Go to a BBQ restaurant (JackStack, LC's, Arthur Bryant's) "
        },
        {
            category: "food",
            idea: "Go to a mexican restaurant"
        },
        {
            category: "food",
            idea: "Go to a chinese restaurant (Chinese Buffet, Shanghai Express)"
        },
        {
            category: "food",
            idea: "Try a new restaurant"
        },
        {
            category: "food",
            idea: "Go to an american restaurant (Chili's, AppleBee's, 54th street, Red Door)"
        },
        {
            category: "entertainment",
            idea: "Go see a movie"
        },
        {
            category: "entertainment",
            idea: "Go to a museum"
        },
        {
            category: "entertainment",
            idea: "Go to the Zoo"
        },
        {
            category: "entertainment",
            idea: "Go to a comedy club"
        },
        {
            category: "activities",
            idea: "Go Bowling"
        },
        {
            category: "activities",
            idea: "Go play Laser tag"
        },
        {
            category: "activities",
            idea: "Go mini-golfing"
        },
        {
            category: "activities",
            idea: "Go go-carting"
        },
        {
            category: "activities",
            idea: "Go to Main Event"
        },
        {
            category: "athome",
            idea: "Cuddle with a movie"
        },
        {
            category: "athome",
            idea: "Start a fire in the firepit"
        },
        {
            category: "athome",
            idea: "Paint a painting"
        },
        {
            category: "athome",
            idea: "Cook together"
        },
        {
            category: "outdoors",
            idea: "Go on a hike"
        },
        {
            category: "outdoors",
            idea: "Go fishing"
        },
        {
            category: "outdoors",
            idea: "Ride the motorcycle"
        },
        {
            category: "outdoors",
            idea: "Have a picnic"
        },
        {
            category: "outdoors",
            idea: "Go camping"
        }
    ];

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.id;
            if (category === 'any') {
                const randomIndex = Math.floor(Math.random() * dateIdeaList.length);
                const randomDateIdea = dateIdeaList[randomIndex];
                answer.textContent = randomDateIdea.idea;
            } else if (category === 'viewall') {
                displayAllDateIdeas();
            } else {
                displayRandomDateIdea(category);
            }
        });
    });

    function displayRandomDateIdea(category) {
        const categoryIdeas = dateIdeaList.filter(idea => idea.category === category);
        const randomIndex = Math.floor(Math.random() * categoryIdeas.length);
        const randomDateIdea = categoryIdeas[randomIndex];
        answer.textContent = randomDateIdea.idea;
    }

    function displayAllDateIdeas() {
        const allIdeas = dateIdeaList.map(idea => idea.idea);
        const ul = document.createElement('ul');
    
        allIdeas.forEach(idea => {
            const li = document.createElement('li');
            li.textContent = idea;
            ul.appendChild(li);
        });
    
        answer.innerHTML = ''; // Clear previous content
        answer.appendChild(ul);
    }
});




