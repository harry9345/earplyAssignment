import React from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useAuth } from "../../components/auth/Auth";
import { loginEmailStart } from "../../redux/login/login.actions";

import "./login.scss";

export default function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let auth = useAuth();

  const onSubmit = (userData) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${userData.category}&apiKey=${userData.apiKey}`
      )
      .then((response) => {
        console.log(response.data.articles);
        auth.signin(() => {
          history.push("/main");
          dispatch(
            loginEmailStart({
              news: response.data.articles,
              userName: userData.name,
              userEmail: userData.Email,
              userApiKey: userData.apiKey,
              userCategory: userData.category,
              userErorr: errors,
            })
          );
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid className="login">
      <Row>
        <Col>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-5" controlId="formBasicName">
              <Form.Label>Your Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label>Email address :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicKey">
              <Form.Label>Your API key :</Form.Label>
              <Form.Control
                type="text"
                placeholder="API key"
                {...register("apiKey", { required: true, maxLength: 100 })}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicCat">
              <Form.Label>Choose a Category :</Form.Label>

              <Form.Select
                aria-label="Default select example"
                {...register("category", { required: true })}
                size="lg"
              >
                <option value="business"> Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </Form.Select>
              <Form.Text className="text-muted">
                We'll never share your details with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="outline-secondary" size="lg" type="submit">
              LogIn
            </Button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <h3>How to make API key:</h3>
          <p>
            Please follow this{" "}
            <a href="https://newsapi.org/docs/get-started">link</a> to make API
            key for your self, its easy and free. You also can chosse from
            diffrect category news
          </p>
        </Col>
      </Row>
    </Container>
  );
}
