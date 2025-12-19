import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        expirationDate: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Coupon = mongoose.model("Coupon", couponSchema);