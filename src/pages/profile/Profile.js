import React from "react";
import { useSelector } from "react-redux";

import Navigation from "../../components/nav/navigation/Navigation";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";

import { Card } from "react-bootstrap";

import "./profile.scss";

export default function Profile() {
  const value = useSelector((state) => state.login);

  return (
    <div className="profile">
      <Navigation {...value} />
      <HorizontalNav />
      <Card>
        <Card.Title>
          <span className="span">{value.userName}</span>
        </Card.Title>

        <Card.Body>
          Category : <span className="span">{value.userCategory}</span>
        </Card.Body>
        <Card.Body>
          YOur API key : <span className="span">{value.userApiKey}</span>
        </Card.Body>
        <Card.Footer>
          Your Email : <span className="span">{value.userEmail}</span>
        </Card.Footer>
      </Card>
    </div>
  );
}
