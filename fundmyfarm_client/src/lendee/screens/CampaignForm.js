import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./CampaignForm.css"

const CampaignForm = () => {
  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerNumber, setOwnerNumber] = useState("");
  const [ownerContact, setOwnerContact] = useState("");
}

const handleUpload = (e) => {
  e.preventDefault();
  setIsError(false);
  setLoader(true);
  

}
