export interface LoginResponse {
    respuesta: boolean;
    codigo: number;
    mensaje:string;
    data?:User;
}
export interface User{
    id:number;
    email:string;
    numero_celular:string;
    nombres:string;
    apellido_paterno:string;
    apellido_materno:string;
    profile_photo_path:string;
    access_token:string;
}
