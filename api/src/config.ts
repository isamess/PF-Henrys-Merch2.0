import dotenv from 'dotenv'
dotenv.config()

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'henrysmerch',
    MONGO_USER: process.env.MONGO_USER ||'admin',                     //usuario por defecto
    MONGO_PASSWORD: process.env.MONGO_PASSWORD ||'admin', 
    MONGO_HOST: process.env.MONGO_HOST ||'localhost',
    PORT: process.env.PORT || 3001,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DEPLOY: process.env.MONGO_DEPLOY
}
    export const CLOUDINARY_CLOUD_NAME= process.env.CLOUDINARY_CLOUD_NAME;
    export const CLOUDINARY_API_KEY= process.env.CLOUDINARY_API_KEY;
    export const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET;


