import passport from 'passport'
import passportLocal from 'passport-local'

import {getUserByUsername, comparePassword, getUserById} from '../authentication/user-model'

const localStrategy = passportLocal.Strategy;

passport.use(new localStrategy((username, password, done)=>{
    getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user) {
            return done(null, false, {message: "Unknown User"})
        }
        comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch) {
                return done(null,user);
            }else {
                return done(null,false, {message:'Invalid Password'})
            }
        })
    })
}))

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    getUserById(id, function(err, user) {
      done(err, user);
    });
  });

export default passport;