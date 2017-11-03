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
            function finito() {
                return '<h2>liczymy dalej: ' + result + '</h2>';
        }
    }
} 

suma.onclick = personNumber.innerHTML += finito();


