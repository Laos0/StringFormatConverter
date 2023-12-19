// this is the entry point
import {jsonToXml} from './stringFormatConverter/jsonToXml.js';
import {jsonToCsv} from './stringFormatConverter/jsonToCsv.js';
import {xmlToJson} from './stringFormatConverter/xmlToJson.js';
import {csvToJson} from './stringFormatConverter/csvToJson.js';

const converter = { jsonToXml, jsonToCsv, xmlToJson, csvToJson }

export {converter}