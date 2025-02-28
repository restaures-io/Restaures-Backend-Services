import { Schema, model } from "mongoose";

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  restaurant_id: { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: { type: [String] },
  timeToPrepare: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Starter', 'Main Course', 'Dessert', 'Beverage', 'Others'],
    required: true
  }, // e.g., 'Starter', 'Main Course'
});

export default model("Menu", menuItemSchema);
