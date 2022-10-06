const Sequelize=require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define('Videojuego',{

        nombreVideojuego:{
            type:Sequelize.STRING,
            allowNull: true
        },
        clasificacion: Sequelize.STRING

    });
}