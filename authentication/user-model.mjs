import monggose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        index:true
    },
    created: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});

const User = mongoose.model('User',userSchema);

export const createUser = (newUser, callback) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

export const getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

export const getUserById = function(id, callback){
    User.findById(id, callback);
}

export const comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}

export default User