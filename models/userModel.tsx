import { model, Schema, Model, Document } from "mongoose"

interface IUser extends Document {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
}

const UserSchema = new Schema({
	email: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, default: 'user' },
	avatar: { type: String, default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png' }
}, { timestamps: true });

const User: Model<IUser> = model('User', UserSchema)

export default User
