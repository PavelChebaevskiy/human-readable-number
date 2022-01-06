module.exports = function toReadable (number) {
    const numbersOneChar = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    const numbersTwoCharsOver = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const numbersTwoChars = [
        'twenty',
        'thirty', 
        'forty', 
        'fifty', 
        'sixty', 
        'seventy', 
        'eighty', 
        'ninety',
    ];
    switch (true) {        
        case number >= 100 && parseInt(number / 100) > 0 && parseInt((number % 100) / 10) == 0 && parseInt(number % 10) == 0:
            return `${numbersOneChar[parseInt(number / 100)]} hundred`;
            break;
        case number >= 100 && parseInt(number / 100) > 0 && parseInt((number % 100) / 10) >= 2 && parseInt(number % 10) > 0:
            return `${numbersOneChar[parseInt(number / 100)]} hundred ${numbersTwoChars[parseInt((number % 100) / 10) - 2]} ${numbersOneChar[parseInt(number % 10)]}`;
            break;
        case number >= 100 && parseInt(number / 100) > 0 && parseInt((number % 100) / 10) >= 2 && parseInt(number % 10) >= 0:
            return `${numbersOneChar[parseInt(number / 100)]} hundred ${numbersTwoChars[parseInt((number % 100) / 10) - 2]}`;
            break;
        case number >= 100 && parseInt(number / 100) > 0 && parseInt((number % 100) / 10) > 0 && parseInt(number % 10) < 10:
            return `${numbersOneChar[parseInt(number / 100)]} hundred ${numbersTwoCharsOver[parseInt(number % 10)]}`;
            break;
        case number >= 100 && parseInt(number / 100) > 0 && parseInt((number % 100) / 10) == 0 && parseInt(number % 10) <= 9:
            return `${numbersOneChar[parseInt(number / 100)]} hundred ${numbersOneChar[parseInt((number % 100) % 10)]}`;
            break;
        case number >= 20 && parseInt(number % 10) == 0:
            return `${numbersTwoChars[parseInt(number / 10) - 2]}`;
        case number >= 20 && parseInt(number % 10) != 0:
            return `${numbersTwoChars[parseInt(number / 10) - 2]} ${numbersOneChar[parseInt(number % 10)]}`
        case number < 10: 
            return `${numbersOneChar[number]}`;
            break;
        case number >= 10:
            return `${numbersTwoCharsOver[parseInt(number % 10)]}`;
            break
        default: 
            return `Непонятно что ты хочешь от меня`;
    }
};
