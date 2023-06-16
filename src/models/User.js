import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true },
});

UserSchema.set("toJSON", { getters: true });

const User = models.User || model("User", UserSchema);

export default User;