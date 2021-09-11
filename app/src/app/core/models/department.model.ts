/**
 * @name Department
 * @description Modelo para almacenar los datos del departamento.
 */
export class Department {
    public id: number = 0;
    public code: string = '';
    public name: string = '';
    public description: string = '';
    public created_at: Date = new Date();
    public updated_at: Date = new Date();
}
