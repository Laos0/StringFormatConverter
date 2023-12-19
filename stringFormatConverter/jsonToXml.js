import xmlbuilder from 'xmlbuilder';

/**
 * Checks if a given string adheres to XML element naming rules.
 * @param {string} name - The string to be validated.
 * @returns {boolean} - True if the string matches XML naming rules, otherwise false.
 */
const isValidXmlName = (name) => /^[a-zA-Z_][a-zA-Z0-9._:-]*$/.test(name);

/**
 * Recursively builds XML structure from a JSON object.
 * @param {object} jsonObj - The JSON object to convert to XML.
 * @param {object} parent - The XML parent element.
 */
const buildXML = (jsonObj, parent) => {
    Object.entries(jsonObj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            const arrayParent = parent.ele(isValidXmlName(key) ? key : 'item');
            value.forEach((item) => {
                if (typeof item === 'object' && item !== null) {
                    buildXML(item, arrayParent);
                } else {
                    arrayParent.ele('item', item);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            const node = parent.ele(isValidXmlName(key) ? key : 'item');
            buildXML(value, node);
        } else {
            parent.ele(isValidXmlName(key) ? key : 'item', value);
        }
    });
};

/**
 * Converts a JSON object to XML.
 * @param {object} jsonObject - The JSON object to convert.
 * @returns {string} - The XML string representation of the JSON object.
 */
const jsonToXml = (jsonObject) => {
    try{

        const root = xmlbuilder.create('root');
        buildXML(jsonObject, root);
        return root.end({ pretty: true });
    }catch(err){
        console.error("Failed to convert json to xml:", err);
    }
};

export { jsonToXml };
