const express = require('express');
const app = express();

const worker = [{ id: 1, name: "Elnur", age: 36 }, { id: 2, name: "Samir", age: 33 }, { id: 3, name: "Ilkin", age: 26 }]

app.get('/worker', function (req, res) {
    res.send({ worker: worker })
})






app.listen(3000, function () {
    console.log("qosuldu");
});