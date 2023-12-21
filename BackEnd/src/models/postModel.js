import { pool } from "../db.js";

export const createGetModel = async () => {
    try {
        const SQLquery = {
            text: "SELECT * FROM posts;",
        }
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        console.log(error);
        throw new Error(error.message ); //"Error GETing something"
    }

};

export const getIDModel = async (id) => {
    try {
        const SQLquery = {
            text: "SELECT * FROM posts WHERE id = $1;",
            values: [id],
        };
        const response = await pool.query(SQLquery);
        if (response.rowCount == 0) {
            throw new Error("Not Found post from ID")
        };
        return response.rows;
    } catch (error) {
        console.log(error);
        throw new Error(error.message); //"Error GETing something by ID"
    }

};

export const createPostModel= async (titulo, url, descripcion, ) => {
    try {
        const SQLquery = {
            text: "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *; ",
            values: [titulo, url, descripcion],
        }
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        console.log(error);
        throw new Error("Error creating: " + error.message);
    }
};


// agregar añadir likes por id


// añadir borrado
//rezar para que funcione