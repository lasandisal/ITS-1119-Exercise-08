const container = document.getElementById('queue-container');
const numberOfPeople = 6;
const spacing = 160; 

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const people = [];

for (let i = 0; i < numberOfPeople; i++) {
    const person = document.createElement('div');
    person.classList.add('character');
    
    const label = document.createElement('span');
    label.classList.add('letter-label');
    label.innerText = alphabet[i];
    person.appendChild(label);
    
    let fixedX = 50 + (i * spacing);
    person.style.left = fixedX + 'px';
    
    person.style.filter = `hue-rotate(${i * 60}deg)`;
    person.style.animationDelay = `${Math.random() * -1}s`;
    
    container.appendChild(person);

    const personObj = {
        element: person,
        labelElement: label,
        id: i 
    };

    person.addEventListener('click', () => {
        updateSequence(i);
    });

    people.push(personObj);
}

function updateSequence(clickedId) {
    people.forEach((p) => {
        let newIndex = (p.id - clickedId + numberOfPeople) % numberOfPeople;
        p.labelElement.innerText = alphabet[newIndex];
    });
}

