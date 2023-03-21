var formioResult1 = {
    "data": {
        "under18": false,
        "male": true,
        "female": false,
        "haveEpilepsy": false,
        "married": false,
        "single": true,
        "under30": false,
        "over50": true,
        "underlyingHealthConditions": true,
        "textArea": "",
        "submit": false
    },
    "metadata": {}
}
var formioResult2 = {
    "data": {
        "under18": true,
        "male": true,
        "female": false,
        "haveEpilepsy": true,
        "married": true,
        "single": false,
        "under30": false,
        "over50": false,
        "underlyingHealthConditions": false,
        "textArea": "Need updates on programs",
        "submit": false
    },
    "metadata": {}
}
var formioResult3 = {
    "data": {
        "under18": false,
        "male": false,
        "female": true,
        "haveEpilepsy": false,
        "married": true,
        "single": false,
        "under30": true,
        "over50": false,
        "underlyingHealthConditions": false,
        "textArea": "Need updates on programs",
        "submit": false
    },
    "metadata": {}
}



var formioResults = [formioResult1, formioResult2, formioResult3];
function formioStatsCheckbox(arr, checkBoxId) {
    var t = 0;                     // Establish count for true (c) and false (d)
    var f = 0; 
    for (var i in arr) {           // for loop (let i in each of the objects in the array (arr) input into our function; start i = 0, i < length of arr, and i increment by 1 for:
        var key = i;
        var val = arr[i];
            for (var i2 in arr[i].data) { // for loop (let i2 represent the attributes mapping to a boolean value from the data attribute inside each of the objects within each of the objects of arr; input into our function; start i2 = 0, i2 < length of object belonging to data attribute, and i increment by 1)
                var sub_key = i2
                var sub_val = val[i2];
                if (arr[i].data[i2] === true && sub_key === checkBoxId) {
                        t++;
                }
                if (arr[i].data[i2] === false && sub_key === checkBoxId) {
                        f++;
                }
            }
    }
    a = ((t * 100) / (t+f)).toFixed(2)
    console.log(a + `% of population selected ${checkBoxId}`);
}
formioStatsCheckbox(formioResults, "over50");

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