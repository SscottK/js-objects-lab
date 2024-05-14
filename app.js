const pokemon = require('./data.js')



const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }


/*
Exercise 1
*/
//console.dir(pokemon, { maxArrayLength: null })
let myPokemon = 0;
pokemon.forEach((mon) => {
    if (mon.number === 59) {
        myPokemon = pokemon.indexOf(mon);
    }
});
let myPokemonName = pokemon[myPokemon].name;
console.log('Exercise 1 Result:', myPokemonName);

/*
Exercise 2
*/
//console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = 'Easy';

console.log('Exercise 3 Result:', game.difficulty);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

pokemon.forEach((mon) => {
    if (mon.starter) {
        console.log(mon);
        if (mon.type === 'fire') {
            game.party.push(mon);
        }
    }
});


console.log('Exercise 4 Result:', game.party );

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

pokemon.forEach((mon) => {
    if (mon.name === 'Gyarados') {
        game.party.push(mon);
    };
    if (mon.name === 'Scyther') {
        game.party.push(mon);
    };
    if (mon.name === 'Nidoking') {
        game.party.push(mon);
    }
});

console.log('Exercise 5 Result:', game.party);

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?
        the compare function uses what ever criteria it is given to return an orderd array. 

looked at the documentin at the site below for help
-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#comparefn
Solve Exercise 6 here:
*/

game.party.sort((mon1, mon2) => mon2.hp - mon1.hp);

console.log('Exercise 6 Result:', game.party);

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/
game.gyms.forEach((gym) => {
    if (gym.difficulty < 3) {
        gym.completed = true
    }
})

console.log('Exercise 7 Result:', game.gyms);




console.log('Exercise 8 Result:', );
console.log('Exercise 9 Result:', );
console.log('Exercise 10 Result:', );
console.log('Exercise 11 Result:', );
console.log('Exercise 12 Result:', );
console.log('Exercise 13 Result:', );
console.log('Exercise 14 Result:', );
console.log('Exercise 15 Result:', );
console.log('Exercise 16 Result:', );
console.log('Exercise 17 Result:', );