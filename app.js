//data types - numbers, strings
console.log('hello world');


let answer = '42';
let dogName = 'Ziti';
console.log(`My dogs name is ${dogName}. ${dogName} is very cute.`);

//arrays
let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors[0]);

//objects
let Ziti = {
    name: 'Ziti',
    age: 15,
    breed: ['Ragdoll', 'Siamese', 'Persian'],
};
console.log(Ziti);



const nametag = document.getElementById('nametag');
nametag.style.backgroundColor = 'purple';

const button = document.getElementById('update-button');
button.addEventListener('click', ()=>{
    console.log('I am clicking the name display button');
    const nameDisplay = document.getElementById('name-display');
    console.log(nameDisplay);
    // nameDisplay.textContent = 'Evan';
    const nameInput = document.getElementById('name-input'); 
    nameDisplay.style.color = 'red';
    nameDisplay.textContent = nameInput.value ;
})

const pronounButton = document.getElementById('pronoun-button');
pronounButton.addEventListener('click', ()=>{
    console.log('I am clicking the pronoun display button');
    const pronounDisplay = document.getElementById('pronouns');
    console.log(pronounDisplay);
    const pronounInput = document.getElementById("pronoun-input");
    pronounDisplay.textContent = pronounInput.value;
    




})

