//Overvej i det følgende hvad der printes i konsollen:

// =
console.log(2 == 2); //Output: true | '==' 2 er ligemed 2.
console.log(2 == '2'); //Output: true | loose equality operatoren '==' diskriminere ikke mellem variabel typer. 
// !=
console.log(3 != 2); //Output: true | Not-operatoren != checkker hvis om 3 ikke er lige med 2, hvilket er sandt.
console.log('hello' != 'Hello'); //Output: true | Da 'h' er ikke ligemed 'H', grundet case sensitivity
//===
console.log(2 === 2); //Output: true | true da integar 2 er ligemed integar 2.
console.log(2 === '2'); //Output: false | Da operatoren strict equality operatoren '===' checker også for type, og integar og string er forskellige typer
// !==
console.log(2 !== '2'); //Output: true | da 2 er en int og '2' er en string
console.log(2 !== 2); // Output: false | da int 2 er ligemed int 2