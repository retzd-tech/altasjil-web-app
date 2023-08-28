/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Card, Modal, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";

const { Meta } = Card;
const { Search } = Input;

class ThumbnailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "images/cari_madrasah.png",
        "images/kalendar_hijriah.png",
        "images/infaq.png",
        "images/layanan_pengguna.png"
      ],
    };
  }

  renderGallery = () => (
    <div className="gallery-container">
      {!this.state.isError &&
        this.state.images?.map((image, key) => {
          let isLoaded = false;
          return (
            <img
              src={image}
              key={key}
              className={`image-item image-${isLoaded} ? 'visible' :  'hidden'
            }`}
              onLoad={() => (isLoaded = true)}
              onClick={() => {}}
            />
          );
        })}

      {this.state.isError && <p>Something is not right</p>}
      {this.state.isLoading && <p>Loading images</p>}
    </div>
  );

  render() {
    return <div className="gallery-box">{this.renderGallery()}</div>;
  }
}

export default ThumbnailCard;
