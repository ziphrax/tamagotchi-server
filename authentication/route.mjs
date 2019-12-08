import express from 'express'
import User from './user-model'
import passport from 'passport'

//https://medium.com/gomycode/authentication-with-passport-js-73ca65b25feb

const router = express.Router();

router.post('/register', function(req, res){
    const password = req.body.password;
    const password2 = req.body.password2;

    if (password == password2){
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        User.createUser(newUser, function(err, user){
            if(err) throw err;
            res.send(user).end()
        });
    } else{
        res.status(500).send("{errors: \"Passwords don't match\"}").end()
    }
});

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  }
);

// Endpoint to get current user
router.get('/user', function(req, res){
  res.send(req.user);
})


// Endpoint to logout
router.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

export default router