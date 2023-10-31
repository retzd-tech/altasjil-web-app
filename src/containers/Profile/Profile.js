import React, { Component } from "react";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Fade } from "react-reveal";
import { Comment, Button } from "antd";

import "./Profile.css";
import madrasah from "../../data/madrasah.json";
// import "../../libs/calendar";
// import "../../libs/hijri-date";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile-about">
        <iframe src="./profile.html" height="100%" width="100%" frameborder="0">Your browser doesnot support iframes<a href="myPageURL.htm"> click here to view the page directly. </a></iframe>
      </div>
    );
  }
}

export default Profile;
