import { Ubigeo } from "./ubigeo.model";

export class Usuario {
    idUsuario?: number;
    dni?: String;
    nombre?: String;
    primerapellido?: String;
    segundoapellido?: String;
    telefono?: String;
    celular?: String;
    direccion?: String;
    correo?: String;
    password?: String;
    fechareg?: Date;
    ubigeo?: Ubigeo;
    login?: String;
    estado?: boolean;
}
