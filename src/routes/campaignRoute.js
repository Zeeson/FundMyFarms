const express = require("express");
const router = express.Router();
const {
    getCampaigns, postCampaign, showCampaign, editCampaign, updateCampaign, deleteCampaign,
} = require("../controllers/campaignController")

// fleet routes
router.get("/",  getCampaigns);
router.post("/", postCampaign);
router.get("/:id", showCampaign);
router.get("/:id/edit", editCampaign);
router.put("/:id", updateCampaign);
router.delete("/delete/:id", deleteCampaign);

module.exports = router;
