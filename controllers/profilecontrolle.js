
let User = require('../models/user');
let profile = require('../models/profile');
let getprofile = async(req, res) => {
    try 
    {
        await profile.findOne({ User:req.User.id}).populate('user',['name','age']);
        if (!profile)
        {
           return res.status(400).send({msg:'there is no profile for this '});
        }
    }
    catch(err)
    {
    //    console.error(err.message);
       res.status(500).send('server error');
    }

}
module.exports = {
    
    getprofiles

    
}