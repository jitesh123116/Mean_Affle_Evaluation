let custoInfo = require('../routes/consumer'),
    custoDb = require('../Model/customer');

let token = '9a3784b224';

let model = custoDb.model;

let findInfo = function(data,callback){
  let info = data.info;

  model.findOne({"email":info},function(err,doc){
      if(err)
      callback(err)
      
     else if(doc==null){
        model.findOne({"mobile":info},function(err,doc){
          if(err)
           callback(err)
           else if(doc==null)
           callback("Customer does not exist")
           else
           callback(doc)
        })
      }
     else
    callback(doc)

  }) 
 };

let listAll = function(data,callback){

  model.find({},function(err,doc){
      if(err)
      callback(err)
      else
      callback(doc)
  })
};


module.exports = {
	findInfo : findInfo,
  listAll : listAll,
  token : token
}










