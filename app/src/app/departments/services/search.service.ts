// Librerías.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importaciones de core.
import { DataTableService } from '@core/services/datatables.service';
import { ApiResponse } from '@core/models/api/api-response.model';
import { Department } from '@core/models/department.model';

// Importaciones de environments:
import { environment } from '@environments/environment';

@Injectable()
export class SearchService implements DataTableService {
    constructor(
        private httpClient: HttpClient
    ) { }

    /**
     * @name recoverData
     * @description Llama al servicio correspondiente para recuperar los datos que se mostrarán en la tabla.
     * @returns Retorna los datos para mostrar en la tabla.
     */
    public recoverData(filters: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            let body = {
                data: filters
            };

            this.httpClient.request<ApiResponse<Department[]>>(
                'POST',
                environment.api.baseUrl + environment.api.getDepartments,
                {
                    headers,
                    body
                }).subscribe(
                    (response: ApiResponse<Department[]>) => {
                        let departments: any[] = [];
                        if (response.data) {
                            response.data.forEach(department => {
                                departments.push([
                                    department.id,
                                    department.code,
                                    department.name,
                                    department.description,
                                    department.created_at,
                                    department.updated_at
                                ]);
                            });
                        }
                        resolve(departments);
                    },
                    (error: any) => {
                        if (error.error && error.error.errors) reject(error.error.errors);
                        else reject([{
                            code: 'UNKNOW',
                            message: error.message
                        }]);
                    }
                );
        });
    }

    /**
     * @name recoverDataHeaders
     * @description Recupera las cabeceras que se mostrarán en la tabla.
     * @returns Retorna las cabecerás para mostrar en la tabla.
     */
    public recoverDataHeaders(): string[] {
        return [
            'Id',
            'Código',
            'Nombre',
            'Descripción',
            'Fecha de creación',
            'Fecha de modificación',
            ''
        ];
    }

    /**
     * @name recoverFilters
     * @description Recupera los filtros que se mostrarán en la tabla.
     * @returns Retorna los filtros para mostrar en la tabla.
     */
    public recoverFilters(): any {
        return {
            code: '',
            name: '',
            description: '',
            created_at_from: '',
            created_at_to: '',
            updated_at_from: '',
            updated_at_to: ''
        };
    }

    /**
     * @name openRecord
     * @description Abre la pantalla para visualizar el registro seleccionado.
     * @param id - Identificador del registro a visualizar.
     */
    public openRecord(id: number): void {
        throw new Error('Method not implemented.');
    }

    /**
     * @name openUpdateView
     * @description Abre la pantalla para actualizar el elemento seleccionado.
     * @param id - Identificador del registro a actualizar.
     */
    public openUpdateView(id: number): void {
        throw new Error('Method not implemented.');
    }

    /**
     * @name deleteRecord
     * @description Elimina el registro seleccionado.
     * @param id - Identificador del registro a borrar.
     */
    public deleteRecord(id: number): Observable<any> {
        throw new Error('Method not implemented.');
    }
}
