function zaloguj(...komunikaty: string[]) {

    console.log("Ależ skomplikowany program!", ...komunikaty);

}

zaloguj("Ja", "cię", "nie", "mogę");

let jsonString: string = `{

    "piloci": [

        "Pirx",

        "Exupery",

        "Idzikowski",

        "Główczewski"

    ],

    "lotniska": {

        "WAW": ["Warszawa", [3690, 2800]],

        "NRT": ["Narita", [4000, 2500]],

        "BQH": ["Biggin Hill", [1802, 792]],

        "LBG": ["Paris-Le Bourget", [2665, 3000, 1845]]

    }

}`;

interface ILotnisko {
    [lotnisko: string]: [string, number[]];
}

type Pilot = string;

interface ILiniaLotnicza {
    piloci: Pilot[];
    lotniska: ILotnisko;
}

function sprawdzDaneLiniiLotniczej(dane: any): dane is ILiniaLotnicza {
    if(!Array.isArray(dane.piloci)) return false;
    for(const s of dane.piloci) {
        if(!(typeof(s) === "string"))
            return false;
    }

    for(const key in dane.lotniska) {
        if(dane.lotniska.hasOwnProperty(key)) {
            const value = dane.lotniska[key];

            if(!(typeof(key) === "string"))
                return false;

            if(!Array.isArray(value)) return false;
            if(!(typeof(value[0]) === "string")) return false;

            for(const nr of value[1]) {
                if(!(typeof(nr) === "number"))
                    return false;
            }
        }
    }

    for(const elem of dane) {
        if(!["lotniska", "piloci"].includes(elem))
            return false;
    }

    return true;
}

//  important part -> : ILiniaLotnicza
let daneLiniiLotniczej: ILiniaLotnicza = JSON.parse(jsonString);

if(sprawdzDaneLiniiLotniczej(daneLiniiLotniczej)) {
    let juzNaPewnoDaneLinii = daneLiniiLotniczej;

    console.log(juzNaPewnoDaneLinii.piloci.length);
}