import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "./story.scss";
import Navigation from "../../components/nav/navigation/Navigation";

const Story = (props) => {
  let allNews = null;
  let userData = null;

  const getFromLocalStorage = () => {
    allNews = JSON.parse(localStorage.getItem("allNews"));
    userData = JSON.parse(localStorage.getItem("userData"));
  };

  getFromLocalStorage();

  if (props.match.params.id) {
    for (const feeds in allNews) {
      if (feeds.url === props.match.params.id) {
        return (
          <Container>
            <Navigation {...userData} />
            <Row>
              <Col>
                <Card>
                  <Image src={feeds.urlToImage} />
                  <Card.Title>
                    Author : <span className="author">{feeds.author}</span>
                  </Card.Title>
                  <Card.Body>
                    <Card.Title>{feeds.title}</Card.Title>
                    <Card.Text>{feeds.content}</Card.Text>
                  </Card.Body>
                  <a href={feeds.url}>{feeds.source.name}</a>{" "}
                  <Card.Footer>
                    <small className="text-muted">
                      Published at : {feeds.publishedAt}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      } else {
        return <Redirect to="/main" />;
      }
    }
  } else {
    return <Redirect to="/main" />;
  }
};

export default Story;
