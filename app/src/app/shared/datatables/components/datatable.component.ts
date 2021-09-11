// Librerías.
import { Component, Input, OnInit } from '@angular/core';

// Importaciones de core.
import { DataTableService } from '@core/services/datatables.service';

@Component({
    selector: 'app-datatables',
    templateUrl: '../pages/datatable.page.html'
})
export class DataTableComponent implements OnInit {

    @Input() service?: DataTableService;
    @Input() createRoute: string = '';
    public headers: string[] = [];
    public records: any[] = [];

    // TODO: Desarrollar el componente.

    constructor() { }

    ngOnInit(): void {
        this.recoverHeaders();
        this.recoverData();
    }

    /**
     * @name recoverHeaders
     * @description Recupera las cabeceras de la tabla.
     */
    public recoverHeaders(): void {
        if (this.service) {
            this.headers = this.service.recoverDataHeaders();
        }
        else {
            console.error('recoverHeaders -> No hay servicio para recoger las cabeceras.');
        }
    }

    /**
     * @name recoverData
     * @description Recupera los datos del servicio.
     */
    public async recoverData(): Promise<any> {
        this.records = await this.service?.recoverData({});
        console.log(this.records);
    }

    /**
     * @name openRecord
     * @description Abre la pantalla para visualizar el registro.
     * @param id - Identificador del registro a visualizar.
     */
    public openRecord(id: number): void {
        console.log(id);
    }

    /**
     * @name updateRecord
     * @description Abre la pantalla para actualizar el registro.
     * @param id - Identificador del registro a actualizar.
     */
    public updateRecord(id: number): void {
        console.log(id);
    }

    /**
     * @name deleteRecord
     * @description Borra el elemento seleccionado.
     * @param id - Identificador del registro a borrar.
     */
    public deleteRecord(id: number): void {
        console.log(id);
    }

    public isDate(value: string): boolean {
        // let date: Date = new Date(value);
        // return date instanceof Date && !isNaN(date.getTime());

        return /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3})Z$/.test(value);
    }

}
