const getRandom = (startNumber, endNumber) =>  Math.floor(Math.random() * (endNumber - startNumber) + startNumber);
getRandom(5, 19);

const getRandomize = (startNumber, endNumber, dotSign) =>  (Math.random() * (endNumber - startNumber) + startNumber).toFixed(dotSign);
getRandomize(0, 76.8, 4);

// Задание 3

// данные
const totalPoints = 10;
const locX;
const locY;

const type = ['palace', 'flat', 'house', 'bungalow'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const objectDescription = {
  author = () => {
  const randomAvatar = _.random(1, 8);

  return {
  avatar: 'img/avatars/user0' + randomAvatar + '.png',
};
},

 offer = () => {
  return {
    title: 'Кликай дважды, тебе понравится!',
    address: '',
    price: '',
    type: '',
    rooms: '',
    guests: '',
    checkin: '',
    checkout: '',
    features: '',
    description: 'Это лучшее жилище в мире!',
    photos: [],
};
},

 location = () => {
  const locateX = _.random(35.65000, 35.70000, 5);
  const locateY = _.random(139.70000, 139.80000, 5);

  return {
  x: locateX,
  y: locateY,
};
}
}


const similarObjects = new Array(totalPoints).fill(null).map(() => objectDescription());
