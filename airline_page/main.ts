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
let delayedElement = document.getElementById('grid_right_column');
let reservedElement = document.getElementById('grid_form');

document.getElementsByTagName('div')[0].addEventListener('click', pokoloruj2);

function pokoloruj2(ev : MouseEvent) {
    const target = ev.target as HTMLElement;
    if(delayedElement.contains(target) || reservedElement.contains(target))
        console.log('trafilismy');
    else
        console.log('pudlo');
}
// ===============================================================================
let counter : number = 0;

document.getElementsByTagName('div')[0].addEventListener('click', print_fib);

function print_fib() {
    counter += 1;
    console.log(fib(counter));
}

function fib(n : number) : number {
    if(n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

reservedElement.addEventListener('input', checkChoosenData);

const popup = document.getElementsByClassName("reserved_flight")[0] as HTMLDivElement;
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

document.querySelector('[type=submit]').addEventListener("click", () => {
    event.preventDefault();
    //  get flight info
    const passegerName = (document.getElementById('fname') as HTMLInputElement).value;
    const dateControl = document.querySelector('input[type="date"]') as HTMLInputElement;
    const dateObj = new Date(dateControl.value);
    const  month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newDate = year + "/" + month + "/" + day;

    const departList = document.getElementById('departureslist') as HTMLSelectElement;
    const departCity = departList.options[departList.selectedIndex].text;
    const arrivalList = document.getElementById('arrivals') as HTMLSelectElement;
    const arrivalCity = arrivalList.options[arrivalList.selectedIndex].text;

    const flightDetails = "Wylot: " + departCity + "\nPrzylot: " + arrivalCity + "\nData: " + newDate;

    popup.style.display = "block";
    const popupPar = popup.firstElementChild as HTMLParagraphElement;
    popupPar.innerText = "Zarezerwowano lot\n" + flightDetails;
})

function checkChoosenData(ev : MouseEvent) {
    if(checkCities() && checkDate() && checkNames())
        document.querySelector('[type=submit]').removeAttribute('disabled');
    else
        document.querySelector('[type=submit]').setAttribute('disabled', 'yes');
}

function checkCities() : boolean {
    const wrongDeparture = document.getElementById('departureslist')[0].selected;
    const wrongArrival = document.getElementById('arrivals')[0].selected;
    return !(wrongDeparture || wrongArrival);
}

function checkDate() : boolean {
    const dateControl = document.querySelector('input[type="date"]') as HTMLInputElement;
    const choosenDate = new Date(dateControl.value);
    const today = new Date();
    const choosenDateDay = Date.UTC(choosenDate.getFullYear(), choosenDate.getMonth(), choosenDate.getDate());
    const todayDay = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    return choosenDateDay - todayDay >= 0;
}

function checkNames() : boolean {
    const name = (document.getElementById('fname') as HTMLInputElement).value;
    return name.trim().indexOf(' ') !== -1;
}