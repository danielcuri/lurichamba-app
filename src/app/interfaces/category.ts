export interface CategoryResponse {
    respuesta:boolean;
    codigo:number;
    mensaje:string;
    data?:Category[];
}
export interface Category{
    id:number;
    nombres:string;
    icono_url:string;
}
