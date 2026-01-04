// packages importing
import express from 'express'
import nodemailer from 'nodemailer'
import 'dotenv/config'
import cors from 'cors'

// module importing
import upload from './config/multerconfig.js' // importing multer image uploading function
import projectModel from './model/project-model.js'
import { connectDB } from './config/mongoose-connection.js'

// to use __dirname in ecmascript we have to add this three line of code
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing variables
const app = express()
const port = process.env.PORT
const EMAIL = process.env.EMAIL
const PASS = process.env.PASSWORD
const MONGODB_URI = process.env.MONGODB_URI

// declaring middlewares
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

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
            html: `
              <div style="font-family: Arial, Helvetica, sans-serif; color:#111;">
                <h2 style="font-size:20px; margin:0 0 8px 0;">New Contact Message</h2>
                <p style="font-size:16px; margin:4px 0;"><strong>Name:</strong> ${first_name} ${last_name}</p>
                <p style="font-size:16px; margin:4px 0;"><strong>Email:</strong> ${email}</p>
                <p style="font-size:16px; margin:8px 0 0 0;"><strong>Message:</strong></p>
                <p style="font-size:15px; line-height:1.4; background:#f7f7f7; padding:8px; border-radius:4px;">${message}</p>
              </div>
            `
        });

        res.status(200).json({ success: true, message: "Email sent successfully!", info });
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
    }
})

// project route
app.post('/project', upload.single("image"), async (req, res) => {
    const { title, link, content } = req.body
    const image = req.file.filename

    if (content.length > 180) {
        return res.status(500).json({ success: false, error: true, message: "Content should be under 180 character." })
    }

    try {
        const data = await projectModel.create({ title, link, content, image })
        res.status(200).json({ success: true, error: false, message: "The data is loaded" })
    } catch (error) {
        res.status(500).json({ success: false, error: true, message: error.message })
    }
})

app.get('/project', async (req, res) => {
    try {
        const projects = await projectModel.find({}).sort({ _id: -1 })
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ success: false, error: true, message: error.message })
    }
})

// listing on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)

    //connecting to data base 
    connectDB();
})
