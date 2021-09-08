/**
 * @name Login
 * @description Modelo para almacenar los datos del login.
 */
export class Login {
    public id: number = 0;
    public username: string = '';
    public password?: string;
    public enabled: boolean = false;
    public created_at: Date = new Date();
    public updated_at: Date = new Date();

    public token?: string;
}
