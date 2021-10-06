import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import { useSelector } from "react-redux";

import "./story.scss";
import Navigation from "../../components/nav/navigation/Navigation";

const Story = (props) => {
  const value = useSelector((state) => state.login);
  console.log("story props: ", props);
  console.log("story value: ", value);

  return (
    <Container>
      <Navigation {...value} />
      <Row>
        <Col>
          <Card>
            <Image src={value.news.urlToImage} />
            <Card.Title>
              Author : <span className="author">{value.news.author}</span>
            </Card.Title>
            <Card.Body>
              <Card.Title>{value.news.title}</Card.Title>
              <Card.Text>{value.news.content}</Card.Text>
            </Card.Body>
            {/* <a href={value.news.url}>{value.news.source.name}</a>{" "} */}
            <Card.Footer>
              <small className="text-muted">
                Published at : {value.news.publishedAt}
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Story;
