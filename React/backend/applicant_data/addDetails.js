const express = require("express");
const router = express.Router();
const Details = require("./details");

// let detailsData;
router.post("/details", async (req, res) => {
    let personData = req.body;
    try {
        console.log("Applicant Details", personData);
        if (personData.sameAddress == "on") {
            const detailsData = new Details(
                {
                    emailAddress: personData.emailAddress,
                    legalBuName: personData.legalBuName,
                    buNameOnCard: personData.buNameOnCard,
                    buAddressLine1: personData.buAddressLine1,
                    buAddressLine2: personData.buAddressLine2,
                    buZipCode: personData.buZipCode,
                    buPhoneNumber: personData.buPhoneNumber,
                    firstName: personData.firstName,
                    middleName: personData.middleName,
                    lastName: personData.lastName,
                    nameOnCard: personData.nameOnCard,
                    homeAddressLine1: personData.buAddressLine1,
                    homeAddressLine2: personData.buAddressLine2,
                    homeZipCode: personData.buZipCode,
                    billing: personData.billing
                });
            // Details.create(detailsData);
            // detailsData.save(function (err, result) {
            //     if (err) return console.error(err);
            //     console.log(result.billing + " saved to collection.");
            //   });


            // const data = await detailsData.insertOne();
            // res.status(200).json(data);
            Details.insertOne(detailsData).exec(function(err,res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("success")
                }
            });

        }


        else {
            const detailsData = new Details(
                {
                    emailAddress: personData.emailAddress,
                    legalBuName: personData.legalBuName,
                    buNameOnCard: personData.buNameOnCard,
                    buAddressLine1: personData.buAddressLine1,
                    buAddressLine2: personData.buAddressLine2,
                    buZipCode: personData.buZipCode,
                    buPhoneNumber: personData.buPhoneNumber,
                    firstName: personData.firstName,
                    middleName: personData.middleName,
                    lastName: personData.lastName,
                    nameOnCard: personData.nameOnCard,
                    homeAddressLine1: personData.homeAddressLine1,
                    homeAddressLine2: personData.homeAddressLine2,
                    homeZipCode: personData.homeZipCode,
                    billing: personData.billing
                });
            // Details.create(detailsData);
            // detailsData.save(function (err, result) {
            //     if (err) return console.error(err);
            //     console.log(result.billing + " saved to collection.");
            // });
            // const data = await detailsData.insertOne();
            // res.status(200).json(data);
            Details.insertOne(detailsData).exec(function(err,res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("success")
                }
            });

        }
    }
    // detailsData.save((err,doc)=>{
    //     // req.flash("success","Data added.");
    //     res.redirect("/application/details");
    // });
    // details.insertOne(detailsData,function(err,result){
    //     // result.details.push(detailsData);
    //     if (err) throw err;
    // });
    // }

    // Applicant.ApplicantCode=Math.round(Math.random()*10);
    // Applicant.details=detailsData;
    // let myObj = {ApplicantCode,details};
    // if (personData.sameAddress == "on"){
    //     detailsData.homeAddressLine1 = personData.buAddressLine1;
    //     detailsData.homeAddressLine2 = personData.buAddressLine2;
    //     detailsData.homeZipCode = personData.buZipCode
    // }




    catch (err) {
        res.send({ message: err })
        console.log(err);
    }
})


router.get("/applicantDetails", async (req, res) => {
    try {
        Details.find().exec(function (err, result) {
            res.send(result)
        })
    }
    catch (err) {
        res.send({ message: err })
    }
})


module.exports = router;