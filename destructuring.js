const person = {
  first: 'sample',
  last: 'FS',
  country: 'India',
  city: 'India',
  twitter: '@India'
};

//ES5 assignment
const first_es5 = person.first;
const last_es5 = person.last;

console.log("-------------ES5 syntax---------------");
console.log("The Value of first property :" + first_es5); //sample
console.log("The Value of second property :" + last_es5);//FS

//ES6 Assignment
console.log("-------------ES6 syntax---------------");

const {first,last} = person ;
console.log("The Value of first property :" + first); //sample
console.log("The Value of second property :" + last);//FS

const {first : firstname,last:lastname} = person ;
console.log("The Value of first property :" + firstname); //sample
console.log("The Value of second property :" + lastname);//FS