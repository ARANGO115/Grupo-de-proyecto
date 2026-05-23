function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(daysBack) {
    let d = new Date();
    d.setDate(d.getDate() - randomInt(0, daysBack));
    return d;}