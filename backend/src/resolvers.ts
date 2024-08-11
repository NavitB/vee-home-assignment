import { Response, Request } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IGrant } from './types/grant';
import Grant from './models/grant'
import User from './models/user'
import UserGrant from "./models/userGrant";
import mongoose from "mongoose";


// const userId = 'your_user_id_here';

export const resolvers = {
  grantsByStatus: async ({ userId, status }: { userId: string, status: string }) => {
    console.log(`Fetching grants for userId: ${userId} with status: ${status}`);
    try {
      // Populate the 'grant' field to get full grant details
      const userGrants = await UserGrant.find({ user: userId, status }).populate('grant');
      
      console.log(`Found ${userGrants.length} grants with status: ${status}`);
      
      // Ensure 'grant' is fully populated and not just an ObjectId
      return userGrants.map(ug => {
        const grant = ug.grant as any; // TypeScript trick to assert the correct type
        return {
          id: grant._id,
          name: grant.name,
          foundation: grant.foundation,
          location: grant.location,
          amount: grant.amount,
          deadline: grant.deadline,
          area: grant.area,
          logo: grant.logo,
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

    // Find the user-grant connection or create a new one
    let userGrant = await UserGrant.findOne({ user: userId, grant: grantId });
    if (!userGrant) {
      userGrant = new UserGrant({ user: userId, grant: new mongoose.Types.ObjectId(grantId) });
    }

    // Update status, feedback, and matchDate
    userGrant.status = status;
    userGrant.feedback = feedback;
    userGrant.matchDate = new Date(); // Set matchDate to current date
    await userGrant.save();

    // Return the updated grant
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
