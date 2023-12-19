import { xmlToJson } from "./xmlToJson.js";
import { jsonToCsv } from "./jsonToCsv.js";

/**
 * Converts XML data to CSV format.
 * @param {string} xmlData - The XML string to be converted to CSV format.
 * @returns {Promise<string>} - A Promise that resolves with the CSV string.
 * @throws {Error} - Throws an error if conversion fails.
 */
const xmlToCsv = async (xmlData) => {
    try {
        // First, convert the XML data to JSON
        const jsonData = await xmlToJson(xmlData);

        // Then, convert the JSON data to CSV
        const csvData = jsonToCsv(jsonData);

        return csvData;
    } catch (err) {
        console.error("Failed to convert XML to CSV:", err);
    }
};

export { xmlToCsv };
