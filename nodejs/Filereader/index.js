const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const {
    promises: fsPromise,
    constants: {
        COPYFILE_EXCL
    } } = require("fs")

function homepage(req, res) {
    fsPromise.copyFile('HTML/index.html', 'HTML/Home.html',)
        .then(() => console.log("Copied Successfully"))
        .catch(() => console.log("Copied Failed"))

    fs.readFile("HTML/index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}

function upload(req, res) {
    var form = new formidable.IncomingForm();
    let files = [];
    let fields = [];
    form
        .on('field', function (field, value) {
            console.log(field, value);
            fields.push([field, value]);
        })
        .on('file', function (field, file) {
            console.log(field, file);
            files.push([field, file]);
        })
        .on('end', function () {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>File is received .</h1>")
            res.write(`<ul>`)
            for (let file of files) {
                res.write(`<li>${file[0]} : ${file[1].name}</li>`)
            }
            res.write(`</ul>`)
            return res.end()
        });

    form.parse(req);
}

http
    .createServer(function (req, res) {
        if (req.url == "/upload") {
            upload(req, res);
        } else if (req.url == "/index") {
            homepage(req, res);
        } else {
            fs.readFile('HTML/form.html', function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        }
    })
    .listen(8118);
