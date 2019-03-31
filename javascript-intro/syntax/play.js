const name = 'Mili';
let age = 37;
const hasHobbies = true;

age = 26;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return 'Name is ' + userName +
          ', age is ' + userAge +
          ' and the user has hobbies: ' + userHasHobby;
}

console.log(summarizeUser(name, age, hasHobbies));

// Objects
const person = {
  name : 'Mila',
  age : 37,
  greet: function() {
    console.log('Hi, I am ' + this.name);
  }
};

// Objects hippie mode
const hippiePerson = {
  name : 'Mila',
  age : 37,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

/* person.greet();
hippiePerson.greet(); */

const printName = (personData) => {
  console.log(personData.name);
}
printName(person);


const printName2 = ({name, age}) => {
  console.log(name + ' ' + age);
}
printName2(person);
/* const copiedPerson = { ...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking', 'Running', 'Reading'];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map(hobby => {
  return 'Hobby: ' + hobby;
}));
console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
  return args;
}; */