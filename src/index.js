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
    // write your solution here

    let str = 'hello wor';
    let result = '';
    let strArray = expr.split('');
    let i = 0;



    strArray.forEach(item => {
        if (item === ' ') {
            strArray[i] = '**********';
            i++;
        }
        for (let key in MORSE_TABLE) {
            if (item === MORSE_TABLE[key]) {
                strArray[i] = key;
                i++;
            }
        }
    });

    let strResult = ''

    i = 0;
    strArray.forEach(str => {


        let resArr = str.split('')
        i = 0;
        resArr.forEach(char => {
            if (char == '.') resArr[i] = '10';
            if (char == '-') resArr[i] = '11';
            i++;

            if (resArr.length === i) {
                while (i < 5) {
                    resArr.unshift('00')
                    i++
                }
            }
        });

        strResult += resArr.join('')



    })
    console.log(strResult);
    return strResult
}

module.exports = {
    decode
}


decode('hello world')
