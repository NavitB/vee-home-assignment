import { Schema, model } from 'mongoose';
import { IUser } from '../types/user';


const UserSchema: Schema = new Schema({
    username: {type: String, required: true, unique: true},
    // email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
  });

  export default model<IUser>('User', UserSchema);