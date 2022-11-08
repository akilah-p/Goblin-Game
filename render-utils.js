export function renderGem(gemData) {
    const gemEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    gemEl.classList.add('homeworld-gem');

    nameEl.textContent = gemData.name;
    hpEl.id = `gem-hp-${gemData.id}`;
}