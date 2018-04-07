var MatchGame = {}

/*
Sets up a new game after HTML document has loaded.
Renders a 4x4 board of cards.
*/

$(document).ready(function () {

  var $game = $("game");
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);

});

/*
Generates and returns an array of matching card values.
*/

MatchGame.generateCardValues = () => {
  let in_order_card_values = [];
  let random_card_values = [];
  let random_index;

  for (i = 0; i < 8; i++) {
    in_order_card_values.push(i+1);
    in_order_card_values.push(i+1);
  }

  for (i = 0; i < 16; i++) {
    random_index = Math.floor(Math.random() * (16-i));
    random_card_values.push(in_order_card_values[random_index]);
    in_order_card_values.splice(random_index, 1);
  }

  return random_card_values;
};

/*
Converts card values to jQuery card objects and adds them to the supplied game
object.
*/

MatchGame.renderCards = function(random_card_values, $game) {
  let cardColors = ["hsl(25, 85%, 65%)", "hsl(55, 85%, 65%)", "hsl(90, 85%, 65%)",
  "hsl(160, 85%, 65%)", "hsl(220, 85%, 65%)", "hsl(265, 85%, 65%)",
  "hsl(310, 85%, 65%)", "hsl(360, 85%, 65%)"];

  $game.empty();

  for (i = 0; i < 16; i++) {

    var $card = $('<div class="col-xs-3 card"></div>');
    var value = random_card_values[i];
    var color = cardColors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false,
    }
    $card.data(data);
    $game.append($card);
  }

};

/*
Flips over a given card and checks to see if two cards are flipped over.
Updates styles on flipped cards depending whether they are a match or not.
*/

MatchGame.flipCard = function($card, $game) {

};
