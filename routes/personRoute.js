const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log(savedPerson);
    res.status(200).send({
      message: "Saved SuccessFul",
      status: true,
      savedPerson,
    });
  } catch (err) {
    res.status(500).send({
      message: "Try again",
      status: false,
    });
  }
}); 

router.get("/", async (req, res) => {
  try {
    const Persons = await Person.find();
    console.log(Persons);
    res.status(200).send({
      message: "Complete List of Peoples",
      status: true,
      Persons,
    });
  } catch (err) {
    res.status(500).send({
      message: "Try again",
      status: false,
    });
  }
});


router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "chef" || worktype == "waiter" || worktype == "manager") {
      const response = await Person.find({ work: worktype });
      console.log(response);
      res.status(200).send({
        message: "You result is here",
        status: true,
        response,
      });
    } else {
      res.status(404).send({
        message: "Could Not Find",
        status: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Try again",
      status: false,
    });
  }
});

router.put("/:id" , async(req,res) =>{
  try{

  const personId = req.params.id;
  const Full = req.body;
   const response = await Person.findByIdAndUpdate({ _id: personId },Full ,{
    new : true,
    runValidators:true,
   })
   if(!response) {
    return res.status(404).send({message: "Not found"});
   }
   res.status(200).send(response);

  }
  catch(err){
    console.log(err);
    res.status(500).send({message : "Try Again"});
  } 
});

router.delete("/:id" ,async (req,res) =>{
  try{
    const personId = req.params.id;
    const response =  await Person.findByIdAndDelete({ _id: personId });
    if(!response) {
      return res.status(404).send({message: "Not found"});
     }
     console.log("Data- deleted");
     res.status(200).send(response);


  } catch(err){
    console.log(err);
    res.status(500).send({message : "Try Again"});
  } 

})

module.exports = router;