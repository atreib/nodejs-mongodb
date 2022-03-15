import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  age: number;
}

const User = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  { strict: true },
);

User.virtual('label').get((e: IUser) => `${e.name} (${e.age})`);

const UserModel = model('User', User);

export { User, UserModel };
