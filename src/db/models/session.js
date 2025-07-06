// import { model, Schema } from 'mongoose';

// const sessionsSchema = new Schema(
//   {
//     userId: { type: Schema.Types.ObjectId, ref: 'users' },
//     accessToken: { type: String, required: true },
//     refreshToken: { type: String, required: true },
//     accessTokenValidUntil: { type: Date, required: true },
//     refreshTokenValidUntil: { type: Date, required: true },
//   },
//   { timestamps: true, versionKey: false },
// );

// export const SessionsCollection = model('sessions', sessionsSchema);

import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    accessTokenValidUntil: {
      type: Date,
      required: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const SessionsCollection = mongoose.model('Session', sessionSchema);
