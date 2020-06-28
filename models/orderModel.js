const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id:{type: Schema.Types.ObjectId, ref: "user", required:true},
    cart:{type: Object, required: true},
    total_amount :{type: Number, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    payment_id: {type: String},
    payment_mode: {type: String, required: true},
    order_date: {type: Date, required: true, default: Date.now()},
    shipped_date: {type: Date, default: null},
    order_status: {type: Number, required: true, default: 0}
});


// Export Schema
module.exports = mongoose.model("order", orderSchema);