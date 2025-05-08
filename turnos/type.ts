import { ObjectId } from "mongoose";

type TurnoStatus = "pendiente" | "confirmado" | "cancelado" | "realizado";

export interface ITurno {
    clienteId?: ObjectId,
    servicioId?: ObjectId,
    fecha: Date,
    hora: string,
    estado: TurnoStatus,
}