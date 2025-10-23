import multer from "multer" // multer package help us to access and operate over the files which we get form the form data
import crypto from 'crypto' // this package generate random bytes
import path from 'path'

// DiskStroage
const storage = multer.diskStorage({
    // the place where the file gona save
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, (err, bytes) => {
            const fn = bytes.toString('hex') + path.extname(file.originalname)
            cb(null, fn)
        })
    }
})

// export upload floder
export default multer({ storage: storage })