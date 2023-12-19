# StringFormatConverter

## Description
StringFormatConverter is an npm package built on Node.js ESM, providing utilities to seamlessly convert between JSON, CSV, and XML formats. Developers can leverage this package to handle data interchangeably among these formats.

## Features
* CSV to JSON: Convert CSV data to JSON format.
* JSON to CSV: Convert JSON data to CSV format.
* JSON to XML: Convert JSON data to XML format.
* XML to JSON: Convert XML data to JSON format.

## Installation 
To use StringFormatConverter in your project, install it via npm
```bash
npm install stringformatconverter

``````

## Usage
### CSV to JSON
```javascript
import { stringFormatConverter } from 'stringformatconverter';

const csvData = `Name, Age, Country
John Doe, 30, USA
Jane Smith, 25, Canada`;

const jsonData = await stringFormatConverter.csvToJson(csvData);
console.log(jsonData);
```

### JSON to CSV
```javascript
import { stringFormatConverter } from 'stringformatconverter';

const jsonData = [
  { Name: 'John Doe', Age: 30, Country: 'USA' },
  { Name: 'Jane Smith', Age: 25, Country: 'Canada' }
];

const csvData = await stringFormatConverter.jsonToCsv(jsonData);
console.log(csvData);
```

### JSON to XML
```javascript
import { stringFormatConverter } from 'stringformatconverter';

const jsonData = {
  users: [
    { Name: 'John Doe', Age: 30, Country: 'USA' },
    { Name: 'Jane Smith', Age: 25, Country: 'Canada' }
  ]
};

const xmlData = stringFormatConverter.jsonToXml(jsonData);
console.log(xmlData);
```

### XML to JSON
```javascript
import { stringFormatConverter } from 'stringformatconverter';

const xmlData = `
  <users>
    <user>
      <Name>John Doe</Name>
      <Age>30</Age>
      <Country>USA</Country>
    </user>
    <user>
      <Name>Jane Smith</Name>
      <Age>25</Age>
      <Country>Canada</Country>
    </user>
  </users>`;

const jsonData = stringFormatConverter.xmlToJson(xmlData);
console.log(jsonData);
```

## Dependecies 
- [csvtojson](https://www.npmjs.com/package/csvtojson): ^2.0.10
- [flat](https://www.npmjs.com/package/flat): ^6.0.1
- [json2csv](https://www.npmjs.com/package/json2csv): ^6.0.0-alpha.2
- [jsontoxml](https://www.npmjs.com/package/jsontoxml): ^1.0.1
- [xml2js](https://www.npmjs.com/package/xml2js): ^0.6.2
- [xmlbuilder](https://www.npmjs.com/package/xmlbuilder): ^15.1.1

## License
This package is licensed under the [ISC License](https://opensource.org/licenses/ISC).


