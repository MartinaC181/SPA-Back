import { Schema, model } from "mongoose";
import { ITurno } from "./type";

const turnoSchema = new Schema<ITurno>({
    cliente: { type: String, required: true },
    servicio: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    estado: { type: String, enum: ["pendiente", "confirmado", "cancelado", "realizado"], default: "pendiente" },
});

const Turno = model<ITurno>('Turno', turnoSchema);

export default Turno;