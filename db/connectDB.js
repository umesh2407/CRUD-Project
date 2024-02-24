import mongoose from 'mongoose';
const connectDB = async (DATABSE_URL)=>{
try{
    const DB_OPTIONS={
        dbname:'student_db',
    };
    await mongoose.connect(DATABSE_URL, DB_OPTIONS);
    console.log("connected succesfully..");

} catch(err){
    console.log(err);
}
}

export default connectDB