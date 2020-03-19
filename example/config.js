module.exports = {
    excel2json : {
        sourceFile: './example/data.xlsx',
        sheets: ['data'],
        header:{
            rows: 1
        },
        range: 'A1:E9999',
        columnToKey: {
          A: 'id',
          B: 'name',
          C: 'address',
          D: 'lat',
          E: 'lng'
        }
    },
    geojson : {
        Point: ['lat', 'lng']
    }
};