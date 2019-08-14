/**The server must flatten the JSON hierarchy, mapping each item/object in 
 * the JSON to a single line of CSV report (see included sample output), 
 * where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy 
(see included sample file). In other words, all sibling records at a 
particular level of the hierarchy will have the same set of properties, 
but child objects might not contain the same properties. In all cases, 
every property you encounter must be present in the final CSV output.
You may also assume that child records in the JSON will always be in a 
property called `children`.
 */
console.log('hello');

// const express = require('express');
// const app = express();

// var userData = document.getElementById("input").value;

// app.post('/upload_json', (req, res) => {
//     console.log(csvContent);
//     res.send(csvContent);
// })




// var encodedUri = encodeURI(csvContent);
// var link = document.createElement("a");
// link.setAttribute("href", encodedUri);
// link.setAttribute("download", "my_data.csv");
// document.body.appendChild(link); // Required for FF

// link.click();


// // // this will be the file we send back to the user, need to 
// // // separate data into comma delimited columns
// var userDataArray = userData.split('/n');
// var csvContent = "data:text/csv;charset=utf-8,";
// userDataArray.forEach((row) => {
//     var rowArray = row.split(' ');
//     var csvRow = rowArray.join(',');
//     csvContent += csvRow + "\r\n";
// });


// make a request to the server
// var myHeaders = new Headers();

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// var myRequest = new Request('flowers.jpg', myInit);

// fetch(myRequest).then(function(response) {
//   return response.blob();
// }).then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });