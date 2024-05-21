const food = document.querySelector('#food');
const entertainment = document.querySelector('#entertainment');
const games = document.querySelector('#games');
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
            idea: "Go to a BBQ restaurant"
        },
        {
            category: "entertainment",
            idea: "Go see a movie"
        },
        {
            category: "games",
            idea: "Go Bowling"
        },
        {
            category: "athome",
            idea: "Cuddle with a movie"
        },
        {
            category: "outdoors",
            idea: "Go on a hike"
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




