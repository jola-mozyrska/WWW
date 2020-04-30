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
reserved_element.addEventListener('change', checkChoosenData);
var popup = document.getElementsByClassName("reserved_flight")[0];
popup.addEventListener("click", function () {
    popup.style.display = "none";
});
document.querySelector('[type=submit]').addEventListener("click", function () {
    event.preventDefault();
    //  get flight info
    var passegerName = document.getElementById('fname').value;
    var dateControl = document.querySelector('input[type="date"]');
    var date_obj = new Date(dateControl.value);
    var month = date_obj.getUTCMonth() + 1;
    var day = date_obj.getUTCDate();
    var year = date_obj.getUTCFullYear();
    var new_date = year + "/" + month + "/" + day;
    var depart_list = document.getElementById('departureslist');
    var depart_city = depart_list.options[depart_list.selectedIndex].text;
    var arrival_list = document.getElementById('arrivals');
    var arrival_city = arrival_list.options[arrival_list.selectedIndex].text;
    var flight_details = "Wylot: " + depart_city + "\nPrzylot: " + arrival_city + "\nData: " + new_date;
    popup.style.display = "block";
    var popup_p = popup.firstElementChild;
    popup_p.innerText = "Zarezerwowano lot\n" + flight_details;
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
    return choosenDate.getTime() - today.getTime() >= 0;
}
function checkNames() {
    var name = document.getElementById('fname').value;
    return name.trim().indexOf(' ') != -1;
}
