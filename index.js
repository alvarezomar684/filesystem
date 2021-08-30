//Imports de los módulos
import path from "path";
import fs from "fs/promises"



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

readFileUsers()

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    fs.writeFile(path.resolve("hello.txt"), "hello world!", (error) => {
            if(error){
                console.log("No se ha podido escribir en este archivo");
            }
        });

};

writeHelloWorld()

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    fs.writeFile(path.resolve("users.json"), username, (error) => {
        if(error){
            console.log("No se ha podido escribir en este archivo");
        }
    });
    
};

addUser("omar")