import { db } from "../database/db.js";

export const getUsers= (_, res)=> {
    const sql= "select c.id, u.nome, c.comentario from comentarios c join usuarios u on u.id= c.id_usuarios"

    db.query(sql, (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados obtidos com sucesso.`)
            return res.status(200).json(data);
        }
    });
};

export const postUsers= (req, res)=> {
    const sql= "insert into comentarios (id_usuarios, comentario) values (?,?)";

    const {id_usuarios, comentario} = req.body;

    console.log(id_usuarios + "    " + comentario)

    db.query(sql, [id_usuarios, comentario], (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição1 ${err}`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados inseridos com sucesso.`)
            return res.status(200).json(data);
        }
    });
};

export const updateUsers= (req, res)=> {
    const sql= "update comentarios set  comentario =? where id = ?";

    const {id_usuarios, comentario, id}= req.body;

    db.query(sql, [id_usuarios, comentario, id], (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados atualizados com sucesso.`)
            return res.status(200).json(data);
        }
    });
};

export const deleteUsers= (req, res)=> {
    const sql= "delete from comentarios where id = ?";

    const {id}= req.query;

    db.query(sql, [id], (err, data)=>{
        if(err){
            console.log(`Erro ao processar a requisição8`)
            return res.status(500).json(err);
        }else{
            console.log(`Dados apagados com sucesso.`)
            return res.status(200).json(data);
        }
    });
};