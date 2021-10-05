import React from "react";
import { Container, Row } from "react-bootstrap";

import NewsFeed from "../../components/newsFeed/NewsFeed";
import Navigation from "../../components/nav/navigation/Navigation";

import "./mainPage.scss";

const MainPage = (props) => {
  console.log("main page log : ", props);
  return (
    <Container>
      <Navigation {...props} />
      {/* <Container>
        <Row className="row">
          {allNews.map((title) => (
            <NewsFeed {...title} key={title.publishedAt} />
          ))}
        </Row>
      </Container> */}
    </Container>
  );
};
export default MainPage;
