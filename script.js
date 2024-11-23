const funFacts = [
    "I've hiked in 5 different national parks!",
    "My favorite hiking trail is in Yosemite National Park",
    "I once saw three bears during a single hike",
    "I've collected rocks from every park I've visited",
    "My longest hike was 15 miles in one day",
    "I've camped under the stars in Joshua Tree National Park",
    "I can identify over 20 different types of wildflowers",
    "I've reached the summit of Mount Whitney",
    "I've hiked in all four seasons",
    "My hiking boots have covered over 500 miles of trails",
    "I've photographed 30 different species of birds while hiking",
    "My backpack has visited 12 different states",
    "I once hiked through a thunderstorm in the Rockies",
    "I've completed the entire Appalachian Trail",
    "My favorite hiking snack is trail mix with extra M&Ms"
];

const factDisplay = document.getElementById('fact-display');
const newFactButton = document.getElementById('new-fact');
const shareFactButton = document.getElementById('share-fact');

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
}

function shareFact() {
    if (navigator.share) {
        navigator.share({
            title: 'Fun Fact About Me',
            text: factDisplay.textContent,
            url: window.location.href
        })
        .catch(console.error);
    } else {
        alert('Sharing is not supported on this browser');
    }
}

newFactButton.addEventListener('click', showRandomFact);
shareFactButton.addEventListener('click', shareFact);

showRandomFact();
