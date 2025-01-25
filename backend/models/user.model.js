import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [6, 'Email must be at least 6 characters'],
        maxlength: [50, 'Email must not be more than 50 characters']
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
});

// Static method to hash the password with salt
userSchema.statics.hashPassword = async function(password) {
    const saltRounds = 10; // Recommended number of salt rounds
    return await bcrypt.hash(password, saltRounds);
};

// Instance method to validate password
userSchema.methods.isValidatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Instance method to generate JWT
userSchema.methods.generateJWT = function() {
    return jwt.sign(
        { email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
};

const User = mongoose.model('user', userSchema);

export default User;
