import React from "react";
import { Link } from "react-router-dom";
import "./CampaignItem.css";

function CampaignItem({
  name,
  campaignImage,
  targetAmount,
  repaymentPeriod,
  currentAmountPer,
  currentAmount,
  amountLeft,
}) {
  return (
    <div className="d-flex mb-4 pr-4 campaignItem">
      <div className="campaign-image mr-3">
        <img src={campaignImage} alt="" />
      </div>
      <div className="campaign-details">
        <div className="d-flex justify-content-between align-items-center py-2">
          <h2 className="campaign-title">Fund {name} Campaign</h2>
          <p className="target-amount">₦ {targetAmount}</p>
        </div>
        <div className="loan-progress mb-4">
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${currentAmountPer}%` }}
              aria-valuenow={`${currentAmountPer}`}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-between">
            <span className="current-amount">N {currentAmount}</span>
            <span className="amount-left">N {amountLeft}</span>
          </div>
        </div>
        <p className="repayment__period">
          Proposed Repayment Period:{" "}
          <span>
            <strong>{repaymentPeriod} Months</strong>
          </span>
        </p>
        <Link to="view-campaign/2" className="invest-button mt-4">
          <button className="btn btn-primary">Invest Now</button>
        </Link>
      </div>
    </div>
  );
}

export default CampaignItem;
