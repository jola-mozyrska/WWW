var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function zaloguj() {
    var komunikaty = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        komunikaty[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays(["Ależ skomplikowany program!"], komunikaty));
}
zaloguj("Ja", "cię", "nie", "mogę");
// let jsonString: string = `{
//     "piloci": [
//         "Pirx",
//         "Exupery",
//         "Idzikowski",
//         "Główczewski"
//     ],
//     "lotniska": {
//         "WAW": ["Warszawa", [3690, 2800]],
//         "NRT": ["Narita", [4000, 2500]],
//         "BQH": ["Biggin Hill", [1802, 792]],
//         "LBG": ["Paris-Le Bourget", [2665, 3000, 1845]]
//     }
// }`;
var jsonString = "{\n\n    \"piloci\": [\n\n        \"Pirx\",\n\n        \"Exupery\",\n\n        \"Idzikowski\",\n\n        \"G\u0142\u00F3wczewski\"\n\n    ],\n\n    \"lotniska\": {\n\n        \"WAW\": [\"Warszawa\", [3690, 2800]],\n\n        \"NRT\": [\"Narita\", [4000, 2500]],\n\n        \"BQH\": [\"Biggin Hill\", [1802, 792]],\n\n        \"LBG\": [\"Paris-Le Bourget\", [3000, 1845]]\n\n    }\n\n}";
function sprawdzDaneLiniiLotniczej(dane) {
    if (!Array.isArray(dane.piloci))
        return false;
    for (var _i = 0, _a = dane.piloci; _i < _a.length; _i++) {
        var s = _a[_i];
        if (!(typeof (s) === "string"))
            return false;
    }
    for (var key in dane.lotniska) {
        if (dane.lotniska.hasOwnProperty(key)) {
            var value = dane.lotniska[key];
            if (!(typeof (key) === "string"))
                return false;
            if (!Array.isArray(value))
                return false;
            if (!(typeof (value[0]) === "string"))
                return false;
            for (var _b = 0, _c = value[1]; _b < _c.length; _b++) {
                var nr = _c[_b];
                if (!(typeof (nr) === "number"))
                    return false;
            }
        }
    }
    for (var _d = 0, dane_1 = dane; _d < dane_1.length; _d++) {
        var elem = dane_1[_d];
        if (!["lotniska", "piloci"].includes(elem))
            return false;
    }
    return true;
}
var daneLiniiLotniczej = JSON.parse(jsonString);
if (sprawdzDaneLiniiLotniczej(daneLiniiLotniczej)) {
    var juzNaPewnoDaneLinii = daneLiniiLotniczej;
    console.log(juzNaPewnoDaneLinii.piloci.length);
}
//# sourceMappingURL=main.js.map