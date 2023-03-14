function dumpProps(obj) {
    for (const i in obj) {
        console.log(`${i} = ` + obj[i]);
    }
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

function formioStatsT(arr) {
    var c = 0;
    for (let i in arr) {
        for (let i2 in arr[i].data)
            if (arr[i].data[i2] === true) {
                c++;
                console.log(`${i2} = ` + arr[i].data[i2])
            }
    }
    console.log(c);
}
function formioStatsF(arr) {
    var d = 0;
    for (let i in arr) {
        for (let i2 in arr[i].data)
            if (arr[i].data[i2] === false) {
                d++;
                console.log(`${i2} = ` + arr[i].data[i2])
            }
    }
    console.log(d);
}

let a = dumpProps(car);
let b = formioStatsT(formioResults);
let d = formioStatsF(formioResults);
//d = console.log(`${i2} = ` + arr[i].data[i2])
