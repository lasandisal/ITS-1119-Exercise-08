const letterElements = [
    document.getElementById('a'),
    document.getElementById('b'),
    document.getElementById('c'),
    document.getElementById('d'),
    document.getElementById('e'),
    document.getElementById('f')
];

let queue = ['A', 'B', 'C', 'D', 'E', 'F'];

function updateQueueDisplay() {
    letterElements.forEach((element, index) => {
        element.innerText = queue[index];
    });
}

function rotateQueue() {
    const shiftedLetter = queue.shift();
    queue.push(shiftedLetter);
    
    updateQueueDisplay();
}

updateQueueDisplay();

setInterval(rotateQueue, 1500);