function writeCards( names, event ){
  let thankYouCards = []
  for ( let i = 0; i < names.length; i++ ) {
      thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
  return thankYouCards
}

function countDown(i){
  while ( i > 0) {
    console.log(i);
    i -= 1;
  }
  console.log(i);
}
