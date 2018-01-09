import { parseString } from 'xml2js';


// import * as xml2js from 'xml2js'; 
// // let parser = require('xml2json');

// let parser = new xml2js.Parser (); 

const xml2js = require('xml2js');
const fs = require('fs');

export function parseXmlToJson(filepath: any ) {

    // Il faut appliquer les regles de filtrage avec une feuille xslt ici

    xmlFileToJs(filepath, function (err, obj) {
        if (err) { throw (err); }
        jsToXmlFile('theme2.xml', obj, function (err) {
            if (err) console.log(err);
        })
    });
    // -----------------------------------------------------------------------
    
    // parser.parseString(xml, { attrkey: '@',  xmlns: true }, function(err, json) {
        //     var xml2 = xmlbuilder.create(json,
        //        {version: '1.0', encoding: 'UTF-8', standalone: true}
        //     ).end({pretty: true, standalone: true})
        // });
 
        
        // let xml = "<foo attr=\"value\">bar</foo>";
        // console.log("input -> %s", xml)
        
        // xml to json
        // let json = parser.toJson(xml);
        // console.log("to json -> %s", json);
    
        // json to xml
        // let xml = parser.toXml(json);
        // console.log("back to xml -> %s", xml)
    }

    function xmlFileToJs(filepath, cb) {
        // var filepath = path.normalize(path.join(__dirname, filename));
        fs.readFile(filepath, 'utf8', function (err, xmlStr) {
            if (err) { throw (err); }
            xml2js.parseString(xmlStr, {}, cb);
            console.log('on lit le fichier ..', xml2js , '\n\n');
        });    
    }
    
    function jsToXmlFile(filepath, obj, cb) {
        // var filepath = path.normalize(path.join(__dirname, filename));
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(obj);
        fs.writeFile(filepath, xml, cb);
    }