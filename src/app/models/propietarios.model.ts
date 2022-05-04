import { Time } from "@angular/common";
import { Departamento } from "./departamento";
import { Usuario } from "./usuario.model";

export class Propietarios {
    codpropietario?: number;
    dni?: String;
    nombre?: String;
    primerapellido?: String;
    segundoapellido?: String;
    telefono?: String;
    celular?: String;
    fecharegistro?: Date;
    horaregistro?: String;
    estado?: Boolean;
    usuario?: Usuario;
    departamento?: Departamento;
}
