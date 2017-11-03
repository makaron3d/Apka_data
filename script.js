var day = document.getElementById('day');
day = day.value;

var month = document.getElementById('month');
month = month.value;

var year = document.getElementById('year');
year = year.value;

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

//------------Obliczenia_1-------

var personNumber = document.getElementById('personNumber');
var suma = document.getElementById('suma');

//suma.onclick = function () {
var wynik = day + month + year;
console.log(wynik);
var wynikArray = Array.from(wynik);
console.log(wynikArray);
var arrayOfNumbers = wynikArray.map(Number);
console.log(arrayOfNumbers);
//};

let result = 0;


function averages(...toAdd) {
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    } 
    return result;
}
    console.log(averages(...arrayOfNumbers));


switch (result) {
    case 1:
        console.log('Twoja liczba to cyfra 1');
        break; 
    case 2:
        console.log('Twoja liczba to cyfra 2');
        break;
    case 3:
        console.log('Twoja liczba to cyfra 3');
        break;
    case 4:
        console.log('Twoja liczba to cyfra 4');
        break;
    case 5:
        console.log('Twoja liczba to cyfra 5');
        break;
    case 6:
        console.log('Twoja liczba to cyfra 6');
        break;   
    case 7:
        console.log('Twoja liczba to cyfra 7');
        break;
    case 8:
        console.log('Twoja liczba to cyfra 8');
        break;
    case 9:
        console.log('Twoja liczba to cyfra 9');
        break; 
    case 11:
        console.log('Twoją liczbą narodzin jest mistrzowska liczba "11"');
        function finito() {
            return '<h2> mistrzowska liczba: ' + result + '</h2>';
            personNumber.innerHTML += finito();
        }
        break; 
    case 22:
        console.log('Twoją liczbą narodzin jest mistrzowska liczba "22"');
        function finito() {
            return '<h2> mistrzowska liczba: ' + result + '</h2>';
        }
        break; 
    case 33:
        console.log('Twoją liczbą narodzin jest mistrzowska liczba "33"');
        function finito() {
            return '<h2> mistrzowska liczba: ' + result + '</h2>';
        }
        break;
    default:
        if ((result > 9) && (result != 11) && (result != 22) && (result != 33)) {
            var nextResult = result;
            console.log(nextResult);
            var nextWynik = '' + nextResult;
            console.log(nextWynik);
            var arrayOfNextWynik = Array.from(nextWynik);
            console.log(arrayOfNextWynik);
            var arrayOfNextNumbers = arrayOfNextWynik.map(Number);
            console.log(arrayOfNextNumbers);
            let nextLevel = 0;
            function sumNextLevel(...Add) {
                for (let i = 0; i < Add.length; i++) {
                    nextLevel += Add[i];
                } 
                return nextLevel;
            }
            console.log(sumNextLevel(...arrayOfNextNumbers));
            function end () {
                return '<h2> liczba: ' + nextLevel + '</h2>';
            } 
            
            switch (nextLevel) {
                case 1:
                    console.log('Twoja liczba to cyfra 1');
                    break; 
                case 2:
                    console.log('Twoja liczba to cyfra 2');
                    break;
                case 3:
                    console.log('Twoja liczba to cyfra 3');
                    break;
                case 4:
                    console.log('Twoja liczba to cyfra 4');
                    break;
                case 5:
                    console.log('Twoja liczba to cyfra 5');
                    break;
                case 6:
                    console.log('Twoja liczba to cyfra 6');
                    break;   
                case 7:
                    console.log('Twoja liczba to cyfra 7');
                    break;
                case 8:
                    console.log('Twoja liczba to cyfra 8');
                    break;
                case 9:
                    console.log('Twoja liczba to cyfra 9');
                    break; 
                default:
                    if (nextLevel > 9){
                        console.log('3-ci poziom');//dalszy ciag, 3Ci poziom. 
                        var nextLevelResult = nextLevel;
                        console.log(nextLevelResult);
                        var nextLevelWynik = '' + nextLevelResult;
                        console.log(nextLevelWynik);
                        var arrayOfNextLevelWynik = Array.from(nextLevelWynik);
                        console.log(arrayOfNextLevelWynik);
                        var arrayOfNextLevelNumbers = arrayOfNextLevelWynik.map(Number);
                        console.log(arrayOfNextLevelNumbers);
                        let lastLevel = 0;
                        function sumlastLevel(...Adder) {
                            for (let i = 0; i < Adder.length; i++) {
                            lastLevel += Adder[i];
                            } 
                            return lastLevel;
                        }
                        console.log(sumlastLevel(...arrayOfNextLevelNumbers));
                        function lastEnd () {
                            return '<h2> liczba: ' + lastLevel + '</h2>';
                        }                         
                        switch (lastLevel) {
                            case 1:
                                console.log('Twoja liczba to cyfra 1');
                                break; 
                            case 2:
                                console.log('Twoja liczba to cyfra 2');
                                break;
                            case 3:
                                console.log('Twoja liczba to cyfra 3');
                                break;
                            case 4:
                                console.log('Twoja liczba to cyfra 4');
                                break;
                            case 5:
                                console.log('Twoja liczba to cyfra 5');
                                break;
                            case 6:
                                console.log('Twoja liczba to cyfra 6');
                                break;   
                            case 7:
                                console.log('Twoja liczba to cyfra 7');
                                break;
                            case 8:
                                console.log('Twoja liczba to cyfra 8');
                                break;
                            case 9:
                                console.log('Twoja liczba to cyfra 9');
                                break; 
                        }
                    } 
                }
        }
}
personNumber.innerHTML += lastEnd();
//console.log(nextLevel);



//suma.onclick = 

//personNumber.innerHTML += bla();


//personNumber.innerHTML += finito();


/*
var nextResult = result;
console.log(nextResult);

var nextWynik = '' + nextResult;
console.log(nextWynik);

var arrayOfNextWynik = Array.from(nextWynik);

console.log(arrayOfNextWynik);

var arrayOfNextNumbers = arrayOfNextWynik.map(Number);
console.log(arrayOfNextNumbers);



let nextLevel = 0;

function sumNextLevel(...Add) {
    for (let i = 0; i < Add.length; i++) {
        nextLevel += Add[i];
    } 
    return nextLevel;
}

console.log(sumNextLevel(...arrayOfNextNumbers));

*/


//console.log(averages(...arrayOfNextNumbers));
//console.log(result);