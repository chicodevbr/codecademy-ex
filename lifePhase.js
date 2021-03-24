// Write your function here:
const lifePhase = age => {
  if (age >= 0 && age <= 3){
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';    
  } else if (age >= 13 && age <= 19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else if (age >= 65 && age <= 140) {
    return 'senior citizen'
  } else {
    return 'This is not a valid age';
  }
};

console.log(lifePhase(0));
console.log(lifePhase(15));
console.log(lifePhase(45));
console.log(lifePhase(88));
console.log(lifePhase(137));
console.log(lifePhase(159));







// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!