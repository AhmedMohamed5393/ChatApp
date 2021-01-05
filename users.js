// import user models
const Users = require("./user.js");
const express = require("express");
const router = express.Router();
const _ = require('lodash');
router.use(express.json())
const bcrypt = require('bcrypt');
router.post('/addUser', async (req, res, next) => {
    try {
        let user = await Users.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).send("this username is already exist");
        }
        user = new Users(_.pick(req.body, [
            'username',
            'password'
        ]));
        var salt = await bcrypt.genSalt(10);
        user.username = req.body.username;
        user.password = await bcrypt.hash(req.body.password, salt);
        await user.save();
        res.send(user);
    } catch (err) {
        next(err);
    }

});
module.exports = router;
/*const Users = require("./user.js");
const express = require("express");
const router = express.Router();
router.use(express.urlencoded({extended : true}));
const _ = require('lodash');
//const bcrypt = require('bcrypt');
router.post('/addUser', async (req, res, next) => {
       
        Users.findOne({ username: req.body.username }, (err,found)=>{
        if (found) {
            console.log('user already exist');
        }else{

        let user = new User({ 
            username: req.body.username,
            password: req.body.password
        });

        user.save();
    }

});

});
module.exports = router;*/
