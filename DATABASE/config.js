const mongoose= require('mongoose')

const dbCollection = async()=>{
    try{
        mongoose.conect(process.env.MONGO_CNN)
        console.log('Conexión existosa')
    }
    catch(error){
        console.log(error)

    }

}

module.exports= {dbCollection}