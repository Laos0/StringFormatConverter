import { parseString } from 'xml2js';

/**
 * Converts XML string to a JSON object.
 * @param {string} xmlString - The XML string to be converted.
 * @returns {Promise<object>} - A Promise that resolves with the JSON object converted from XML.
 * @throws {Error} - Throws an error if the XML parsing fails.
 */
const xmlToJson = (xmlString) => {
    return new Promise((resolve, reject) => {
        parseString(xmlString, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

export {xmlToJson};
