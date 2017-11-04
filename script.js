var personNumber = document.getElementById('personNumber');
var suma = document.getElementById('suma');

var day = document.getElementById('day');
day = day.value;

var month = document.getElementById('month');
month = month.value;

var year = document.getElementById('year');
year = year.value;

var test = document.getElementById('hero');
var input = test.getElementsByTagName('input');

/*
var dayMax = day.max;

if (month === 4 || month === 6 || month === 9 || month === 11) {
    input[1].onchange = function () {
        this.innerHTML = day.max = this.max;
        dayMax = day.max = 30;
        return dayMax;
    };
} if (month === 2) {
    input[1].onchange = function () {
        this.innerHTML = day.max = this.max;
        dayMax = day.max = 29;
        return dayMax;
    };
}
// do zrobienia
*/

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

input[0].onclick = input[1].onclick = input[2].onclick = function () {
    this.innerHTML = this.value = '';
    this.innerHTML = this.style.color = 'black';
};

input[0].onchange = function () {
    this.innerHTML = day.value = this.value;
    day = this.value;
    return day;
};

input[1].onchange = function () {
    this.innerHTML = month.value = this.value;
    month = this.value;
    return month;
};

input[2].onchange = function () {
    this.innerHTML = year.value = this.value;
    year = this.value;
    return year;
};

//-------- main function-----

suma.onclick = function () {
    var wynik = day + month + year;
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


//personNumber.innerHTML += lastEnd();
//personNumber.innerHTML += end();
//personNumber.innerHTML += finito();
//suma();