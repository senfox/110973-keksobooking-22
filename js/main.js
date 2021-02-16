const getRandom = (startNumber, endNumber) =>  Math.floor(Math.random() * (endNumber - startNumber) + startNumber);
getRandom(5, 19);

const getRandomize = (startNumber, endNumber, dotSign) =>  (Math.random() * (endNumber - startNumber) + startNumber).toFixed(dotSign);
getRandomize(0, 76.8, 4);
