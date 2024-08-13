import { Schema, model } from 'mongoose';
import { IUser } from '../types/user';


const UserSchema: Schema = new Schema({
    username: {type: String, required: true, unique: true},
  });

  export default model<IUser>('User', UserSchema);