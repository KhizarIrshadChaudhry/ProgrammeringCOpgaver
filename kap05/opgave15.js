//Lav en løkke, der summer de første 100 tal og printer dem i konsollen.

//Så bascially 100 fakultet

function fakultet(int){
  let sum = 0;
  for (let i=1; i<=int; i++) {
    sum += i;
  }
  console.log(sum);
}


fakultet(100);
