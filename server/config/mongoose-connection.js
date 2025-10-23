import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to database')
}).catch((err)=>{
    console.log(err.message)
})

export default mongoose.connection