import mongoose ,{ Document } from 'mongoose';

export interface IUserGrant extends Document {
  user: mongoose.Types.ObjectId;
  grant: mongoose.Types.ObjectId;
  feedback: string;
  status: string; // 'new', 'liked', 'unliked'
  matchDate: Date;
}