"use strict";
//Question 1: Install Node.js, TypeScript and VS Code on your computer.
Object.defineProperty(exports, "__esModule", { value: true });
//Question 2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
let message = `Hello${personName}, Whould you like to learn some TypeScript today?`;
console.log(message);
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personsName = "alice";
console.log(personsName.toUpperCase()); //Shows all letters in captital
console.log(personsName.toLowerCase()); //Shows all letters in small letters
console.log(personsName.charAt(0).toUpperCase() + personsName.slice(1).toLowerCase()); //Shows only first letter in captial
//Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Imran Khan once said, The more you study, the more you know how less you know.`;");
//Question 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Imran Khan";
let quote = `${famousPerson} once said, The more you study, the more you know how less you know.`;
console.log(quote);
//Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person_name = "\t \nAlice\t \n";
console.log(person_name); //With whitespace
console.log(person_name.trim()); //Without Whitespace
//Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(6 + 2); //addition
console.log(10 - 2); //subtraction
console.log(4 * 2); //multiplication
console.log(16 / 2); //division
//Question 8: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//Question 9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}`);
//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
let myName = "Ayesha"; //My name
let date = 11; //Todays date
//Question 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let myFriends = ["Alice", "Emma", "Lisa"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
//Question 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let PersonsName = ["Alice", "Emma", "Lisa"];
for (let i = 0; i < PersonsName.length; i++) {
    console.log(`Hello ${PersonsName[i]}, How are you?`);
}
;
//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transport = ["Toyota Fortuner", "Honda BRV", "Audi Q8"];
transport.forEach((transport) => {
    console.log(`I would like to own a ${transport}`);
});
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest = ["Elon Musk", "Albert Einstein", "Bill Gates"];
guest.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me for a dinner?`);
});
//Question 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let unableToAttend = "Albert Einstein";
console.log(`${unableToAttend} Can't make it to Dinner`);
//New Guest
let newGuest = "Mark Zuckerberg";
guest[guest.indexOf(unableToAttend)] = newGuest;
console.log(`Dear ${newGuest}, Would you like to join me for Dinner?`);
//Question 16:  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("Great News! I have found a bigger Dinner Table");
//Adding more Guest
guest.unshift("Steve Jobs");
guest.splice(2, 0, "Jeff Bezos");
guest.push("Jensen Huang");
guest.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me for a Dinner?`);
});
//Question 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// console.log("The new Dinner table won’t arrive in time for the dinner, and i can invite only two guests.");
// while (guest.length > 2){
//   let removedGuest = guest.pop();
//   console.log(`Sorry ${removedGuest}, i can't invite you to the dinner!`);
// };
// guest.forEach(guest => {
// console.log(`Dear ${guest}, you're still invited`);
// });
// guest.splice(0, 2);
// console.log(guest);// Shows an empty list
//Question 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// let places:  string[] = ["Japan", "Switzerland", "London", "Maldives"];
// console.log("Original order:", places);
// console.log("Alphabetical order:", [...places].sort());
// console.log("Original order:", places);
// console.log("Reverse alphabetical order:", [...places].sort().reverse());
// console.log("Original order:", places);
// places.reverse();
// console.log("Reversed order:", places);
// places.reverse();
// console.log("Original order:", places);
// places.sort();
// console.log("Alpahbetical order:", places);
// places.reverse();
// console.log("Reverse Alphabetical order:", places);
//Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// let guest: string[] = ["Albert Einstein", " Elon Musk", " Bill Gates", " Steve Jobs", " Jensen Huang"];
// console.log(`I am iniviting ${guest} people to the dinner`);
//Question 20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let Countries: string[] = ["Japan", "Switzerland", "California", "Turkey"];
// console.log(`Countries i would like to visit ${Countries}`);
//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let shirt: { size: string; color: string; price: number } = {
//   size: "Small",
//   color: "Black",
//   price: 1000,
// };
// console.log(`Shirt Details: This ${shirt.color} Shirt in ${shirt.size} Size is for ${shirt.price}rs.`);
//Question 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let arr:string[] = ["Black", "White", "Gray", "Pink"];
// console.log(arr[5]); //undefined
// console.log(arr[2]); //Gray
//Question 23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'Toyota';
// console.log("Is car == 'Toyota' ? I predict True.");
// console.log(car == 'Toyota');  //True
// console.log("Is car == 'G-Wagon' ? I predict False.");
// console.log(car == 'G-Wagon');  //False
// let country = 'Switzerland';
// console.log("Is country == 'Switzerland ? I predict True.");
// console.log(country == 'Switzerland'); //True
// console.log("Is country == 'Japan ? I predict False.");
// console.log(country == 'Japan'); //False
// let fruit = 'Mango';
// console.log("Is fruit == 'Mango ? I predict True.");
// console.log(fruit == 'Mango'); //True
// console.log("Is fruit == 'Apple ? I predict False.");
// console.log(fruit == 'Apple'); //False
// let color = 'Black';
// console.log("Is color == 'Black ? I predict True.");
// console.log(color == 'Black'); //True
// console.log("Is color == 'Gray ? I predict False.");
// console.log(color == 'Gray'); //False
// let city = 'Karachi';
// console.log("Is city == 'Karachi ? I predict True.");
// console.log(color == 'Karachi'); //True
// console.log("Is city == 'Lahore ? I predict False.");
// console.log(city == 'Lahore'); //False
//Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // Tests for equality and inequality with strings
// console.log("Testing equality with strings:");
// console.log("apple" == "apple"); // True
// // console.log("apple" == "Apple"); // False
// // Using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple");
// // Numerical tests
// console.log("Numerical tests:");
// console.log( 10 > 5);
// console.log( 10 < 5);
// // Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log( true && false);
// console.log( true || false);
// // Test whether an item is in a array
// let fruits: string[] = ["Apple", "Mango", "Orange"];
// console.log('is "Apple" in fruits');
// console.log(fruits.includes("Apple"));
// // Test whether an item is not in a array
// console.log('is "Grapes" not in fruits');
// console.log(!fruits.includes("Grapes"));
//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// let alien_color:string = "Red";
// // if (alien_color == "Green"){
// //     console.log("You earned 5 points");
// // };
// //Version that fails (no output):
// alien_color = "red";
// if (alien_color == "green") {
//     // No output because the condition is false
// }
//Question 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// let Alien:string = "Green";
// if (Alien == "Green"){
//     console.log("You earned 5 points");
// }else{
//     console.log("You earned 10 points");
// };
// //version that runs else block
// let Alien1:string = "Yellow";
// if (Alien1 == "Green"){
//     console.log("You earned 5 points");
// }else{
//     console.log("You earned 10 points");
// };
//Question 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// // Green Version
// let Alien_G: string = "Green";
// if(Alien_G == "Green"){
//     console.log("You earned 5 points");
// }else if(Alien_G == "Yellow"){
//     console.log("You earned 10 points");
// }else if (Alien_G == "Red"){
//     console.log("You earned 15 points")
// };
// //Yellow Version
// let Alien_Y: string = "Yellow";
// if(Alien_Y == "Green"){
//     console.log("You earned 5 points");
// }else if(Alien_Y == "Yellow"){
//     console.log("You earned 10 points");
// }else if (Alien_Y == "Red"){
//     console.log("You earned 15 points")
// };
// //Red Version
// let Alien_R: string = "Red";
// if(Alien_R == "Green"){
//     console.log("You earned 5 points");
// }else if(Alien_R == "Yellow"){
//     console.log("You earned 10 points");
// }else if (Alien_R == "Red"){
//     console.log("You earned 15 points")
// };
//Question 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// let person_age: number = 20;
// if (person_age < 2) {
//   console.log("The Person is a baby");
// } else if (person_age < 4) {
//   console.log("The Person is a Toddler");
// } else if (person_age < 13) {
//   console.log("The Person is a Kid");
// } else if (person_age <= 20) {
//   console.log("The Person is Teenager");
// } else if (person_age < 65) {
//   console.log("The Person is an Adult");
// } else {
//   console.log("The Person is an Elder");
// };
//Question 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// let favorite_fruits:string[]= ["Mango", "Orange", "Strawberry", "Watermelon"];
// if(favorite_fruits.includes("Mango")){
//     console.log("You really like Mangos!");
// }if (favorite_fruits.includes("Orange")){
//     console.log("You really like Oranges!");
// }if (favorite_fruits.includes("Strawberry")){
//     console.log("You really like Strawberry!");
// }if (favorite_fruits.includes("Watermelon")){
//     console.log("You really like Watermelon!");
// };
//Question 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
// usernames.forEach(username => {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// });
//Question 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// let usernames:string[] = [];
// if (usernames.length == 0){
//     console.log("We need to find some users!");
// }
// else {
//     //Greet users
// } ;
//Question 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "Admin", "User9"];
// new_users.forEach((newUser) => {
//     if (
//         current_users.some(
//             (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//         )) {
//         console.log(`${newUser} this username is taken.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });
//Question 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(number =>{
//     let suffix = "th";
//     if(number == 1){
//         suffix = "st";
//     } else if (number == 2){
//         suffix = "nd";
//     }else if(number == 3){
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// }); 
//Question 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// let pizzas: string[] = ["Pepperoni Pizza", "Double Cheese Pizza", "Chicken Tikka Pizza"];
// pizzas.forEach(pizza =>{
//     console.log(`i like ${pizza}`);
// });
// console.log("I really love Pizza!");
//Question 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animals: string[] = ["Cat", "Rabbit", "Goat"];
// animals.forEach(animal =>{
//     console.log(`A ${animal} would make a great pet`);
// });
// console.log("Any of these animals would make a great pet!");
//Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: string, text:string){
//     console.log(`Making a ${size} T-Shirt with ${text} written on it`);
// };
// make_shirt("Small", "Do it");
//Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size:string= "Large", text:string= "Never Give Up!")
// {
//     console.log(`Making a "${size}" T-Shirt with "${text}" written on it`);
// };
// make_shirt(); //Deafault
// make_shirt("Small");
// make_shirt("Small", "I love Coding!");
//Question 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city: string, country: string = "Pakistan") {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("Karachi");
// describe_city("Islamabad");
// describe_city("Tokyo", "Japan");
// describe_city("Istanbul", "Turkey");
// describe_city("Seoul", "Korea");
//Question 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city: string, country: string){
//     return `${city}, ${country}`;
// };
// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("Seoul", "Korea"));
// console.log(city_country("Tokyo", "Japan"));
//Question 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist: string, title: string, tracks?: number) {
//     let album: { artist: string, title: string, tracks?: number } = { artist, title };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist 1", "The 1st Album"));
// console.log(make_album("Artist 2", "The 2nd Album"));
// console.log(make_album("Artist 3", "The 3rd Album", 12));
//Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Charles", "Chris", "Taylor"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
;
show_magicians(magicians);
//Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
//Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let Magicians = ["Alice", "David", "Chris"];
function make_great2(magicians) {
    let greatMagicians = [];
    Magicians.forEach(Magician => {
        greatMagicians.push(`${Magician} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great2(Magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(Magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
//Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function make_sandwich(...items:string[]){
//     console.log(`Making Sandwich with ${items.join(', ')}.`);
// }
// make_sandwich("Lettuce", "Cheese");
// make_sandwich("Egg", "Mayo");
// make_sandwich("Ham", "Tomato");
//Question 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// function make_car(manufacturer: string, model: string, ...options:[string, any][]): {[key:string]: any} {
//     let car: {[key:string]: any} = { manufacturer, model};
//     options.forEach(([key, value]) => {
//         car[key] = value;
//     });
//     return car;
// }
// let car1 = make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]);
// let car2 = make_car("Honda", "City", ["color", "black"], ["sunroof", true]);
// console.log(car1);
// console.log(car2);
