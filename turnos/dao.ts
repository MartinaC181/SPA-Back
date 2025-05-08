import { ITurno } from "./type";
import Turno from "./model";

class TurnoDao {
    async getAllTurnos(): Promise<ITurno[]> {
        try {
            const turnos = await Turno.find({});
            return turnos;
        } catch (error) {
            throw new Error("Error fetching turnos: " + error);
        }
    }
    async getTurnoById(turnoId: string): Promise<ITurno | null> {
        try {
            const turno = await Turno.findById(turnoId);
            return turno;   
        } catch (error) {
            throw new Error("Error fetching turno: " + error);
        }
    }
    async createTurno(turno: ITurno): Promise<ITurno> {
        try {
            const newTurno = await Turno.create(turno);
            return newTurno;
        } catch (error) {
            throw new Error("Error creating turno: " + error);
        }
    }
    async editTurno(turnoId: string, turno: ITurno): Promise<ITurno | null> {
        try {
            const updatedTurno = await Turno.findByIdAndUpdate(turnoId, turno, {
                new: true,
            });
            return updatedTurno;
        } catch (error) {
            throw new Error("Error updating turno: " + error);
        }
    }
    async deleteTurno(turnoId: string): Promise<ITurno | null> {
        try {
            const deletedTurno = await Turno.findByIdAndDelete(turnoId);
            return deletedTurno;
        } catch (error) {
            throw new Error("Error deleting turno: " + error);
        }
    }
}

export const turnoDao = new TurnoDao();