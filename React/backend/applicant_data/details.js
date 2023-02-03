const mongoose = require("mongoose");
const detailsSchema = new mongoose.Schema({
emailAddress : {type:String,required:true},
legalBuName:{type:String,required:true},
buNameOnCard:{type:String,required:true},
buAddressLine1:{type:String,required:true},
buAddressLine2:{type:String,required:true},
buZipCode:{type:String,required:true},
buPhoneNumber:{type:String,required:true},
firstName:{type:String,required:true},
middleName:{type:String,required:true},
lastName:{type:String,required:true},
nameOnCard:{type:String,required:true},
homeAddressLine1:{type:String,required:true},
homeAddressLine2:{type:String,required:true},
homeZipCode:{type:String,required:true},
billing:{type:String,required:true,enum:["Business","Home"]}
},
{collection:"details"}
);
// const ApplicantSchema = new mongoose.Schema({
//     ApplicantCode:{type:String,required:true,unique:true},
//     details:[detailsSchema]
// },
// {collection:"details"}
// )
// const Applicant = mongoose.model("ApplicantDB",ApplicantSchema)
// module.exports = Applicant;
const Details = mongoose.model("detailsDb",detailsSchema)
module.exports = Details;

