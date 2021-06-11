var express = require('express');
var router = express.Router();
var homerouter=require('./homeTable')
const fileUpload = require('express-fileupload');

const app = express();
router.use(fileUpload());


JSON.stringify()


// get
router.get("/",async(req,res)=>{
    var getall= await homerouter.find();
    res.json(getall)
 });

  // post
  router.post("/",async(req,res)=>{
    console.log(req);
    var data =  new  homerouter({
        name:req.body.name,
        email:req.body.email,
        district:req.body.district,
        state:req.body.state,
        contact:req.body.contact,
        address:req.body.address,
    });
    await data .save();
    res.json(data);
})


//Update
router.put("/update", async(req,res) => {
    
      var update =  await homerouter.updateMany({_id:req.body._id}, { $set :{
        
        name:req.body.name,
        email:req.body.email,
        district:req.body.district,
        state:req.body.state,
        contact:req.body.contact,
        address:req.body.address,
      }});
      res.json(update);
  })


  //get id
router.get("/:id", async(req,res)=>{
    var getData  = await homerouter.findById(req.params.id);
    res.json(getData); 
    })
  
  
  
  //delete
  router.delete("/del/:id",async(req,res)=>{
      console.log(req)
      var deldata= await homerouter.findByIdAndDelete(req.params.id);
      res.json(deldata)
   });



   module.exports = router;