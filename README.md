# excel2geojson
It is a module converting from Excel to Geojson

## Installation
```
npm install
```

## Usage

```
npm test
```

## Configuration

It uses following 2 nodejs packages.
* [convert-excel-to-json](https://www.npmjs.com/package/convert-excel-to-json)
* [geojson](https://www.npmjs.com/package/geojson)

The following configurations depend on the above packages. Please see the documents to know more about how to do settings.

```
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
```
