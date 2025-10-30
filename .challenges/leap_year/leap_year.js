const isLeapYear = (year) => {
  if (year % 4 === 0) {
    return "Leap Year";
  } else if (year % 400 === 0) {
    return "Leap Year";
  } else if (year % 100 === 0) {
    return "Not a Leap Year";
  } else {
    return "Not a Leap Year";
  }
};

console.log(isLeapYear(2020))