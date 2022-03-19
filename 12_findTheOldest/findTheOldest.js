const findTheOldest = function(a) {
    const list = a;

    list.forEach(person => {
      if ('yearOfDeath' in person === false) {
          const actualTime = new Date();
          person.lived= actualTime.getFullYear() - person.yearOfBirth;
      } else {
          person.lived = person.yearOfDeath - person.yearOfBirth;
      }
    })

    list.sort((a,b) => a.lived < b.lived ? 1 : -1);
    
    return list[0];
};
// Do not edit below this line
module.exports = findTheOldest;
