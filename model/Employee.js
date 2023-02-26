const Mongoose = require('mongoose')
const EmployeeSchema=Mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:String
})

const EmployeeModel=Mongoose.model('Employees',EmployeeSchema)

module.exports=EmployeeModel;

