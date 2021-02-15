let getRandom = (startNumber, endNumber) =>  Math.floor(Math.random() * (endNumber - startNumber) + startNumber);

getRandom(5, 19);

/*console.log(getRandom(0, 42));*/


/*let randomizeGet = Math.random() * (endNumber - startNumber + 1) + startNumber;*/




// функция делает то же, что предыдущая, - но возвращает не только число, но и число знаков после запятой.
// причем числа функций только положительные. Дробные, само собой.

let getRandomize = (startNumber, endNumber) =>  Math.random() * (endNumber - startNumber) + startNumber;
getRandomize(0, 76.8);
/*console.log(getRandomize(1, 42));*/

// так выглядит стрелочность: const getWizardX = (gameFieldWidth) => (gameFieldWidth - WIZARD_WIDTH) / 2;


