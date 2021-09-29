import React from "react";

import { NavLink } from "react-router-dom";

import { Col, Card, Image } from "react-bootstrap";
import "./newsFeed.scss";

const NewsFeed = (props) => {
  return (
    <Col>
      <NavLink to={"/story/" + props.url}>
        <Card style={{ width: "40rem" }} key={props.publishedAt}>
          <Image src={props.urlToImage} />
          <Card.Title>
            Author : <span className="author">{props.author}</span>
          </Card.Title>

          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Published at : {props.publishedAt}
            </small>
          </Card.Footer>
        </Card>
      </NavLink>
    </Col>
  );
};
export default NewsFeed;
