var express=require('express');
var router=express.Router();
var path=require('path');
var User=require('../../models/assignments');

router.get('/', function(request, response){
  console.log(request.body);

  User.find({}, function(err, user){
    if(err){
      console.log(err);
    }else{
      response.send(user);
    }
  })
});

// var newUser=new User(request.body);

router.post('/', function(request, response){
    console.log(request.body);

var newUser=new User(request.body);
newUser.save(function(err){
  if(err){
    console.log(err);
    response.sendStatus(500);
  }else{
    console.log('it worked!');
    response.sendStatus(200);
  }

  })

});


module.exports=router;
