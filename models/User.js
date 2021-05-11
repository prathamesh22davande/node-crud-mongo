import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new schema({
  uid: { type: String, required: true },
  name: { type: String, required: true },
  mobile:{type:String,required:true},
  email: { type: String, required: true },
  dob: { type: Date, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
