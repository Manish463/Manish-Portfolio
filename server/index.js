// modules/packages importing
import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv/config'
import cors from 'cors'
import upload from './config/multerconfig.js' // importing multer image uploading function
import projectModel from './model/project-model.js'
import connection from './config/mongoose-connection.js'

// initializing variables
const app = express()
const port = process.env.PORT
const EMAIL = process.env.EMAIL
const PASS = process.env.PASSWORD
const MONGODB_URI = process.env.MONGODB_URI

// declaring middlewares
app.use(express.json())
app.use(cors())

// handling different routes
// home route
app.get('/', (req, res) => {
    res.send("Hello World!")
})

// contact route
app.post('/contact', async (req, res) => {
    const { first_name, last_name, email, message } = req.body

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASS,
            },
        });

        // sending data to email
        const info = await transporter.sendMail({
            from: EMAIL,
            to: EMAIL,
            subject: `Portfolio Contact from ${first_name}`,
            text: `
        Name: ${first_name + last_name}
        Email: ${email}
        Message: ${message}
      `,
        });

        res.status(200).json({ success: true, message: "Email sent successfully!", info });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to send email" });
    }
})

// project route
app.post('/project', upload.single("image"), async (req, res) => { 
    const {title, link, content} = req.body
    const image = req.file.filename
    
    if(content.length > 180) {
        res.status(500).json({success: false, error: true, message: "Content should be under 180 character."})
    }

    try {
        const project = await projectModel.findOne({title});

        if(false) {
            res.status(500).json({success: false, error: true, message: "This project already exixt."})
        } else {
            const data = await projectModel.create({title, link, content, image})
            // console.log(data)
            res.status(200).json({success: true, error: false, message: "The data is loaded"})
        }
    } catch (error) {
        res.status(500).json({success: false, error: true, message: error.message})
    }
})

app.get('/project', async (req, res) => {
    try {
        const projects = await projectModel.find()
        res.status(200).send(projects)
    } catch (error) {
        res.status(500).json({success: false, error: true, message: error.message})
    }
})

// listing on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
