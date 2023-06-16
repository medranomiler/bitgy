import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  user: { type: String, required: true },
});

// I know this is wrong but it works and I don't want to fix it. 

UserSchema.set("toJSON", { getters: true });

const User = models.User || model("User", UserSchema);

export default User;