
import parse from 'json2csv';
import * as flat from 'flat';

const jsonToCsv = async (jsonData) => {
    try{
    
        // flat nested json
        const flatJsonData = flat.flatten(jsonData);

        // convert json to csv
        const csv = parse.parse(flatJsonData);
        return csv;

    }catch(err){
        if(jsonData.length === 0 || !jsonData[0]){
            console.error('JSON data is empty or invalid.');
        }
        console.error('Failed to parse json to csv:', err);
    }
};


export {jsonToCsv as jtc};