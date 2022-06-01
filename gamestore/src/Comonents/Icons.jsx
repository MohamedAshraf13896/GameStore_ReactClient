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
        <a href="https://www.facebook.com/">
          <FacebookSharpIcon
            sx={{ margin: "17px 20px 0 0px", color: "#c7c1c1" }}
          ></FacebookSharpIcon>
        </a>
        <a href="https://www.instagram.com/">
          <InstagramIcon
            sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
          ></InstagramIcon>
        </a>
        <a href="https://www.linkedin.com/">
          <LinkedInIcon
            sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
          ></LinkedInIcon>
        </a>
        <a href="https://web.whatsapp.com/">
          <WhatsAppIcon
            sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
          ></WhatsAppIcon>
        </a>
        <a href="https://twitter.com/">
          <TwitterIcon
            sx={{ margin: "17px 20px 0 30px", color: "#c7c1c1" }}
          ></TwitterIcon>
        </a>
      </div>
    </>
  );
}
