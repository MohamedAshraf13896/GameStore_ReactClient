import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Icons() {
  return (
    <>
      <div className="container">
        <FacebookSharpIcon
          sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
        ></FacebookSharpIcon>
        <InstagramIcon
          sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
        ></InstagramIcon>
        <LinkedInIcon
          sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
        ></LinkedInIcon>
        <WhatsAppIcon
          sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
        ></WhatsAppIcon>
        <TwitterIcon
          sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
        ></TwitterIcon>
      </div>
    </>
  );
}
