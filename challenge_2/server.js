// this file will initialize the server and use the response methods in app
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// serve files that are in the client directory
app.use(express.static('client'));


app.post('/', (req, res) => {

    // take the req body and save it into a csv file
    // then send the file back to client
    var inputData = JSON.parse(req.body.input);
    // console.log(inputData)

    var makeCSV = function(inputObject) {
        var fields = Object.keys(inputObject);
        fields.pop();
        var rows = [];
    
        var convertChildren = function(data) {
            for (var i = 0; i < data.children.length; i++) {
                rows.push(convertRowToComma(data.children[i]));
                convertChildren(data.children[i]);
            }
        }
    
        var convertRowToComma = function(data) {
            var row = [];
            for (var key in data) {
                if (Array.isArray(data[key])) {
                    continue;
                }
                row.push(data[key]);
            }
            row = row.join(',');
            return row;
        }
        rows.push(convertRowToComma(inputObject));
        convertChildren(inputObject);
    
        var fieldsComma = fields.join(',');
        var output = fieldsComma + '\n';
        rows.forEach((row) => output += row + '\n');
    
        return output;
    }
    
    var output = makeCSV(inputData);
    // console.log(output);

    fs.writeFile('generatedReport.csv', output, (err) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log('Uploaded');
        res.redirect('/');
        res.send();
    })

})

app.post('/download', (req,res) => {
    res.sendFile('generatedReport.csv', {root: '.'}, (err) => {
        if (err) {
            res.send(err);
        } else {
            console.log('Sent');
            res.redirect('/');
            res.send();
        }
    })
})


app.listen(3000);
console.log("Listening on Port 3000...");
