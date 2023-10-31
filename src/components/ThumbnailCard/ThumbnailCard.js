/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Card, Modal, Input, Button } from "antd";
import { Link, withRouter } from 'react-router-dom'
import "antd/dist/antd.css";
import "./style.css";
import menu from "../../data/menu.json";
import madrasah from "../../data/madrasah.json";

const { Meta } = Card;
const { Search } = Input;

class ThumbnailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileModalOpen: false,
      selectedMadrasah: {}
    }
  }

  componentDidMount() {
    const id = this.props.id;
    const selectedMadrasah = this.getMadrasahById(id);
    this.setState({ selectedMadrasah })
  }

  onClick = (key) => {
    switch(menu[this.props.type].action[key]) {
      case "route": {
        const route = this.props.id ? `/madrasah/${this.props.id}/${menu[this.props.type].pages[key]}` : `${menu[this.props.type].pages[key]}`;
        this.props.history.push(route);
        break;
      }
      case "modal": {
        this.setState({ isProfileModalOpen: true })
        break;
      }
      case "whatsapp": {
        window.location.href = `https://wa.me/081515977567?text=${menu[this.props.type].whatsapp[key]}`
        break;
      }
      default:
    }
  }

  getMadrasahById(id) {
    const selectedMadrasah = madrasah.find((target) => {
      return id === target["No Handpone"].toString()
    });
    return selectedMadrasah;
  }

  renderGallery = () => (
    <>
     <Modal
        title="Profile"
        centered
        open={this.state.isProfileModalOpen}
        onCancel={() => { this.setState({isProfileModalOpen: false})}}
        footer={[
          <Button key="back" onClick={() => { this.setState({isProfileModalOpen: false})}}>
            Kembali
          </Button>
        ]}
      >
        <p>Pemilik Madrasah : {this.state.selectedMadrasah && this.state.selectedMadrasah["Nama ketua TPQ/TPA"]}</p>
        <p>Alamat : {this.state.selectedMadrasah && this.state.selectedMadrasah["Alamat "]}</p>
      </Modal>
    <div className="gallery-container">
      {menu[this.props.type].images?.map((image, key) => {
          let isLoaded = false;
          return (
              <img
              src={image}
              key={key}
              className={`image-item image-${isLoaded} ? 'visible' :  'hidden'
            }`}
              onLoad={() => (isLoaded = true)}
              onClick={() => this.onClick(key)}
            />
          );
        })}

      {this.state.isError && <p>Something is not right</p>}
      {this.state.isLoading && <p>Loading images</p>}
    </div>
    </>
  );

  render() {
    return <div className="gallery-box">{this.renderGallery()}</div>;
  }
}

export default ThumbnailCard;
