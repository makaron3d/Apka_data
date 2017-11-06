var personNumber = document.getElementById('personNumber');
var suma;

//var refresh = document.getElementById('refresh');
var uwagi = document.getElementById('uwagi');
var check = document.getElementById('check');
//var dayMax = day.max;

var day = document.getElementById('day');
var dayValue = day.value;

var month = document.getElementById('month');
var monthValue = month.value;

var year = document.getElementById('year');
year = year.value;

var hero = document.getElementById('hero');
var input = hero.getElementsByTagName('input');


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

input[0].ondblclick = input[1].ondblclick = input[2].ondblclick = function () {
    this.innerHTML = this.value = '';
    this.innerHTML = this.style.color = 'black';
};

input[0].onclick = input[1].onclick = input[2].onclick = function () {
    this.innerHTML = this.style.color = 'black';
};

input[0].onchange = function () {
    this.innerHTML = year.value = this.value;
    //uwagi.innerHTML = this.innerHTML = '';
    year = this.value;
    return year;
};

input[1].onchange = function () {
    this.innerHTML = monthValue = this.value;
    uwagi.innerHTML = this.innerHTML = '';
    return monthValue;
};

input[2].onchange = function () {
    this.innerHTML = dayValue = this.value;
    uwagi.innerHTML = this.innerHTML = '';
    return dayValue;
};


//-------- main function-----


suma = function obliczenia() {
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

//-------- end of main function-----
   
function finito() {
    return '<h2>Twoją liczbą narodzin jest: ' + result + '</h2>';
}

function end() {
    return '<h2>Twoją liczbą narodzin jest: ' + nextLevel + '</h2>';
}      

function lastEnd() {
    return '<h2>Twoją liczbą narodzin jest: ' + lastLevel + '</h2>';
}

function restart() { //inline
    location.reload();
}

check.onclick = function daysOfMonths() {
    if (1 * monthValue > 12 || 1 * monthValue === 0)  { //co jest z tym ===?
        console.log('Rok ma 12 miesięcy, a nie ' + monthValue + '!!!'); //sprawdzone
                uwagi.innerHTML = '<h2>Wprowadź właściwą wartość miesiąca zamiast ' + monthValue + '!</h2>';
    } else if ((1 * monthValue === 4 || 1 * monthValue === 6 || 1 * monthValue === 9 || 1 * monthValue === 11) && 1 * dayValue > 30) {
        console.log('Ten miesiąc ma 30dni, a nie ' + dayValue + '!'); //sprawdzone
        uwagi.innerHTML = '<h2>Wprowadź właściwą wartość dnia miesiąca, max 30!</h2>';
    } else if ((1 * monthValue === 2 || 1 * monthValue === 02) && 1 * dayValue > 29) { 
        console.log('Luty ma 28, lub maksymalnie 29dni, a nie ' + dayValue + '!'); //cos sie wysypalo
        uwagi.innerHTML = '<h2>Wprowadź właściwą wartość dnia miesiąca, to luty!</h2>';
    } else if ((1 * monthValue === 1 || 1 * monthValue === 3 || 1 * monthValue === 5 || 1 * monthValue === 7 || 1 * monthValue === 8 || 1 * monthValue === 10 || 1 * monthValue === 12) && 1 * dayValue > 31) { 
        console.log('Ten miesiąc ma 31, a nie ' + dayValue + '!'); //sprawdzone
        uwagi.innerHTML = '<h2>Wprowadź właściwą wartość dnia miesiąca, max 31!</h2>';
    } else if (1 * dayValue === 0) {
        console.log('Musisz podać dzień miesiąca zamiast zera!'); //sprawdzone
        uwagi.innerHTML = '<h2>Wprowadź właściwą wartość dnia miesiąca, zamiast zera!</h2>';
    } else {
        suma();
        document.getElementById('check').remove();
    }
}; 

//personNumber.innerHTML += lastEnd();
//personNumber.innerHTML += end();
//personNumber.innerHTML += finito();
//suma();