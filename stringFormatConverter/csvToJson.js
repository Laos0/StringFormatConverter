import csvtojson from 'csvtojson';

/**
 * Convert csv data to Json format
 * @param {Object} csvData - the csv data object to convert to json data
 */

const csvToJson = async (csvData) => {

    try{
        const jsonData = await csvtojson().fromString(csvData);
        return jsonData;
    }catch(err){
        console.log('Error trying to convert csv data to json:', err);
    }
}

export {csvToJson as ctj};