// Importaciones de core.
import { ApiError } from "@core/models/api/api-error.model";

/**
 * @name ApiResponse
 * @description Modelo genérico para las respuestas de la API.
 */
export interface ApiResponse<T> {
    status: number;
    data?: T;
    errors?: ApiError[];
}
