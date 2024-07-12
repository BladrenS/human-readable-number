module.exports = function toReadable (number) {
    const numToString = String(number);
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen', 'twenty'];
    const decadeArr = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const hundred = ' hundred'
    let result = '';
 
    if (numToString.length === 1){
       result = arr[numToString[0]];
    }
 
    if (numToString.length === 2 && number <= 20){
       result = arr[number]
    }
 
    if (numToString.length === 2 && number > 20){
       result = decadeArr[numToString[0] - 2] + ' ' + arr[numToString[1]]
    }

    if (numToString.length === 2 && number > 20 && number % 10 === 0){
        result = decadeArr[numToString[0] - 2]
     }
 
    if (numToString.length === 3 && numToString[1] + numToString[2] < 10 && numToString[1] + numToString[2] > 0) {
       result = arr[numToString[0]] + hundred + ' ' + arr[numToString[2]];
    }

    if (numToString.length === 3 && numToString[1] + numToString[2] <= 20 && numToString[1] + numToString[2] > 10) {
       result = arr[numToString[0]] + hundred + ' '  + arr[numToString[1] + numToString[2]];
    }
 
    if (numToString.length === 3 && numToString[1] + numToString[2] > 20) {
       result = arr[numToString[0]] + hundred + ' ' + decadeArr[numToString[1] - 2] + ' ' + arr[numToString[2]];
    }
 
    if (numToString.length === 3 && number % 10 === 0) {
       result = arr[numToString[0]] + hundred + ' ' + decadeArr[numToString[1] - 2];
    }
    
    if (numToString.length === 3 && number % 100 === 0) {
       result = arr[numToString[0]] + hundred;
    }

    if (numToString.length === 3 && numToString[1] + numToString[2] == 10) {
        result = arr[numToString[0]] + hundred + ' ' + arr[10];
     }
       
    return result

}
