var personNumber = document.getElementById('personNumber');
var suma = document.getElementById('suma');
var refresh = document.getElementById('refresh');
var day = document.getElementById('day');
var dayValue = day.value;
var uwagi = document.getElementById('uwagi');
var check = document.getElementById('check');
//var dayMax = day.max;

var month = document.getElementById('month');
var monthValue = month.value;

var year = document.getElementById('year');
year = year.value;

var test = document.getElementById('hero');
var input = test.getElementsByTagName('input');


let result = 0;
let nextLevel = 0;
let lastLevel = 0;

function sumNextLevel(...Add) {
    for (let i = 0; i < Add.length; i++) {
        nextLevel += Add[i];
    } 
    return nextLevel;
}

function sumlastLevel(...Adder) {
    for (let i = 0; i < Adder.length; i++) {
        lastLevel += Adder[i];
    } 
    return lastLevel;
}

var test = document.getElementById('hero');
var input = test.getElementsByTagName('input');

input[0].ondblclick = input[1].ondblclick = input[2].ondblclick = function () {
    this.innerHTML = this.value = '';
    this.innerHTML = this.style.color = 'black';
};


input[2].onchange = function () {
    this.innerHTML = dayValue = this.value;
    //day = this.value;
    return dayValue;
};

input[1].onchange = function () {
    this.innerHTML = monthValue = this.value;
    //month.value = this.value;
    return monthValue;
};

input[0].onchange = function () {
    this.innerHTML = year.value = this.value;
    year = this.value;
    return year;
};

daysOfMonths();
//monthValue.onchange = daysOfMonths();

//-------- main function-----


