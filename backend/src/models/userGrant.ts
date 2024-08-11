import { Schema, model } from 'mongoose';
import { IUserGrant } from '../types/userGrant';

const UserGrantSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    grant: { type: Schema.Types.ObjectId, ref: 'Grant', required: true },
    feedback: { type: String, default: '' },
    status: { type: String, default: 'NEW' },
    matchDate: {type: Date}
  });

  export default model<IUserGrant>('UserGrant', UserGrantSchema);
