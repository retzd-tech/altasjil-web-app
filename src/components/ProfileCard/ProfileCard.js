import React, {Component} from "react";
import {Avatar, Card, Modal, Collapse} from "antd";
import 'antd/dist/antd.css';
import { EnvironmentOutlined, EllipsisOutlined, MessageOutlined } from '@ant-design/icons';
import './ProfileCard.css'

const { Meta } = Card;

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionViewVisible: false,
      commentsVisible: false,
    }
  }

  showPositionViewModal = () => {
    this.setState({
      positionViewVisible: true,
    });
  };

  hidePositionViewModal = e => {
    this.setState({
      positionViewVisible: false,
    });
  };

  showCommentsModal = () => {
    this.setState({
      commentsVisible: true,
    });
  };

  hideCommentsModal = e => {
    this.setState({
      commentsVisible: false,
    });
  };

  render() {
    return (
      <div className="profile-card-container">
        <Card
          className="profile-card"
          cover={
            <img
              alt="example"
              src={this.props.image}
            />
          }
          actions={[
            <MessageOutlined key="setting" onClick={() => this.showCommentsModal()} />,
            <EnvironmentOutlined key="edit" onClick={() => this.showPositionViewModal()}/>,
            <EllipsisOutlined key="ellipsis"  />
          ]}
        >
          <Meta 
            className="meta"
            avatar={<Avatar src={this.props.avatar} />}
            title={this.props.title}
            description={this.props.description}
          />
        </Card>

        <Modal 
          title="Position View"
          visible={this.state.positionViewVisible}
          onOk={this.hidePositionViewModal}
          onCancel={this.hidePositionViewModal}
        >
        </Modal>

        <Modal
          title="Comments"
          visible={this.state.commentsVisible}
          onOk={this.hideCommentsModal}
          onCancel={this.hideCommentsModal}
        >
        </Modal>
      </div>
    )
  }
}

export default ProfileCard;
