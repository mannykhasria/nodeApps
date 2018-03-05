const _ = require('lodash');

const numbers = [31,44,55,11,12,19];

_.each(numbers, (number, index) => {
    console.log(number);
});
