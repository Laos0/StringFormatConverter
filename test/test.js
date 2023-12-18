import { readFile } from 'fs/promises';
import path from 'path';
import { jtc } from '../stringFormatConverter/jsonToCsv.js';
import { ctj } from '../stringFormatConverter/csvToJson.js';
import csvParser from 'csv-parser';


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
        const csv = await jtc(jsonData);

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
        //const csvData = csvParser(data);
        const json = await ctj(data);

        console.log(json);
    }catch(err){
        console.error('Error reading the file:', err);
    }
};




/** enable to read string files */
//readStringFile('jsonTestData.json');

/** enable to needs to test converter */
//jsonToCsv('flatJsonTestData.json');
csvToJson('csvTestData.csv');