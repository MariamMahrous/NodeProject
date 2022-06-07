let mongoose = require('mongoose');
let userSchema = require('../database/user');
let bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

userSchema.methods.generateAuthToken = async function() {
    let token = jwt.sign({ _id: this._id.toString() }, 'thisismysecretkey');
   this.tokens.push({token});
  await this.save();
   
   
    return token;
}

userSchema.statics.findByCradentails = async function(email, password) {
    let user = await User.findOne({ email });
    if (!user) {
        throw new Error('data is invalid');
    }
    let is_match = await bcrypt.compare(password, user.password);
    if (!is_match) {
        throw new Error('data is invalid');
    }
    return user;
}
let User = mongoose.model('users', userSchema);

module.exports = User;