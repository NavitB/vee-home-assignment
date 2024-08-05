import { Document } from 'mongoose';

export interface IGrant extends Document {
  name: string;
  foundation:string;
  location: string;
  amount: number;
  deadline: Date;
  area: string[]; // change to document of areas + check if array of string is possible
  logo?: string; // change to blob

}

//add user type for user schema
//add userGrant  -
// user_id: number;
// grant_id: number;
// new: boolean;
// liked?: boolean;
// feedback?: string;
// status?: string;
// matchDate?: Date;