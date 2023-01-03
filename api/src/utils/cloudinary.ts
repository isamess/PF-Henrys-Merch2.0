import { v2 as cloudinary } from 'cloudinary'
import {CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config'

// Config
cloudinary.config ({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true

})

//TODO: subir imágenes con cloudinary
export async function uploadImage(filePath: any){
    return await cloudinary.uploader.upload(filePath,{
    folder: 'henryscloud'
}
)}

//TODO: elimino imágenes de cloudinary de archivos eliminados
export async function deleteImage(public_id: string){
    return await cloudinary.uploader.destroy(public_id)
}