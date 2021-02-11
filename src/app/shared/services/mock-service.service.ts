import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MockTableData } from "./mocks/mock-table-data";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class MockService extends MockTableData{
    baseUrl: string = "https://logistic.mallplaza.cl/";

    getMachines() {
        //let mockIndex = 0;
        //let url = this.baseUrl + "api/v1/machines/mall/" + mockIndex;
        //return this.http.get(url);
        return of({cols:this.machineCols, rows: this.machineRows});
    }

    getMalls() {
        return of({cols:this.mallCols, rows: this.mallRows});
    }

    getCountries() {
        return of({cols:this.countriesCols, rows: this.countriesRows});
    }
}