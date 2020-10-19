const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let strArray = expr.split(''),
        wordsArray = [],
        strLetter = '',
        strDecode = '',
        j = 0;


    for (let i = 0; i < strArray.length; i++) {
        strLetter += strArray[i];
        if ((i + 1) % 10 === 0) {
            wordsArray[j] = strLetter;
            strLetter = '';
            j += 1;
        }
    }

    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
        if (wordsArray[i].includes('*'))
            strDecode += ' ';
        else
            strDecode += MORSE_TABLE[wordsArray[i]];
    }

    return strDecode;
}

module.exports = {
    decode
}

