const excelToJson = require('convert-excel-to-json');
const GeoJSON = require('geojson');

const excel2geojson = (config) =>{
    if (!(config.excel2json && config.geojson)) return;
    const json = excelToJson(config.excel2json);
    const sheetName = (config.excel2json.sheets.length > 0) ? config.excel2json.sheets[0] : 'data';
    const geojson = GeoJSON.parse(json[sheetName], config.geojson);
    return geojson;
}
module.exports = excel2geojson;