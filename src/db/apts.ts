import mongoose from "mongoose";

const AptSchema = new mongoose.Schema({
    ref: { type: String, required: true},
    title: { type: String, required: true},
    location: { type: String, required: true},
    price: { type: Number, required: true},
    bedrooms: { type: Number, required: true},
    bathrooms: { type: Number, required: true},
    area: { type: Number, required: false},
    finished: { type: Boolean, required: false},
    deliveryDate: { type: Number, required: false}
});

export const AptModel = mongoose.model('Apt', AptSchema);

export const getApts = () => AptModel.find();
export const createApt = (values: Record<string, any>) => new AptModel(values).save().then((apt) => apt.toObject()); 
export const getAptByRef = (ref: String) => AptModel.findOne({ ref });