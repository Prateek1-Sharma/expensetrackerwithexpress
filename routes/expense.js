const express=require("express");

const router=express.Router();
const expenseController=require('../controllers/expense')
router.post("/expense",expenseController.postData)
router.get("/expense",expenseController.getData)
router.delete("/expense/:id",expenseController.deleteData)

module.exports=router;