"use strict";
// import { parseString } from 'xml2js';
// import * as xslt from 'xslt';
// import * as util from 'util';
Object.defineProperty(exports, "__esModule", { value: true });
// const xml2js = require('xml2js');   // import pour une éventuelle conversion xml to json
const fs = require('fs'); // import pour la lecture des fichiers
const xsltFile = 'image-svg.xslt'; // on code en dur le path dde la feuille XSLT
const parseString = require('xml2js').parseString;
function parseXmlToJson(filepath) {
    // source: https://stackoverflow.com/questions/27494825/converting-xml-to-html-in-nodejs-using-libxsltthrows-has-no-method-apply-erro
    // https://www.w3schools.com/xml/xsl_server.asp .. tout simplement ..
    // https://github.com/jindw/xmldom/issues/99
    // fs.readFile(filepath, 'utf-8', function (data, err){
    //     if(err) { console.log(err); }
    //     console.log(data);    
    //     // we then pass the data to our method here
    //     parseString(data, function(err, result){
    //         if(err) { console.log(err); }
    //         // here we log the results of our xml string conversion
    //         console.log(result); 
    //     });
    // });   
    //     files.forEach( file => {
    //Vérification que le fichier lu est bien un SVG (le split . [1] va prendre ce qui est après le .)
    // (index) [0] serait ce qu'il y a avant le .
    if (filepath.split('.').pop() === "svg") {
        let xmldom = require('xmldom').DOMParser;
        fs.readFile(filepath, 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            // let formated = (xmlStringified.replace(/(xlmns|xml):?[a-z]*=\"[^\"]+\"/gi,""));
            // let jsonText = xml2js.parseString(data, {}, cb);
            data.replace(/(xlmns|xml):?[a-z]*=\"[^\"]+\"/gi, "");
            parseString(data, function (err, result) {
                // console.log('DATA: >>>>>>> ',data);
                let xmlStringified = JSON.stringify(data);
                // replaceString("World", "Web", xmlStringified);
                console.log('modification chaine: >>>>> ', xmlStringified.substring(0, 46));
                -stylesheet;
                type = "text/xsl";
                href = "yourxsl.xsl" ?  >
                    // let formated = (xmlStringified.substring(0,40));
                    // XmlString=XmlString.replaceAll("\\<\\?xml(.+?)\\?\\>", "").trim();
                    console.log('FORMATED : >>>>>>> ', xmlStringified) : ;
            });
            // let doc; 
            // let node;
            // doc = new xmldom().parseFromString(data, 'text/xml');
            // // node = doc.getElementsByTagName('svg').getAttribute('xmlns');
            // console.log('NODE >>>>>>>>>>>>>>>>>>>>>', node);
            // console.log('attributes : ', doc.getAttribute('xmlns'));       
        });
    }
    let xml2js;
    // function xmlFileToJs(filepath, cb) {
    //     // let filepath = path.normalize(path.join(__dirname, filename));
    //     fs.readFile(filepath, 'utf8', function (err, xmlStr) {
    //         if (err) { throw (err); }
    //         xml2js.parseString(xmlStr, {}, cb);
    //         console.log('on lit le fichier ..', xml2js , '\n\n');
    //     });    
    // }
    // function jsToXmlFile(filepath, obj, cb) {
    //     // let filepath = path.normalize(path.join(__dirname, filename));
    //     let builder = new xml2js.Builder();
    //     let xml = builder.buildObject(obj);
    //     fs.writeFile(filepath, xml, cb);
    // }  
}
exports.parseXmlToJson = parseXmlToJson;
// function replaceString(oldS, newS, fullS) {
// // On remplace oldS avec newS dans fullS
//     for (var i = 0; i < fullS.length; i++) {
//     if (fullS.substring(i, i + oldS.length) == oldS) {
//         fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
//     }
//     }
//     return fullS;
// }
