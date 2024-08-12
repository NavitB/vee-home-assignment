import { Response, Request } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IGrant } from './types/grant';
import Grant from './models/grant'
import User from './models/user'
import UserGrant from "./models/userGrant";
import mongoose from "mongoose";



export const resolvers = {
  grantsByStatus: async ({ userId, status }: { userId: string, status: string }) => {
    console.log(`Fetching grants for userId: ${userId} with status: ${status}`);
    try {
      const userGrants = await UserGrant.find({ user: userId, status }).populate('grant');
      
      console.log(`Found ${userGrants.length} grants with status: ${status}`);
      
      return userGrants.map(ug => {
        const grant = ug.grant as any;
        return {
          grant: {
          id: grant._id,
          name: grant.name,
          foundation: grant.foundation,
          location: grant.location,
          amount: grant.amount,
          deadline: grant.deadline,
          area: grant.area,
          logo: grant.logo,
          },
          status: ug.status,
          matchDate: ug.matchDate || null
        };
      });
    } catch (error) {
      console.error('Error fetching grants:', error);
      throw new Error('Failed to fetch grants');
    }
  },

  changeGrantStatus: async ({ userId, grantId, status, feedback }: { userId: string; grantId: string; status: string; feedback: string }) => {
    if (!['NEW', 'LIKED', 'DISLIKED'].includes(status)) {
      throw new Error('Invalid status');
    }

    let userGrant = await UserGrant.findOne({ user: userId, grant: grantId });
    if (!userGrant) {
      userGrant = new UserGrant({ user: userId, grant: new mongoose.Types.ObjectId(grantId) });
    }

    userGrant.status = status;
    userGrant.feedback = feedback;
    userGrant.matchDate = new Date();
    await userGrant.save();

    return Grant.findById(grantId);
  },

  login: async ({ username }: { username: string }) => {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid username');
    }
    return user;
  },



};
