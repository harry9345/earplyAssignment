import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import { useSelector } from "react-redux";

import NewsFeed from "../../components/newsFeed/NewsFeed";
import Navigation from "../../components/nav/navigation/Navigation";

import "./mainPage.scss";

const MainPage = (props) => {
  const value = useSelector((state) => state.login);

  if (value === null) {
    return (
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Container>
        <Navigation {...value} />
        <Container>
          <Row className="row">
            {value?.news?.map((title) => (
              <NewsFeed {...title} key={title.publishedAt} />
            ))}
          </Row>
        </Container>
      </Container>
    );
  }
};
export default MainPage;
