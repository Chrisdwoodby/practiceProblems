function cakes(recipe, available) {
    // input: two objects
    // output: number of possible cakes
    // constraints: none
    
    // divide available by recipe where keys are the same in both
    // loop over recipe only
    // access avaliable from inside loop
    var numOfCakes = 0;
    for (var ingredients in recipe) {
      if (!available[ingredients]) {
        return 0;
      }
      if (numOfCakes === 0) {
        numOfCakes = Math.floor(available[ingredients] / recipe[ingredients]);
      } else if (numOfCakes > Math.floor(available[ingredients] / recipe[ingredients])) {
        numOfCakes = Math.floor(available[ingredients] / recipe[ingredients]);
      }
    }
    return numOfCakes
  }
    var recipe = {flour: 500, sugar: 200, eggs: 1};
    var available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
  