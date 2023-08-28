import React, { Component } from "react";
import { ProfileCard, ThumbnailCard, Logo } from "../../components";
import { CardContainer } from "../../shared";
import { Fade } from "react-reveal";
import { Card } from "antd";

const { Meta } = Card;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!this.props.title) {
      this.props.setPage({ title: "Beranda" });
    }
  }

  render() {
    return (
      <div>
        <Fade>
          <Logo />
          <ThumbnailCard />
          {/* <CardContainer
            content={
              <ProfileCard
                image={
                  "https://www.photos-public-domain.com/wp-content/uploads/2018/04/feral-cat-with-tipped-ear-300x300.jpg"
                }
                title={"Lost cat!"}
                description={
                  "I was out walking my cat, but I looked away for a second and he was gone!"
                }
                avatar={
                  "https://images.unsplash.com/photo-1523221197642-4a2e4b6a3dcf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
                }
              />
            }
          /> */}
        </Fade>
      </div>
    );
  }
}

export default Dashboard;
