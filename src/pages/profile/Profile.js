import React from "react";

import Navigation from "../../components/nav/navigation/Navigation";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";

import { Card } from "react-bootstrap";

import "./profile.scss";

export default function Profile() {
  let userData = null;
  const getFromLocalStorage = () => {
    userData = JSON.parse(localStorage.getItem("userData"));
    console.log("profile userData", userData);
  };
  getFromLocalStorage();
  return (
    <div className="profile">
      <Navigation {...userData} />
      <HorizontalNav />
      <Card>
        <Card.Title>
          <span className="span">{userData.name}</span>
        </Card.Title>

        <Card.Body>
          Category : <span className="span">{userData.category}</span>
        </Card.Body>
        <Card.Body>
          YOur API key : <span className="span">{userData.apiKey}</span>
        </Card.Body>
        <Card.Footer>
          Your Email : <span className="span">{userData.Email}</span>
        </Card.Footer>
      </Card>
    </div>
  );
}
