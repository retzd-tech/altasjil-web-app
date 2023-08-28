import React from "react";
import * as firebase from "../../services/Firebase";

import "./BottomNavbar.css";
import CenterButtonImage from './images/keluar.png';
import {showNotification} from "../../service-worker/NotificationServiceWorker";

export const CenterButton = (props) => {
  return (
    <div className="ar-mode-container">
      <img alt="ar-mode" src={CenterButtonImage} className="ar-mode-button" onClick={ async () => {
        await firebase.auth().signOut();
        window.location.href = '/';
        props.setPage({ title: '', page: '' });
      }}/>
    </div>
  )
};
