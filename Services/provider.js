var crypto= require('crypto');
var providerModel= require('../Model/customer');
var unique_key_for_login= "abcde12345123456";

/* this function is used for login customer by email/mobile and password */
var login = (data, callback) => {

        /* function to encrypt the password we entered so that we can match it with the encrypted password saved in database */
        function encrypt(password){
            var cypher=  crypto.createCipher('aes-256-ctr','password');
            var crypted= cypher.update(password,'utf8','hex');
            crypted+= cypher.final('hex');
            return crypted;
        }
        data.password= encrypt(data.password);

        // query to find the user with email/mobile and password

        providerModel.model.findOne({$or : [{"email" : data.email, "password": data.password} ,
         {"mobile": data.mobile, "password" :data.password}]}, (err, info) => {
            if(err){
                callback(err)
            }
            // when email/mobile and password values are present in database
            else if(info!= null){
                callback(" you are logged in \n " +info);
            }
            // when data doesn't match with any document in database
            else if(info== null){
                callback("wrong email id or password");
            }
        });
}

module.exports= {
    login      :   login,
    unique_key_for_login : unique_key_for_login
}