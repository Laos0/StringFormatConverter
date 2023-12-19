/**
 * Builds XML elements for each row of CSV data.
 * @param {Object} rowData - Data representing a single row of CSV.
 * @param {Object} xmlRoot - XMLBuilder object representing the root element.
 */
const buildXML = (rowData, xmlRoot) => {
    const xmlRow = xmlRoot.ele('row'); // Create an XML element for each row

    // Loop through each key-value pair in the row
    Object.entries(rowData).forEach(([key, value]) => {
        xmlRow.ele(key, value); // Add elements to the row for each key-value pair
    });
};

/**
 * Converts CSV data to XML format.
 * @param {string} csvData - CSV data to be converted to XML.
 * @returns {Promise<string>} - A Promise that resolves with the XML string.
 */
const csvToXml = (csvData) => {
    return new Promise((resolve, reject) => {
        const xmlRoot = xmlbuilder.create('root'); // Root XML element

        const csvStream = csvParser(); // Create csv-parser stream

        csvStream.on('data', (row) => {
            buildXML(row, xmlRoot); // Convert each row of CSV to XML
        });

        csvStream.on('end', () => {
            const xmlString = xmlRoot.end({ pretty: true }); // Get XML string
            resolve(xmlString); // Resolve with XML string
        });

        csvStream.on('error', (err) => {
            reject(err); // Reject with error if any
        });

        // Write CSV data into the stream
        csvStream.write(csvData);
        csvStream.end();
    });
};

export { csvToXml };
