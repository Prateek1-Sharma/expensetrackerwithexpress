const expenseModel=require('../models/expense')
exports.postData=async(req,res,next)=>{
    console.log(req.body);
    let amount =req.body.amount;
    let description =req.body.description;
    let category =req.body.category;
    let data=await expenseModel.create({amount:amount,description:description,category:category});
    res.status(201).json({message:"Data Saved Successfully"});
}
exports.getData=async(req,res,next)=>{
    const data = await expenseModel.findAll();
    // Send the retrieved data as a JSON response
    res.status(200).json(data);
}
exports.deleteData=async(req,res)=>{
    const id = req.params.id;
    await expenseModel.destroy({ where: { id } });
}

