// the entry point
import {jsonToXml} from './stringFormatConverter/jsonToXml.js';
import {jsonToCsv} from './stringFormatConverter/jsonToCsv.js';
import {xmlToJson} from './stringFormatConverter/xmlToJson.js';
import {csvToJson} from './stringFormatConverter/csvToJson.js';
import {csvToXml} from './stringFormatConverter/csvToXml.js';
import { xmlToCsv } from './stringFormatConverter/xmlToCsv.js';

const stringFormatConverter = { jsonToXml, jsonToCsv, xmlToJson, csvToJson, csvToXml, xmlToCsv}

export {stringFormatConverter}