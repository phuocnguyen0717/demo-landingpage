import React from "react";
import "./styles/Content.css";
export default function Content() {
  return (
    <div id="content">
      {/* -----------------------BEGIN SECTION Band--------------------- */}
      <div class="content-section">
        <h2 class="section-heading">THE BAND</h2>
        <p class="section-subHeading">We love music</p>
        <p class="about-content">
          We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div class="memberList">
          <div class="about-menuItem">
            <p class=" menuItem-name">Name</p>
            <img class="menuItem-img" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="member"></img>
          </div>
          <div class="about-menuItem">
            <p class=" menuItem-name">Name</p>
            <img class="menuItem-img" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="member"></img>
          </div>
          <div class="about-menuItem">
            <p class=" menuItem-name">Name</p>
            <img class="menuItem-img" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="member"></img>
          </div>
        </div>
      </div>
      {/* ------------------------END SECTION Band--------------------- */}

      {/* -----------------------BEGIN SECTION TOUR DATES--------------------- */}
      <div class="tour-section">
        <div class="content-section">
          <h2 class="section-heading">TOUR DATES</h2>
          <p class="section-subHeading">Remember to book your tickets!</p>
          <ul class="ticket-list">
            <li>
              September <span class="ticket-soldout">Sold out</span>
            </li>
            <li>
              October <span class="ticket-soldout">Sold out</span>
            </li>
            <li>
              November<span class="ticket-quantity">3</span>
            </li>
          </ul>
          <div class="list-place">
            <div class="list-item">
              <img class="place-img" src="https://www.w3schools.com/w3images/newyork.jpg" alt="place"></img>
              <div class="info-place">
                <h3 class="place-name">New York</h3>
                <p class="place-time">Fri 27 Nov 2016</p>
                <p class="place-description">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button class="place-buy">Buy ticket</button>
              </div>
            </div>
            <div class="list-item">
              <img class="place-img" src="https://www.w3schools.com/w3images/newyork.jpg" alt="place"></img>
              <div class="info-place">
                <h3 class="place-name">New York</h3>
                <p class="place-time">Fri 27 Nov 2016</p>
                <p class="place-description">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button class="place-buy">Buy ticket</button>
              </div>
            </div>
            <div class="list-item">
              <img class="place-img" src="https://www.w3schools.com/w3images/newyork.jpg" alt="place"></img>
              <div class="info-place">
                <h3 class="place-name">New York</h3>
                <p class="place-time">Fri 27 Nov 2016</p>
                <p class="place-description">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button class="place-buy">Buy ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------END SECTION TOUR DATES--------------------- */}

      {/* -----------------------BEGIN SECTION CONTACT--------------------- */}
      <div class="content-section">
        <h2 class="section-heading">CONTACT</h2>
        <p class="section-subHeading">Fan? Drop a note!</p>
      </div>
      {/* ------------------------END SECTION CONTACT--------------------- */}
    </div>
  );
}
