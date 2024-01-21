import { connect } from 'mongoose';
const mongoURI = "mongodb+srv://shuklasarvesh495:675fT0cwqTlRgA1j@cluster0.q9kts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo =async ()=>{
    try{
        await connect(mongoURI);
        console.log("Connected to db");
    }catch(error){
        console.log(error);
    }
}

export default connectToMongo;