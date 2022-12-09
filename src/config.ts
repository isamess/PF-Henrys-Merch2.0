import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.Hello)

export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'henrysmerch-database',
    MONGO_USER: process.env.MONGO_USER ||'admin',                     //usuario por defecto
    MONGO_PASSWORD: process.env.MONGO_PASSWORD ||'admin', 
    MONGO_HOST: process.env.MONGO_HOST ||'localhost',
    PORT: process.env.PORT || 3000

}







//este arch me sirve para guardar algunas props de mi aplicación