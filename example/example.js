const config = require('./config.js');
const excel2geojson = require('../index.js');

const example = () =>{
    const geojson = excel2geojson(config);
    console.log(JSON.stringify(geojson));
};

module.exports = example();