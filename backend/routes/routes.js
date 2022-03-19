module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de Programas'})
    })

    server.get('/programas', (require, response) => {
        const sql = 'SELECT * FROM programas';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("programas: ", res);
            response.json(res)
        })
    })
};
