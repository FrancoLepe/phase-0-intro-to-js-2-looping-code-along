// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
   
}
const gifts = ["teddy bear","drone","doll"];
function wrapGifts(gifts){
    for(let i =0; i <gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
    }
    return gifts;
}
wrapGifts(gifts);

const cards =(["Tony","Mark","Jeff"],"surprise")
function writeCards(cards){
    const light=[]
    for(let i=0; i < cards.length; i++){
        light.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return light;

}
writeCards(["Guadalupe","Ollie","Aki"],"cards");

function countDown(num) {
while (num >= 0) {
  console.log(num);
  num--
}
}


