import { createPostModel ,createGetModel,getIDModel } from '../models/postModel.js';

export const getPost = async (req, res) => {
    try {
        const result = await createGetModel();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message + " something bad happend" });
        
    }
};

export const getIDPost = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getIDModel(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message + " something bad happend" });
    }
};

export const postPost = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    try {
        const result = await createPostModel(titulo, url, descripcion);//se crea la funcion de model, con logica de query
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message + " something bad happend" });
    }
};

