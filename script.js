/* --------------- Sum of Numbers Code ------------------

//create a new variable called sum and set it to zero
var sum = 0;

// Get a value with a prompt
var val = prompt("Please enter a number!");

// Run the loop a number of times equal to the entry
for (var i = 0; i <= val; i++) {
	sum += i;	
};

// print to the console log
console.log(sum);
*/

/* --------------- String Game ------------------
	
var finalEntry = '';
var addEntry;
let answer = prompt('Do you want to play?');

if (answer === 'no') {
	console.log('Nothing Entered.');
} else {
	do {
		addEntry = prompt('Enter a word.');
		finalEntry += (addEntry + ' ');
		answer = prompt('Do you want to play again?');
	}
	while (answer === 'yes');
	
	// Print the final words
	console.log(finalEntry);
};
*/

// ---------------- More Word Games ----------------

/*
const defaultOutput = "Hello. My name is ";
const exclamationPoint = "!";
var greeting;
let answer = prompt("Would you like to print your name?");

//Declare a function to get an answer
function getAnswer () {
  answer = prompt("Would you like to print this again?");
}

if (answer === "yes") {
	let yourName = prompt("What is your name?");
	greeting = defaultOutput + yourName;
	console.log(greeting);

	while (answer) {
		if (answer === "no") {
			console.log("Okay, see you later!");
			answer = null;

		} else if (answer === "yes") {
			greeting += exclamationPoint;
			console.log(greeting);
			getAnswer();

		} else {
			console.log("That's not a valid Entry!")
			getAnswer();
		}
	}
} else if (answer === "no") {
		console.log("Okay, see you later!");
    answer = null;

} else {
  console.log("That's not a valid Entry!");
}

*/

// ---------------- What to Eat ----------------

const foodSuggestion = ['eggs & toast', 'a salad', 'chicken & rice'];
const mealType = ['Breakfast', 'Lunch', 'Dinner'];
var timeOfDay = prompt("What time of day is it?");

function whatYouShouldEat(tod, num) {
	console.log("Since it is " + tod + ", you should be eating " + mealType[num] + ". We suggest " + foodSuggestion[num] + ".");
}

switch(timeOfDay) {
	case "morning":
		whatYouShouldEat(timeOfDay, 0);
		break;
	case "noon":
		whatYouShouldEat(timeOfDay, 1);
		break;
	case "evening":
		whatYouShouldEat(timeOfDay, 2);
		break;
	default:
		console.log("That is not a valid time of day.");
}

