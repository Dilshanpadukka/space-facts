// Array of fun facts - customize these with your own facts
const funFacts = [
    "I've hiked in 5 different national parks!",
    "My favorite hiking trail is in Yosemite National Park",
    "I once saw three bears during a single hike",
    "I've collected rocks from every park I've visited",
    "My longest hike was 15 miles in one day"
];

// Get DOM elements
const factDisplay = document.getElementById('fact-display');
const newFactButton = document.getElementById('new-fact');
const shareFactButton = document.getElementById('share-fact');

// Function to display random fact
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
}

// Function to share fact
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

// Event listeners
newFactButton.addEventListener('click', showRandomFact);
shareFactButton.addEventListener('click', shareFact);

// Show initial fact
showRandomFact();
