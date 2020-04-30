const listOfFlights = document.querySelectorAll('tr[data-id-lotu]');
let mxNr = 0;
for(const elem of listOfFlights) {
    const str = elem.getAttribute("data-id-lotu");
    const nr = +str;
    if(mxNr < nr)
        mxNr = nr;
}

// console.log(mxNr);

function wait(ms : number) {
    return new Promise((resolve, reject) => {
        window.setTimeout(resolve, ms);
    });
}

function teczoweKolory(el: HTMLElement) {
    console.log("here");

    setTimeout(function () {
        console.log('red');
        el.style.backgroundColor = 'red';
        setTimeout(function() {
            el.style.backgroundColor = 'orange';
            setTimeout(function() {
                el.style.backgroundColor = 'yellow';
                setTimeout(function() {
                    el.style.backgroundColor = 'green';
                    setTimeout(function() {
                        el.style.backgroundColor = 'blue';
                        setTimeout(function() {
                            el.style.backgroundColor = 'indigo';
                            setTimeout(function() {
                                el.style.backgroundColor = 'purple';
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function teczoweKoloryPromise(el: HTMLElement) {
    let promise = wait(1000);
    for(const color of ['red', 'white', 'blue']) {
        promise = promise.then(function() {
            el.style.backgroundColor = color; return wait(1000);
        });
    }
}

const colorful_elem : HTMLElement = document.getElementById('table_box');
// teczoweKoloryPromise(colorful_elem);

//  async, await function
async function teczoweKolory_async(el : HTMLElement) {
    const colors = ['pink', 'black'];
    for(const color of colors) {
        await wait(1000);
        console.log(color);
        el.style.backgroundColor = color;
    }
}