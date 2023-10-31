import React, { Component } from "react";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Fade } from "react-reveal";
import { Comment, Button } from "antd";

import "./MadrasahList.css";
import madrasahList from "../../data/madrasah.json";

class MadrasahList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMadrasahItem = () => {};

  render() {

    return (
      <div>
        {/* <Flex gap="middle" vertical>
          <Flex vertical>
            {Array.from({
              length: 4,
            }).map((_, i) => (
              <div
                key={i}
                style={{
                  ...baseStyle,
                  backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
                }}
              />
            ))}
          </Flex>
        </Flex> */}
        <Fade>
          <Container>
            <Box my={3}>
              {madrasahList.map((madrasah,) => (
                <>
                <Comment
                  className="comment"
                  author={madrasah["Nama TPQ/TPA"]}
                  avatar={madrasah.image}
                  content={madrasah["Alamat"]}
                  // datetime={madrasah.distance}
                  actions={[
                    <>
                      <Button type="primary" onClick={() => this.props.history.push(`/madrasah/${madrasah["No Handpone"]}`)}>Lihat Madrasah</Button>
                    </>,
                  ]}
                />
                </>
              ))}
            </Box>
          </Container>
        </Fade>
      </div>
    );
  }
}

export default MadrasahList;
