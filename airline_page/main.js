const listOfFlights = document.querySelectorAll('tr[data-id-lotu]');
let mxNr = 0;
for (const elem of listOfFlights) {
    const str = elem.getAttribute("data-id-lotu");
    const nr = +str;
    if (mxNr < nr)
        mxNr = nr;
}
console.log(mxNr);
function wait(ms) {
    return new Promise((resolve, reject) => {
        window.setTimeout(resolve, ms);
    });
}
function teczoweKolory(el) {
    console.log("here");
    setTimeout(function () {
        console.log('red');
        el.style.backgroundColor = 'red';
        setTimeout(function () {
            el.style.backgroundColor = 'orange';
            setTimeout(function () {
                el.style.backgroundColor = 'yellow';
                setTimeout(function () {
                    el.style.backgroundColor = 'green';
                    setTimeout(function () {
                        el.style.backgroundColor = 'blue';
                        setTimeout(function () {
                            el.style.backgroundColor = 'indigo';
                            setTimeout(function () {
                                el.style.backgroundColor = 'purple';
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
function teczoweKoloryPromise(el) {
    let promise = wait(1000);
    for (const color of ['red', 'white', 'blue']) {
        promise = promise.then(function () {
            el.style.backgroundColor = color;
            return wait(1000);
        });
    }
}
const colorful_elem = document.getElementById('table_box');
// teczoweKoloryPromise(colorful_elem);
//  async, await
function pokoloruj(ev) {
    let target = ev.target;
    let elem = this;
    console.log(elem, target);
    let currentColor = window.getComputedStyle(elem).getPropertyValue('background-color');
    let [_, ...colorsAsText] = /rgb\((\d+),[^0-9]*(\d+),[^0-9]*(\d+)\)/.exec(currentColor);
    let colors = [];
    for (let i = 0; i < 3; i++)
        colors[i] = (parseInt(colorsAsText[i]) + 0x20) % 256;
    elem.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
}
