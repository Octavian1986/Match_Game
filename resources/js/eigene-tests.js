function generateCardValues () {
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
  console.log(random_card_values);
};

generateCardValues();