suma.onclick = function () {
    console.log('tutaj sprawdzam ' + month.value + ' i '+ monthValue);
    
    

    var wynik = year + monthValue + dayValue;
    console.log(wynik);
    var wynikArray = Array.from(wynik);
    console.log(wynikArray);
    var arrayOfNumbers = wynikArray.map(Number);
    console.log(arrayOfNumbers);

    function averages(...toAdd) {
        for (let i = 0; i < toAdd.length; i++) {
            result += toAdd[i];
        } 
        return result + (' result');
    }
    console.log(averages(...arrayOfNumbers));

    if (result <10 || result === 11 || result === 22 || result === 33 || result === 44) {
        switch (result) {
            case 1:
                console.log('Twoja liczba to cyfra 1');
                personNumber.innerHTML += finito();
                break; 
            case 2:
                console.log('Twoja liczba to cyfra 2');
                personNumber.innerHTML += finito();
                break;
            case 3:
                console.log('Twoja liczba to cyfra 3');
                personNumber.innerHTML += finito();
                break;
            case 4:
                console.log('Twoja liczba to cyfra 4');
                personNumber.innerHTML += finito();
                break;
            case 5:
                console.log('Twoja liczba to cyfra 5');
                personNumber.innerHTML += finito();
                break;
            case 6:
                console.log('Twoja liczba to cyfra 6');
                personNumber.innerHTML += finito();
                break;   
            case 7:
                console.log('Twoja liczba to cyfra 7');
                personNumber.innerHTML += finito();
                break;
            case 8:
                console.log('Twoja liczba to cyfra 8');
                personNumber.innerHTML += finito();
                break;
            case 9:
                console.log('Twoja liczba to cyfra 9');
                personNumber.innerHTML += finito();
                break; 
            case 11:
                console.log('Twoja liczba to cyfra 11');
                personNumber.innerHTML += finito();
                break;   
            case 22:
                console.log('Twoja liczba to cyfra 22');
                personNumber.innerHTML += finito();
                break;
            case 33:
                console.log('Twoja liczba to cyfra 33');
                personNumber.innerHTML += finito();
                break;
            case 44:
                console.log('Twoja liczba to cyfra 44');
                personNumber.innerHTML += finito();
                break; 
            default:
                console.log(result + ' result przed if');
        }
    
    } if ((result > 9) && (result != 11) && (result != 22) && (result != 33) && (result !=44)) {
            console.log(result + ' result w if');
            var nextResult = result;
            console.log("nextResult" + nextResult);
            var nextWynik = '' + nextResult;
            console.log(nextWynik);
            var arrayOfNextWynik = Array.from(nextWynik);
            console.log(arrayOfNextWynik);
            var arrayOfNextNumbers = arrayOfNextWynik.map(Number);
            console.log(arrayOfNextNumbers);
        
            //sumNextLevel(...Add);
     

            console.log(sumNextLevel(...arrayOfNextNumbers));

            
            switch (nextLevel) {
                case 1:
                    console.log('Twoja liczba to cyfra 1');
                    personNumber.innerHTML += end();
                    break; 
                case 2:
                    console.log('Twoja liczba to cyfra 2');
                    personNumber.innerHTML += end();
                    break;
                case 3:
                    console.log('Twoja liczba to cyfra 3');
                    personNumber.innerHTML += end();
                    break;
                case 4:
                    console.log('Twoja liczba to cyfra 4');
                    personNumber.innerHTML += end();
                    break;
                case 5:
                    console.log('Twoja liczba to cyfra 5');
                    personNumber.innerHTML += end();
                    break;
                case 6:
                    console.log('Twoja liczba to cyfra 6');
                    personNumber.innerHTML += end();
                    break;   
                case 7:
                    console.log('Twoja liczba to cyfra 7');
                    personNumber.innerHTML += end();
                    break;
                case 8:
                    console.log('Twoja liczba to cyfra 8');
                    personNumber.innerHTML += end();
                    break;
                case 9:
                    console.log('Twoja liczba to cyfra 9');
                    personNumber.innerHTML += end();
                    break; 
                default:
                    console.log(nextLevel + 'nextLevel');

            }
        } if (nextLevel > 9) {
            console.log('3-ci poziom');//dalszy ciag, 3Ci poziom. 
            var nextLevelResult = nextLevel;
            console.log(nextLevelResult);
            console.log('tutaj jestem');
            var nextLevelWynik = '' + nextLevelResult;
            console.log(nextLevelWynik);
            var arrayOfNextLevelWynik = Array.from(nextLevelWynik);
            console.log(arrayOfNextLevelWynik);
            var arrayOfNextLevelNumbers = arrayOfNextLevelWynik.map(Number);
            console.log(arrayOfNextLevelNumbers);
            

            console.log(sumlastLevel(...arrayOfNextLevelNumbers));
                     
            switch (lastLevel) {
                case 1:
                    console.log('Twoja liczba to cyfra 1');
                    personNumber.innerHTML += lastEnd();
                    break; 
                case 2:
                    console.log('Twoja liczba to cyfra 2');
                    personNumber.innerHTML += lastEnd();
                    break;
                case 3:
                    console.log('Twoja liczba to cyfra 3');
                    personNumber.innerHTML += lastEnd();
                    break;
                case 4:
                    console.log('Twoja liczba to cyfra 4');
                    personNumber.innerHTML += lastEnd();
                    break;
                case 5:
                    console.log('Twoja liczba to cyfra 5');
                    personNumber.innerHTML += lastEnd();
                    break;
                case 6:
                    console.log('Twoja liczba to cyfra 6');
                    personNumber.innerHTML += lastEnd();
                    break;   
                case 7:
                    console.log('Twoja liczba to cyfra 7');
                    personNumber.innerHTML += lastEnd();
                    break;
                case 8:
                    console.log('Twoja liczba to cyfra 8');
                    personNumber.innerHTML += lastEnd();
                    break;
                case 9:
                    console.log('Twoja liczba to cyfra 9');
                    personNumber.innerHTML += lastEnd();
                    break;
                default: 
                    console.log('default last');
            }
        } 
};

   
function finito() {
    return '<h2>: ' + result + '</h2>';
}

function end() {
    return '<h2>: ' + nextLevel + '</h2>';
}      

function lastEnd() {
    return '<h2>: ' + lastLevel + '</h2>';
}                 

function daysOfMonths() {
    if (monthValue > 12 || monthValue == 0) { 
        console.log('Rok ma 12 miesięcy, a nie ' + monthValue + '!'); //sprawdzone
    } if ((monthValue == 4 || monthValue == 6 || monthValue == 9 || monthValue ==11) && dayValue > 30) {
        console.log('Ten miesiąc ma 30dni, a nie ' + dayValue + '!'); //sprawdzone
    } if ((monthValue == 2 || monthValue == 02) && dayValue > 29) { 
        console.log('Luty ma 28, lub maksymalnie 29dni, a nie ' + dayValue + '!'); //sprawdzone
    } if ((monthValue == 1 || monthValue == 3 || monthValue == 5 || monthValue == 7 || monthValue == 8 || monthValue == 10 || monthValue == 12) && dayValue > 31) { 
        console.log('Ten miesiąc ma 31, a nie ' + dayValue + '!'); //sprawdzone
    } else if (dayValue == 0) {
        console.log('Musisz podać dzień miesiąca zamiast zera!'); //sprawdzone
    } else {
        suma;
    }
}


//personNumber.innerHTML += lastEnd();
//personNumber.innerHTML += end();
//personNumber.innerHTML += finito();
//suma();