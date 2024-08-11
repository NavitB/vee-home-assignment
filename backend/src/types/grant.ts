import { Document } from 'mongoose';

export interface IGrant extends Document {
  name: string;
  foundation:string;
  location: string;
  amount: number;
  deadline: Date;
  area: string[]; 
  logo?: string;

}
