// this is the entry point
import {jsonToXml} from './jsonToXml.js';
import {jsonToCsv} from './jsonToCsv.js';
import {xmlToJson} from './xmlToJson.js';
import {csvToJson} from './csvToJson.js';

const converter = { jsonToXml, jsonToCsv, xmlToJson, csvToJson }

export {converter}