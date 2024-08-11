import { Schema, model } from 'mongoose';
import { IGrant } from '../types/grant';

const grantSchema: Schema = new Schema<IGrant>({
  name: { type: String, required: true },
  foundation: { type: String, required: true },
  location: { type: String, required: true },
  amount: { type: Number, required: true },
  deadline: { type: Date, required: true },
  area: { type: [String], required: true },
  logo: { type: String },
});

export default model<IGrant>('Grant', grantSchema);