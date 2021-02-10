import { Inject } from "@angular/core";
import { of } from "rxjs";
import { MockTableData } from "./mocks/mock-table-data";

@Inject({
    providedIn: 'root' 
})
export class MockService extends MockTableData{
  
    getData(){
        return of({cols:this.tableCols, rows: this.tableRows});
    }
}