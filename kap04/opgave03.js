//Overvej og følgende udtryk er sande eller falske og tjek efter med det der printes i konsollen:

console.log(2 == 2 && 2 == '2'); //Output: true | Begge påstande er sandt
console.log(2 == 2 && 2 == '2' && 2 === '2');  //Output: false | Den sidste påstand er false, da strict equality operatoren chekker for type
console.log(2 == 2 && 2 == '2' || 2!=2);  //Output: true | den første del er sandt, den sidste del er falsk dog er det ligegyldigt da der er en OR operator imellem
console.log('hello' != 'Hello' && 'hello' !== 'Hello'); //Output: true | da begge påstande er sande
console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo'); //Output: true 
console.log(2 === 2 || 2!=3 ); //true | kun en af påstandene skal være sande, dog er begge sande
console.log(2 === 2 || 2!='2' && (true || false)); //true | påstand 1, 2 og 3 alle er sande