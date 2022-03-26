import React from "react";
import { Button, BackTop } from "antd";

class AppFooter extends React.Component {
  render() {
      
    return (
      <div id="questions" className="block footerBlock">
        <div className="titleHolder">
          <div className="logo-footer">
            <i class="fas fa-desktop"></i>
            <a href="#">ICT Lab</a>
          </div>
          <ul className="socials-footer">
            <li>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="copyright">Copyright &copy; 2022 ICT Lab</div>
          <BackTop>
            <div className="goTop-footer">
              <i
                style={{ color: "#1890ff", fontSize: "30px" }}
                className="fas fa-arrow-circle-up"
              ></i>
            </div>
          </BackTop>
        </div>
      </div>
    );
  }
}
export default AppFooter;
