var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  let in_order_card_values = [];
  let random_card_values = [];
  let random_index;

  for (i = 0; i < 8; i++) {
    in_order_card_values.push(i+1);
    in_order_card_values.push(i+1);
  }

  while (in_order_card_values.length > 0) {
    random_index = Math.floor(Math.random() * 16);
    if (typeof in_order_card_values[random_index] === "number") {
      random_card_values.push(in_order_card_values[random_index]);
      in_order_card_values.splice(random_index, 1);
    }
  }

  return random_card_values;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
