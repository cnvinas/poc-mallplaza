export class MockTableData {
    machineCols = [
        {
            id: 'Id',
            machineTypeCode: 'Machine type code',
            mallCode: "Mall code",
            name: "Name",
            active: 'Active'
        }
    ];

    machineRows = [
        {
            id: 1,
            machineTypeCode: "12345",
            mallCode: "0061",
            name: "chile",
            active: true
        },
        {
            id: 210,
            machineTypeCode: "12444345",
            mallCode: "0401",
            name: "argentina",
            active: true
        },
        {
            id: 1025,
            machineTypeCode: "345",
            mallCode: "006",
            name: "paraguay",
            active: true
        },
        {
            id: 100,
            machineTypeCode: "654987",
            mallCode: "002",
            name: "brasil",
            active: false
        }
    ];

    mallCols = [
        {
            code: "string",
            countryCode: "string",
            name: "string",
            address: "string",
            latitud: 0,
            longitud: 0,
            active: true
        }
    ];

    mallRows = [
        {
            code: "3213",
            countryCode: "554",
            name: "brasil",
            address: "6a5s4df65as65df",
            latitud: 0,
            longitud: 0,
            active: false
        },
        {
            code: "asdfasd",
            countryCode: "11111",
            name: "holanda",
            address: "8787878",
            latitud: 0,
            longitud: 0,
            active: true
        },
        {
            code: "3213",
            countryCode: "554",
            name: "brasil",
            address: "6a5s4df65as65df",
            latitud: 0,
            longitud: 0,
            active: false
        },
        {
            code: "3288888813",
            countryCode: "554",
            name: "peru",
            address: "321as32df",
            latitud: 0,
            longitud: 0,
            active: false
        },{
            code: "789789",
            countryCode: "554",
            name: "argentina",
            address: "xcvb2132132",
            latitud: 0,
            longitud: 0,
            active: false
        },
    ];

    countriesCols = [{
        code: "Code",
        name: "Name",
        active: "Active"
    }
    ];

    countriesRows = [
        {
            code: "6546",
            name: "zambia",
            active: true
        },
        {
            code: "6546",
            name: "zambia",
            active: true
        },
        {
            code: "6546",
            name: "zambia",
            active: true
        },
        {
            code: "6546",
            name: "zambia",
            active: true
        },
    ];

}