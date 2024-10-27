import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    managementPhone: {
      type: String,
      required: true,
    },
    restaurantEmail: {
      type: String,
      required: true,
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    workingDays: {
      type: [Schema.Types.ObjectId],
      ref: "WorkingDay",
      required: true,
    },
    menu: {
      type: [Schema.Types.ObjectId],
      ref: "Menu",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "RestaurantOwner",
      required: true,
    },
    panNumber: {
      type: String,
      required: true,
    },
    gstinNumber: {
      type: String,
      required: true,
    },
    bankDetails: {
      type: Schema.Types.ObjectId,
      ref: "BankDetails",
      required: true,
    },
    fssaiRegistrationNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Restaurant", restaurantSchema);
