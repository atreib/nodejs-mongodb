import { Schema, model, Model } from 'mongoose';

interface IUser {
  login: string;
  name: string;
  password: string;
  age: number;
}

interface IUserModel extends Model<IUser> {
  login(login: string, password: string): Promise<IUser | undefined>;
}

const User = new Schema<IUser, IUserModel>(
  {
    login: { type: String },
    password: { type: String },
    name: { type: String },
    age: { type: Number },
  },
  { strict: true },
);

User.virtual('label').get((e: IUser) => `${e.name} (${e.age})`);

User.statics.login = async function login(username: string, password: string): Promise<IUser | undefined> {
  const found = await this.findOne({ login: username, password });
  if (found === null) return undefined;
  return found;
};

const UserModel = model<IUser, IUserModel>('User', User);

export { User, UserModel, IUser };
