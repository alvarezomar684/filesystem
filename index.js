// //Imports de los módulos
// import path from "path";
// import fs from "fs/promises"

//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");




const readFileUsers = () => {
    //Imprimir en consola el arreglo de usuarios
    (async () => {
        try{
            const data = await fs.readFile(path.resolve("users.json"), "utf8");
            console.log(data);
        }catch(error){
            console.log(error)
        }
    })();
};



const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    fs.writeFile(path.resolve("hello.txt"), "hello world!", (error) => {
            if(error){
                console.log("No se ha podido escribir en este archivo");
            }
        });

};



const addUser = async(username) => {
    //Agregar un usuario en la lista users.json
    const usersPath = path.resolve("users.json");

    try{
        //Arreglo de usuarios (JSON)
        const data = await fs.readFile(usersPath, "utf8");
        const users = JSON.parse(data); //Convertir de JSON a objeto
        users.push(username);
        await fs.writeFile(usersPath, JSON.stringify(users));
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
