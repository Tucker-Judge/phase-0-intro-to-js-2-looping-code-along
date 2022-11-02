// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
*/
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}
Putain Ca me baise c'est fou
wrapGifts(gifts); */
function writeCards(brick , name) {
    const baguetteEtCiggarette = []
        for (let i = 0; i<brick.length; i++) {
        baguetteEtCiggarette.push(`Thank you, ${brick[i]}, for the wonderful ${name} gift!`)
    }
    return baguetteEtCiggarette
}

function countDown (num){
    let i = 0
    while (i <= num) {
        console.log(num - i)
        i++
    }
}