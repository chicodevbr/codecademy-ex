
const currentDate = new Date();
const theCurrentYear = currentDate.getFullYear();

const howOld = (age, year) => {
  const yearDifference = year - theCurrentYear
  const newAge = age + yearDifference
  const ageMama = theCurrentYear - 2017
  const newAgeMama = ageMama + yearDifference
    
  
  if (newAge < 0){
    const numberOfYears = yearDifference - year;
    return `The year ${year} was ${-newAge} years before you were born and ${-newAgeMama}`
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year} and Maria will be ${newAgeMama}`   
  } else {
    return `You were ${newAge} in the year ${year}`
  }
 
};


console.log(howOld(33,2072));





