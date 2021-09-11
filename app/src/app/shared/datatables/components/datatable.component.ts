// Librerías.
import { Component, Input, OnInit } from '@angular/core';

// Importaciones de core.
import { DataTableService } from '@core/services/datatables.service';

@Component({
    selector: 'app-datatables',
    templateUrl: '../pages/datatable.page.html'
})
export class DataTableComponent implements OnInit  {

    @Input() service?: DataTableService;

    // TODO: Desarrollar el componente.

    constructor() { }

    ngOnInit(): void {
        this.recoverData();
    }

    public async recoverData(): Promise<any> {
        let data = await this.service?.recoverData({});
        console.log(data);

        // TODO: 
    }

}
