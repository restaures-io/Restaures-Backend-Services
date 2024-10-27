import { Schema, model } from "mongoose";

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { 
    type: String,
    enum: ['Starter', 'Main Course', 'Dessert', 'Beverage', 'Others'],
    required: true
   }, // e.g., 'Starter', 'Main Course'
});

export default model("Menu", menuItemSchema);
