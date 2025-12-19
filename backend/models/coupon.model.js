import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    }
});

export const Coupon = mongoose.model("Coupon", couponSchema);