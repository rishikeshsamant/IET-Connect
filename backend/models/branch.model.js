import mongoose from "mongoose";

const branchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        }, 
    }, 
    { timestamps: true}
);

const Branch = mongoose.model('Branch', branchSchema);

export default Branch;