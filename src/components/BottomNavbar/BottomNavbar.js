import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { HomeFilled, MessageFilled } from "@ant-design/icons";
import { CenterButton } from "./CenterButton";
import "./BottomNavbar.css";
import { withRouter } from "react-router-dom";

class BottomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: "",
    };
  }

  handleTabChange = (event, tabName) => {
    const { setPage } = this.props;
    this.props.history.push(`/${tabName}`);
    const titleName = tabName.charAt(0).toUpperCase() + tabName.slice(1);
    setPage({ title: titleName, page: tabName });
    this.setState({
      tabName: tabName,
    });
  };

  render() {
    const { tabName } = this.state;
    const routeName = window.location.pathname.slice(1);

    return (
      <div>
        <CenterButton setPage={this.props.setPage}/>

        <BottomNavigation
          value={routeName}
          onChange={this.handleTabChange}
          className="bottom-navbar-container"
        >
          <BottomNavigationAction
            label="Beranda"
            value=""
            icon={<HomeFilled className="bottom-navbar-button" />}
          />
          <BottomNavigationAction disabled/>
          <BottomNavigationAction
            label="Tentang"
            value="tentang"
            icon={<MessageFilled className="bottom-navbar-button" />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(BottomNavbar);
