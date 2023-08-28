import React, {Component} from "react";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Fade } from "react-reveal";
import { Comment } from "antd";
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const mockNotifications = [
      {
        author: 'Name',
        avatar: 'https://images.unsplash.com/photo-1523221197642-4a2e4b6a3dcf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
        content: 'Description',
        datetime: 'some data'
      }
    ]

    return (
      <div>
        <Fade>
          <Container>
            <Box my={2}>
                {mockNotifications.map((c) => 
                  <Comment 
                    className="comment"
                    author={c.author}
                    avatar={c.avatar}
                    content={c.content}
                    datetime={c.datetime}
                    actions={[
                      <p>Something</p>
                    ]}
                  />
                )}
            </Box>
          </Container>
        </Fade>
      </div>
    )
  }
}

export default About;
