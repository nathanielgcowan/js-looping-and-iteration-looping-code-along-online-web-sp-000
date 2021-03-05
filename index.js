const gifts = ['Lisa', 'Kaitlin', 'Jan' ];

function writeCards(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Thank you, ${gifts[i]} for the wonderful birthday card!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

writeCards(gifts);
