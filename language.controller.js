import { getConnection } from "./../Database/database";

const getLanguages = async (req, res) => {
    const connection = await getConnection()
    const result = await connection.query("SELECt id, name, programmers FROM languages") 
    console.log(result)
    res.json(result)
};

export const methods = {
    getLanguages
}