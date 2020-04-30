// function paint_elem(ev: MouseEvent) {
//     let target = ev.target;
//     let elem = this as HTMLElement;
//     console.log(elem, target);
//     let currentColor = window.getComputedStyle(elem).getPropertyValue('background-color');
//     let [_,...colorsAsText] = /rgb\((\d+),[^0-9]*(\d+),[^0-9]*(\d+)\)/.exec(currentColor);
//     let colors: number[] = [];
//     for(let i = 0; i < 3; i++) colors[i] = (parseInt(colorsAsText[i]) + 0x20) % 256;
//     elem.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
// }
// delayed_element.addEventListener('click', paint_elem);
// reserved_element.addEventListener('click', paint_elem);
//==============================================================================
var delayed_element = document.getElementById('grid_right_column');
var reserved_element = document.getElementById('grid_form');
document.getElementsByTagName('div')[0].addEventListener('click', pokoloruj2);
function pokoloruj2(ev) {
    var target = ev.target;
    if (delayed_element.contains(target) || reserved_element.contains(target))
        console.log('trafilismy');
    else
        console.log('pudlo');
}
//===============================================================================
var counter = 0;
document.getElementsByTagName('div')[0].addEventListener('click', print_fib);
function print_fib() {
    counter += 1;
    console.log(fib(counter));
}
function fib(n) {
    if (n < 2)
        return n;
    return fib(n - 1) + fib(n - 2);
}
//  jak poprawic fibonacciego? co jakies kawalki wyliczania ustawic setTimeout
// Zadanie: wyświetl zdjęcie autora najnowszego commitu z repozytorium TypeScript na githubie. Podpowiedź: url to https://api.github.com/repos/Microsoft/TypeScript/commits, odpowiedź będzie tekstem, więc można skorzystać z text(). W przeglądarce można zobaczyć zawartość JSONa. Oczywiście warto pamiętać o wykrywaniu błędów.
// Zadanie z gwiazdką: wyświetl lub wypisz na konsoli listę repozytoriów autora najnowszego commitu posortowaną alfabetycznie bez odróżniania wielkich i małych liter.
// Zadanie: i włącz go
//  dopiero gdy wybrane będą lotniska, wybrana data nie będzie w przeszłości
//   i wpisane będą imie i nazwisko (czyli co najmniej 2 słowa). Po wciśnięciu
//    przycisku wyświetl potwierdzenie z informacjami z formularza.
reserved_element.addEventListener('click', checkChoosenData);
function checkChoosenData(ev) {
    if (checkCities() && checkDate() && checkNames())
        document.querySelector('[name=submit]').removeAttribute('disabled');
    else
        document.querySelector('[name=submit').setAttribute('disabled', 'yes');
}
function checkCities() {
    var wrongDeparture = document.getElementById('departureslist')[0].selected;
    var wrongArrival = document.getElementById('arrivals')[0].selected;
    return !(wrongDeparture || wrongArrival);
}
function checkDate() {
    var e = document.getElementById('flight_date');
    var choosenDate = new Date(e.options[e.selectedIndex].value);
    var today = new Date();
    var diff = today - choosenDate;
    console.log(diff);
    return diff >= 0;
}
function checkNames() {
    return false;
}
