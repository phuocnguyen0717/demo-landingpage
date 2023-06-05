import React from "react";
import "./styles/Header.css";
export default function Header() {
  return (
    <div id="header">
      <ul id="nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Band</a>
        </li>
        <li>
          <a href="#">Tour</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">More</a>
          <ul class="subnav">
            <li>
              <a href="#">Merchandise</a>
            </li>
            <li>
              <a href="#">Extras</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
