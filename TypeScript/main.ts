let message = 'Hello Earth!';
console.log(message);

let isBoolean: boolean = true;
let total: number = 100;
let myName: string = 'John Doe';

let sentence: string = `My name is ${myName}. I am a beginner in TypeScript`;
console.log(sentence);

console.log(myName.toLocaleUpperCase());

let isNew: boolean = undefined;
let isNew2: string = null;

// Array syntaxes
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3, 4, 5];

console.log(list1, list2);

// Tuble
let person1: [string, number] = ['chris', 22];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

let multiType: number | boolean;
multiType = 20;
multiType = true;

// An object as a Type

function fullname(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};

fullname(p);
