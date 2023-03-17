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
        "checkbox": false,
        "checkbox1": false,
        "submit": false
    },
    "metadata": {}
}
var formioResult3 = {
    "data": {
        "checkbox": false,
        "checkbox1": true,
        "submit": false
    },
    "metadata": {}
}
var formioResult4 = {
    "data": {
        "checkbox": true,
        "checkbox1": true,
        "submit": false
    },
    "metadata": {}
}

var formioResults = [formioResult1, formioResult2, formioResult3, formioResult4];
var newObj = [];                    // Creates an empty array. We will use this, and push all of the keys(attributes) that contain true boolean values into it.
let a = [];
function formioStatsCheckbox(arr) {
    var c = 0;                     // Establish count for true (c) and false (d)
    var d = 0;
    for (var i in arr) {           // for loop (let i in each of the objects in the array (arr) input into our function; start i = 0, i < length of arr, and i increment by 1 for:
        for (var i2 in arr[i].data) { // for loop (let i2 represent the attributes mapping to a boolean value from the data attribute inside each of the objects within each of the objects of arr; input into our function; start i2 = 0, i2 < length of object belonging to data attribute, and i increment by 1)
            if (arr[i].data[i2] === true) {      //upon completion of one loop, the loop will filter through each attribute and will add to either var c if boolean value is true or to var d if boolean is false. 
                c++;                              //console.log(Object.keys(object1));
                newObj.push(i2) 
            } else {
                d++;
            }
        }
    }
    let total = c + d;
    let percentTrue = Math.round((c / total)*100) + '% True';
    let percentFalse = Math.round((d / total)*100) + '% False';
    console.log('Number of true = ' + c);
    console.log('Number of false = ' + d);
    console.log(percentTrue, percentFalse);
}
const b = formioStatsCheckbox(formioResults);
console.log(newObj);


//                console.log(`${i2} = ` + arr[i].data[i2])     //This can be used to present all the attributes with their associated boolean values (true)
//                console.log(`${i2} = ` + arr[i].data[i2])     //This can be used to present all the attributes with their associated boolean values (false)
/*let car = {
        "Make": "Chevy",
        "Model": "Ford",
        "Year": "2021",
        "Color": "Blue"
    }
    
    function dumpProps(obj) {
    for (const i in obj) {
        console.log(`${i} = ` + obj[i]);
    }
}
let a = dumpProps(car);
*/