import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Kelompok 9</h4>
            <h1 className="list-unstyled">
              <li>Billy Nathanael Wongkar - 00000037503</li>
              <li>Elfajar Bintang Samudera - 00000037235</li>
              <li>Gilang Satria Putra - 00000037741</li>
              <li>Nehemia Cecio Tanjung Jati - 00000039011</li>
            </h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PTI | Kelompok 9 |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;