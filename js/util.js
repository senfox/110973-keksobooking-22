//Целые
const getRandom = (startNumber, endNumber) =>  Math.floor(Math.random() * (endNumber - startNumber) + startNumber);

//Дробные
const getRandomize = (startNumber, endNumber, dotSign) =>  (Math.random() * (endNumber - startNumber) + startNumber).toFixed(dotSign);

export {getRandom, getRandomize};
