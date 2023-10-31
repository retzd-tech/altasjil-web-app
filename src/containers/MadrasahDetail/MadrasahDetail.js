import React, { Component } from "react";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Fade } from "react-reveal";
import { Comment, Button, Carousel, Modal } from "antd";

import "./MadrasahDetail.css";
import madrasah from "../../data/madrasah.json";
import { ProfileCard, ThumbnailCard, Logo } from "../../components";
import { fade } from "@material-ui/core";

class MadrasahDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      isUlasanModalOpen: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const selectedMadrasah = madrasah.find((target) => {
      console.log(target);
      return id === target["No Handpone"].toString()
    });
    this.setState( { madrasah: selectedMadrasah });
  }

  openModal() {
    this.setState({ isUlasanModalOpen: true })
  }

  render() {
    console.log(this.state);
    const contentStyle: React.CSSProperties = {
      margin: 0,
      height: "160px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    };

    return (
      <div>
        <Fade>
       
          <Container>
            <Box my={3}>
              <div className="profile-container">
                <img className="profile" src="/images/madrasah_default.png" />
                {/* <div className="profile-sub-container"> */}
                <h2 className="text">{this.state.madrasah && this.state.madrasah["Nama TPQ/TPA"]}</h2>
                {/* </div> */}
              </div>
            </Box>
            <Box my={3}>
              <Carousel
                afterChange={() => {
                  // console.log("On change");
                }}
              >
                <div>
                  <h3 style={contentStyle}>Photo 1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>Photo 2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>Photo 3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>Photo 4</h3>
                </div>
              </Carousel>
            </Box>
          </Container>
          <ThumbnailCard {...this.props} type="profile" id={this.state.id}/>
        </Fade>
      </div>
    );
  }
}

export default MadrasahDetail;
