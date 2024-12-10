const express=require("express")
const router=express.Router()
router.use(express.json())
const employeeModel=require('../model/employeeModel')

router.get('/employeelist',async (req,res)=>{
    try {
        var data = await employeeModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send("unable to find");
    }


})


router.get('/employeelist/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findById(req.params.id);
        if (!employee) {
            return res.status(404).send("Employee not found");
        }
        res.status(200).send(employee);
    } catch (error) {
        console.error('Error fetching employee:', error);
        res.status(500).send("Error fetching employee");
    }
});

router.post('/employeelist', async (req,res)=>{
    try {
        
        await new employeeModel(req.body).save();
        res.status(200).send("Data added successfully")
    } catch (error) {
        res.status(400).send("unable to send data")
        
    }


});

router.delete('/employeelist/:id',async(req,res)=> {

    try {
        console.log(req.params.id)
        await employeeModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Deleted Successfully")
    } catch (error) {
        res.status(404).send("unable to delete");
        
    }})
router.put("/employeelist/:id",async(req,res)=>{
    try {
        await employeeModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send("updated successfully")
    } catch (error) {
        res.status(404).send("unable to update");
    }
    
    })
module.exports=router