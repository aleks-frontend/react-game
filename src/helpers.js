export function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    let lastHole;

    if ( lastHole === hole ) {
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}

export function randomMole(moles) {
    const totalMoles = moles.length;
    const moleIndex = Math.floor(Math.random() * totalMoles) + 1;
    let lastMole;

    if ( lastMole === moleIndex ) {
        return randomMole();
    }

    lastMole = moleIndex;
    const moleInfo = {
        total: totalMoles,
        index: moleIndex
    };

    return moleInfo;
}

export function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}