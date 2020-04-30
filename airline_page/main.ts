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
let delayed_element = document.getElementById('grid_right_column');
let reserved_element = document.getElementById('grid_form');

document.getElementsByTagName('div')[0].addEventListener('click', pokoloruj2);

function pokoloruj2(ev : MouseEvent) {
    const target = ev.target as HTMLElement;
    if(delayed_element.contains(target) || reserved_element.contains(target))
        console.log('trafilismy');
    else
        console.log('pudlo');
}
//===============================================================================
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

reserved_element.addEventListener('change', checkChoosenData);

const popup = document.getElementsByClassName("reserved_flight")[0] as HTMLDivElement;
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

document.querySelector('[type=submit]').addEventListener("click", () => {
    event.preventDefault();
    //  get flight info
    const passegerName = (<HTMLInputElement>document.getElementById('fname')).value;
    var dateControl = <HTMLInputElement>document.querySelector('input[type="date"]');
    const date_obj = new Date(dateControl.value);
    const  month = date_obj.getUTCMonth() + 1;
    const day = date_obj.getUTCDate();
    const year = date_obj.getUTCFullYear();
    const new_date = year + "/" + month + "/" + day;

    const depart_list = <HTMLSelectElement>document.getElementById('departureslist');
    const depart_city = depart_list.options[depart_list.selectedIndex].text;
    const arrival_list = <HTMLSelectElement>document.getElementById('arrivals');
    const arrival_city = arrival_list.options[arrival_list.selectedIndex].text;

    const flight_details = "Wylot: " + depart_city + "\nPrzylot: " + arrival_city + "\nData: " + new_date;

    popup.style.display = "block";  
    const popup_p = popup.firstElementChild as HTMLParagraphElement;
    popup_p.innerText = "Zarezerwowano lot\n" + flight_details;
})

function checkChoosenData(ev : MouseEvent) {
    if(checkCities() && checkDate() && checkNames()) 
        document.querySelector('[type=submit]').removeAttribute('disabled');
    else
        document.querySelector('[type=submit]').setAttribute('disabled', 'yes');
}

function checkCities() : boolean {
    let wrongDeparture = document.getElementById('departureslist')[0].selected;
    let wrongArrival = document.getElementById('arrivals')[0].selected;
    return !(wrongDeparture || wrongArrival);
}

function checkDate() : boolean {
    var dateControl = <HTMLInputElement>document.querySelector('input[type="date"]');
    const choosenDate = new Date(dateControl.value);
    const today = new Date();
    return choosenDate.getTime() - today.getTime() >= 0;
}   

function checkNames() : boolean {
    const name = (<HTMLInputElement>document.getElementById('fname')).value;
    return name.trim().indexOf(' ') != -1;
}