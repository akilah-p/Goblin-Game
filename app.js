// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;
let goblins = [
    { id: 1, name: 'Terry', hp: 1 },
    { id: 2, name: 'Professor Goblin', hp: 4 },
];
let currentId = 3;

// - New goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //   - User has supplied a name and submitted the form
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    //   - Make a new goblin object with that user input

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

    //   - Add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});

function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;
    if (Math.random() < 0.33) {
        goblinData.hp--;
        alert('you hit ' + goblinData.name);
    } else {
        alert('you tried to hit ' + goblinData.name + ' but missed');
    }
    //  - possibly decrement player HP
    if (Math.random() < 0.5) {
        playerHP--;
        alert(goblinData.name + ' hit you!');
    } else {
        alert(goblinData.name + ' tried to hit you but missed!');
    }

    if (goblinData.hp === 0) {
        defeatedGoblinsCount++;
    }

    if (playerHP === 0) {
        adventurerImgEl.classList.add('game-over');
        alert('GAME OVER!!!');
    }
    //     - update the DOM with new goblin, player, and defeated goblin state.
    adventurerHPEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedGoblinsCount;

    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
    faceEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';
}

function displayGoblins() {
    //   - "update a list"
    //     - clear out the list DOM
    goblinListEl.textContent = '';

    //     - loop through the goblins
    for (let goblin of goblins) {
        //     - render a new goblin DOM element for each item
        const goblinEl = renderGoblin(goblin);
        // - append that element to the HTML

        // now that we have a goblin element, we can make each goblin clickable like so
        // this is a DYNAMIC EVENT LISTENER. we make a new event listener for every goblin!
        // an event listener is a property just like anything else. just like text content, just like style. we add it to elements.
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();