//Betragt listen [7,4,5,6,9,1,2,8,3,10]. 
//Skriv et program, der finder det største element i en liste, printer det i konsollen og fjerner det fra listen.
//Gentag denne procedure (gerne med en løkke inde i en løkke) indtil listen er tom.
//Brug evt. en eller flere af operationerne push,unshift,pop,shift,slice. Hvad har du opnået

liste = [7,4,5,6,9,1,2,8,3,10];
lLength = liste.length;

let j = 0;
let index;


for (let l=0; l<lLength; l++){
  for (let i=0; i<lLength; i++){
    if (j<liste[i]){
      j = liste[i];
      index = i;
    }
  }
  console.log(j);
  liste.splice(index, 1);
  console.log(liste);
  j = 0;
}

