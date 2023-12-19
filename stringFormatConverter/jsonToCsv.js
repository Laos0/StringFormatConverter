
import json2csv from 'json2csv';
import * as flat from 'flat';
/**
 * Convert JSON data to CSV format.
 * @param {Object} jsonData - The JSON data object to convert to CSV.
 * @returns {string} The CSV string generated from the JSON data.
 */

// keeping it async just incase changes in libraries flat or json2csv
const jsonToCsv = async (jsonData) => {
    try{
    
        // flat nested json
        const flatJsonData = flat.flatten(jsonData);

        // convert json to csv
        const csv = json2csv.parse(flatJsonData);
        return csv;

    }catch(err){
        if(jsonData.length === 0 || !jsonData[0]){
            console.error('JSON data is empty or invalid.');
        }
        console.error('Failed to parse json to csv:', err);
    }
};


export {jsonToCsv};