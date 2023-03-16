import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="shadow-lg bg-dark mt-4" data-role="footer" data-position="fixed"
        style={{ color: "white", padding: "0px 5vw", width:"100%"}}
      >
        <div
          className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
          style={{ width: "100%", margin: "auto" }}
        >
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <span
              className="ml-4 h5 font-weight-bold"
              style={{ color: "white" }}
            >
              मायBHUMI.com
            </span>
          </a>
          <small>&copy; मायBHUMI , 2023. All rights reserved.</small>
          <div>
          <ion-icon name="logo-instagram" size="large"><a href=""></a></ion-icon>
          <ion-icon name="logo-twitter" size="large"></ion-icon>
          <ion-icon name="logo-linkedin" size="large"></ion-icon>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
