import React from "react";
import { Container, Row } from "react-bootstrap";

import NewsFeed from "../../components/newsFeed/NewsFeed";
import Navigation from "../../components/nav/navigation/Navigation";

import "./mainPage.scss";

const MainPage = () => {
  let allNews = null;
  let userData = null;
  const getFromLocalStorage = () => {
    allNews = JSON.parse(localStorage.getItem("allNews"));
    userData = JSON.parse(localStorage.getItem("userData"));
  };
  getFromLocalStorage();
  return (
    <Container>
      <Navigation {...userData} />
      <Container>
        <Row className="row">
          {allNews.map((title) => (
            <NewsFeed {...title} key={title.publishedAt} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};
export default MainPage;
