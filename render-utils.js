export function renderGem(gemData) {
    const gemEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    gemEl.classList.add('homeworld-gem');

    nameEl.textContent = gemData.name;
    hpEl.id = `gem-hp-${gemData.id}`;
    hpEl.textContent = gemData.hp < 0 ? 0 : gemData.hp;

    faceEl.id = `gem-face-${gemData.id}`;
    faceEl.textContent = gemData.hp > 0 ? '👹' : '💥';

    if (gemData.hp < 0) {
        gemEl.classList.add('dead');
    }

    gemEl.append(nameEl, faceEl, hpEl);

    return gemEl;
}