import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        totalAmount: {
            type: Number,
            required: true,
            min: 0,
        },
        stripeSessionId: {
            type: String,
            unique: true,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;