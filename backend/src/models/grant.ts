import { Schema, model } from 'mongoose';
import { IGrant } from '../types/grant';

const grantSchema: Schema = new Schema<IGrant>({
  id: {type: Number, required: true, unique: true},
  name: { type: String, required: true },
  foundation: { type: String, required: true },
  location: { type: String, required: true },
  amount: { type: Number, required: true },
  deadline: { type: Date, required: true },
  area: { type: [String], required: true },
  logo: { type: String },
  // new: {type: Boolean, default: true},
  // liked: { type: Boolean, default: false },
  // feedback: { type: String },
  // status: { type: String },
  // matchDate: { type: Date },
});

export default model<IGrant>('Grant', grantSchema);