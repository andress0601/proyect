import { Request, Response } from 'express';


import pool from '../database';

class ClientesController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM cliente');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM cliente WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El cliente no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO cliente set ?', [req.body]);
        res.json({ message: 'Cliente guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE cliente set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Cliente actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM cliente WHERE id = ?', [id]);
        res.json({ message: "Cliente eliminado" });
    }
}

const clientesController = new ClientesController;
export default clientesController;