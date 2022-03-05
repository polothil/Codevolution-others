var message = 'Hello Earth!';
console.log(message);
var isBoolean = true;
var total = 100;
var myName = 'John Doe';
var sentence = "My name is " + myName + ". I am a beginner in TypeScript";
console.log(sentence);
console.log(myName.toLocaleUpperCase());
var isNew = undefined;
var isNew2 = null;
// Array syntaxes
var list1 = [1, 2, 3];
var list2 = [1, 2, 3, 4, 5];
console.log(list1, list2);
// Tuble
var person1 = ['chris', 22];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var multiType;
multiType = 20;
multiType = true;
// An object as a Type
function fullname(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullname(p);
