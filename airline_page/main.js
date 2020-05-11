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
// ==============================================================================
var delayedElement = document.getElementById('grid_right_column');
var reservedElement = document.getElementById('grid_form');
document.getElementsByTagName('div')[0].addEventListener('click', pokoloruj2);
function pokoloruj2(ev) {
    var target = ev.target;
    if (delayedElement.contains(target) || reservedElement.contains(target))
        console.log('trafilismy');
    else
        console.log('pudlo');
}
// ===============================================================================
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
reservedElement.addEventListener('input', checkChoosenData);
var popup = document.getElementsByClassName("reserved_flight")[0];
popup.addEventListener("click", function () {
    popup.style.display = "none";
});
document.querySelector('[type=submit]').addEventListener("click", function () {
    event.preventDefault();
    //  get flight info
    var passegerName = document.getElementById('fname').value;
    var dateControl = document.querySelector('input[type="date"]');
    var dateObj = new Date(dateControl.value);
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newDate = year + "/" + month + "/" + day;
    var departList = document.getElementById('departureslist');
    var departCity = departList.options[departList.selectedIndex].text;
    var arrivalList = document.getElementById('arrivals');
    var arrivalCity = arrivalList.options[arrivalList.selectedIndex].text;
    var flightDetails = "Wylot: " + departCity + "\nPrzylot: " + arrivalCity + "\nData: " + newDate;
    popup.style.display = "block";
    var popupPar = popup.firstElementChild;
    popupPar.innerText = "Zarezerwowano lot\n" + flightDetails;
});
function checkChoosenData(ev) {
    if (checkCities() && checkDate() && checkNames())
        document.querySelector('[type=submit]').removeAttribute('disabled');
    else
        document.querySelector('[type=submit]').setAttribute('disabled', 'yes');
}
function checkCities() {
    var wrongDeparture = document.getElementById('departureslist')[0].selected;
    var wrongArrival = document.getElementById('arrivals')[0].selected;
    return !(wrongDeparture || wrongArrival);
}
function checkDate() {
    var dateControl = document.querySelector('input[type="date"]');
    var choosenDate = new Date(dateControl.value);
    var today = new Date();
    var choosenDateDay = Date.UTC(choosenDate.getFullYear(), choosenDate.getMonth(), choosenDate.getDate());
    var todayDay = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    return choosenDateDay - todayDay >= 0;
}
function checkNames() {
    var name = document.getElementById('fname').value;
    return name.trim().indexOf(' ') !== -1;
}
