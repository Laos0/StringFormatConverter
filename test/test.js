import { readFile } from 'fs/promises';
import path from 'path';
import { converter } from '../stringFormatConverter/index.js';


// reading the json file async
const readStringFile = async (stringDataFile) => {
    try{
        const currentFilePath = new URL(import.meta.url).pathname;
        const currentDir = path.dirname(currentFilePath);
        const stringDataPath = path.join(currentDir, '..', 'stringData', stringDataFile);

        const data = await readFile(stringDataPath, 'utf8'); // json,xlm, csv, txt, custom string format
    

        console.log(data);
    }catch(err){
        console.error('Error reading the file:', err);
    }
};

const jsonToCsv = async (stringDataFile) => {
    try{
        const currentFilePath = new URL(import.meta.url).pathname;
        const currentDir = path.dirname(currentFilePath);
        const stringDataPath = path.join(currentDir, '..', 'stringData', stringDataFile);

        const data = await readFile(stringDataPath, 'utf8'); // json,xlm, csv, txt, custom string format
        const jsonData = JSON.parse(data);
        const csv = await converter.jsonToCsv(jsonData);

        console.log(csv);
    }catch(err){
        console.error('Error reading the file:', err);
    }
};

const csvToJson = async (stringDataFile) => {
    try{
        const currentFilePath = new URL(import.meta.url).pathname;
        const currentDir = path.dirname(currentFilePath);
        const stringDataPath = path.join(currentDir, '..', 'stringData', stringDataFile);

        const data = await readFile(stringDataPath, 'utf8'); // json,xlm, csv, txt, custom string format
        const json = await converter.csvToJson(data);

        console.log(json);
    }catch(err){
        console.error('Error reading the file:', err);
    }
};

const jsonToXml = async (stringDataFile) =>{
    try{
        const currentFilePath = new URL(import.meta.url).pathname;
        const currentDir = path.dirname(currentFilePath);
        const stringDataPath = path.join(currentDir, '..', 'stringData', stringDataFile);

        const data = await readFile(stringDataPath, 'utf8'); // json,xlm, csv, txt, custom string format
        const jsonData = JSON.parse(data);
        const xml = converter.jsonToXml(jsonData);

        console.log(xml);
    }catch(err){
        console.error('Error reading the file:', err);
    }
};

const xmlToJson = async (stringDataFile) =>{
    try{
        const currentFilePath = new URL(import.meta.url).pathname;
        const currentDir = path.dirname(currentFilePath);
        const stringDataPath = path.join(currentDir, '..', 'stringData', stringDataFile);

        const data = await readFile(stringDataPath, 'utf8'); // json,xlm, csv, txt, custom string format
        
        const jsonData = await converter.xmlToJson(data);
        const jsonString = JSON.stringify(jsonData, null, 2);
        console.log(jsonString);
    }catch(err){
        console.error('Error reading the file:', err);
    }
};


/** enable to read string files */
//readStringFile('jsonTestData.json');

/** enable to needs to test converter */
// jsonToCsv('flatJsonTestData.json');
// csvToJson('csvTestData.csv');
 jsonToXml('jsonTestData.json');
// xmlToJson('xmlTestData.xml');
