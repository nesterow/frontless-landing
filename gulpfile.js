const fs = require('fs')
const ejs = require('ejs')

let SVG = fs.readFileSync('./embed/Frontless.svg', 'utf8')
SVG = SVG.replace('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n', '') 

exports.default = (cb) => {
  ejs.renderFile('./src/template.ejs', {SVG,}, {}, function(err, str){
    fs.writeFileSync('./index.html', str)
    cb()
  });
}