function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>";
    return result;
}
let car = {
        "Make": "Chevy",
        "Model": "Ford",
        "Year": "2021",
        "Color": "Blue"
    }

var formioResult1 = {
        "data": {
            "checkbox": true,
            "checkbox1": false,
            "submit": false
        },
        "metadata": {}
}
var formioResult2 = {
    "data": {
        "checkbox": true,
        "checkbox1": false,
        "submit": false
    },
    "metadata": {}
}
var formioResults = [formioResult1, formioResult2];

let a = dumpProps(car, "carNew");
console.log(a);


