module.exports = function toReadable (number) {
    
    // ------------------------------------------------------------------------------------------------------------------------------ */
    // создадим и заполним массивы констант с названиями цифр, чисел                                                                  */
    // ------------------------------------------------------------------------------------------------------------------------------ */
        const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion'];

    // ------------------------------------------------------------------------------------------------------------------------------ */
    // определим вспомогательную функцию, которая преобразует числа от 0 до 999                                                       */
    // ------------------------------------------------------------------------------------------------------------------------------ */
        function convertHundreds(num) {
            
            let res='';
            
            if (num < 10) {
                res = ones[num];
            } else if (num < 20) {
                res = teens[num - 10];
            } else if (num < 100) {
                res = tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + ones[num % 10] : '');
            } else {
                res = ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + convertHundreds(num % 100) : '');
            }

            return res;
        }

    // ------------------------------------------------------------------------------------------------------------------------------ */
 
        if (number === 0) return 'zero';

        let word = '';
        
        let i = 0;

        while (number > 0) {
            
            let partOfNumber = number % 1000;

            if (partOfNumber !== 0) {

                let partOfWord = convertHundreds(partOfNumber);

                if (i > 0) partOfWord += ' ' + thousands[i];
               
                word = partOfWord + (word ? ' ' + word : '');
            }

            number = Math.floor(number / 1000);

            i++;
        }

    return word.trim();
   
}
