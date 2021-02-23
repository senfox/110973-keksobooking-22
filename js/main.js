//Целые
const getRandom = (startNumber, endNumber) =>  Math.floor(Math.random() * (endNumber - startNumber) + startNumber);

//Дробные
const getRandomize = (startNumber, endNumber, dotSign) =>  (Math.random() * (endNumber - startNumber) + startNumber).toFixed(dotSign);

// Задание 3

// Переменные
const type = ['palace', 'flat', 'house', 'bungalow'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const totalPoints = 10; // число массивов


const getRandomElement = function (array) {
  return array[getRandom(0, array.length - 1)];
};

const getRandomArray = function (array) {
  const randomLength = getRandom(1, 10);
  const newArray = [];
  for (let i = 0; i <= randomLength; i++) {
    newArray.push(array[getRandom(0, array.length - 1)]);
  }
  return newArray;
};

const getRandomUniq = function (array) {
  const randomLength = getRandom(0, array.length - 1);
  const newArray = [];
  for (let i = 0; i <= randomLength; i++) {
    newArray.push(array.sort()[i]);
  }
  return newArray;
};

const getObj = function () {

  const randomAuthor = {
    avatar: 'img/avatars/user' + '0' + getRandom(1, 8) + '.png',
  };

  const randomLocation = {
    latitude: getRandomize(35.65, 35.7, 5),
    longitude: getRandomize(139.7, 139.8, 5),
  };

  const randomPlace = {
    title: 'Это лучшее жилище в мире!',
    address: randomLocation.latitude + ' северной широты, ' + randomLocation.longitude + ' восточной долготы',
    price: getRandom(2000, 10000),
    type: getRandomArray(type),
    rooms: getRandom(1,5),
    guests: getRandom(1,10),
    checkin: getRandomArray(checkin),
    checkout: getRandomArray(checkout),
    features: getRandomUniq(features),
    description: 'А это - лучшее в мире описание жилища, каким бы оно ни было. Приготовьтесь издавать звуки изумления, ведь арендная плата с вас уже списана!',
    photos: getRandomArray(photos),
  };

  return {
    author: randomAuthor,
    offer: randomPlace,
    location: randomLocation,
  };
};

const similarObj = new Array(totalPoints).fill(null).map(() => getObj());