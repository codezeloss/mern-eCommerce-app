const cloudinary = require('cloudinary');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// **
// ** Upload Images
const cloudinaryUploadImg = async(fileToUploads) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploads, (result) => {
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id
                },
                {
                    resource_type: "auto"
                }
            )
        })
    })
}

// !!
// !! Delete Images
const cloudinaryDeleteImg = async(fileToDelete) => {
    return new Promise((resolve) => {
        cloudinary.uploader.destroy(fileToDelete, (result) => {
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id
                },
                {
                    resource_type: "auto"
                }
            )
        })
    })
}

module.exports = {cloudinaryUploadImg, cloudinaryDeleteImg}