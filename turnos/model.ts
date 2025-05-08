import { Schema, model} from "mongoose";
import { ITurno } from "./type";
import { ObjectId } from "mongodb";

const turnoSchema = new Schema<ITurno>({
    clienteId: { type: ObjectId, required: true },
    servicioId: { type: ObjectId, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    estado: { type: String, enum: ["pendiente", "confirmado", "cancelado", "realizado"], default: "pendiente" },
});

const Turno = model<ITurno>('Turno', turnoSchema);

export default Turno;