const multer = require('multer');
const Campaign = require("../models/campaignsModel");

// get all campaigns
const getCampaigns = async (req, res, next) => {
   Campaign.find()
   .then(data => {
     res.status(200).json({message: "Welcome to Campaign list"});
     console.log('SUCCESS: Connected to Campaign');
  })
  .catch(() =>{
    console.log('ERROR: Could not connect to the fleets route');
    res.sendStatus(403);
  })
};


//   post campaigns
const postCampaign =  async (req, res) => {

    const { name, desc, ownerNumber, ownerEmail, ownerContact, image, } = req.body

    const newCampaign = new Fleet({
        image,
        name,
        desc,
        ownerNumber,
        ownerEmail,
        ownerContact,
    })
    newCampaign
    .save()
    .then(() =>{
        return res.status(200).json("Campaign Uploaded Successfully!");
    })
    .catch((error) =>{
        console.log(error);
    });
};

// show one campaign
const showCampaign = async (req, res, next) => {
    Campaign.findById(req.params.id)
      .then(campaign => res.status(200).json(campaign))
      .catch(err => res.status(400).json('Error: ' + err));
  };


// edit route
const editCampaign = async (req, res, next) => {
    Campaign.findById(req.params.id, (err, foundCampaign) =>{
        if(err){
            console.log(err)
        } else{
            res.status(200).json(foundCampaign)
        }
    });
};

  //   update campaign
  const updateCampaign = (req, res, next) => {
    Campaign.findById(req.params.id)
      .then(campaign => {
        campaign.name = req.body.name
        campaign.description = req.body.description
        campaign.ownerNumber = req.body.ownerNumber
        campaign.ownerContact = req.body.ownerContact
        campaign.ownerEmail = req.body.ownerEmail
        campaign.image = req.body.image
        campaign.save()
          .then(() => res.status(200).json(`'Campaign updated!'`))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  };

//   delete
const deleteCampaign = async (req, res, next) => {
    Campaign.findByIdAndRemove(req.params.id)
      .then(() => res.json(`${req.params.id}: deleted`))
      .catch(err => res.status(400).json('Error: ' + err));
  };


module.exports = {
    postCampaign,
    getCampaigns,
    showCampaign,
    editCampaign,
    updateCampaign,
    deleteCampaign

};
