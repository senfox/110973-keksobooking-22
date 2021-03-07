//Целые
const getRandom = (startNumber, endNumber) =>  Math.floor(Math.random() * (endNumber - startNumber) + startNumber);

//Дробные
const getRandomize = (startNumber, endNumber, dotSign) =>  (Math.random() * (endNumber - startNumber) + startNumber).toFixed(dotSign);

// Задание 3

// Переменные
const titleLoc = ['Тир-на ногт', 'Ремба', 'Бегма', 'Кашфа','Амбер'];
const types = ['palace', 'flat', 'house', 'bungalow'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const description = ['изумительный', 'очаровательный', 'отчаянно привлекательный', 'совершенный', 'неимоверно возвышенный', 'способный ввергнуть в пучины отчаяния', 'ужасающе прекрасный', 'ослепительный', 'космический', 'титанически первозданный', 'крайне чистый'];


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

const generateDescription = function (array) {
	const randomLength = getRandom(0, array.length - 1);
	const DescRandomLength = getRandom(0, randomLength - 1)
  const newArray = [];
  for (let i = 0; i <= DescRandomLength; i++) {
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
    title: getRandomElement(titleLoc),
    address: randomLocation.latitude + ' северной широты, ' + randomLocation.longitude + ' восточной долготы',
    price: getRandom(1, 100000),
    type: getRandomElement(types),
    rooms: getRandom(1,500),
    guests: getRandom(1,100),
    checkin: getRandomElement(checkin),
    checkout: getRandomElement(checkout),
    features: getRandomUniq(features),
    description: generateDescription(description) + ' тип жилища',
    photos: getRandomArray(photos),
  };

  return {
    author: randomAuthor,
    offer: randomPlace,
    location: randomLocation,
  };
};

const similarObj = new Array(totalPoints).fill(null).map(() => getObj());

//console.log(similarObj);