import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
  region: {type: String, required: true},
  comuna: {type: String, required: true},
  rut: { type: String, required: true,  unique: true },
  favoriteCampaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }] 
});

const User = model('User', userSchema);

export default User;