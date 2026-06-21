const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge =
      (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;

    const currentAge =
      (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;

    if (currentAge > oldestAge) {
      return currentPerson;
    }

    return oldestPerson;
  });
};


// Do not edit below this line
module.exports = findTheOldest;
