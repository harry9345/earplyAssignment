import React from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../components/auth/Auth";

import axios from "axios";
import { Container, Col, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./login.scss";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  let auth = useAuth();

  const onSubmit = (data) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${data.category}&apiKey=${data.apiKey}`
      )
      .then((response) => {
        console.log(response.data.articles);
        auth.signin(() => {
          history.push("/main");
          setToLocal(response.data.articles, data);
        });
      })
      .catch((error) => console.log(error));
  };
  console.log(errors);

  const setToLocal = (news, userData) => {
    localStorage.setItem("allNews", JSON.stringify(news));
    localStorage.setItem("userData", JSON.stringify(userData));
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
            Please follow the
            <a href="https://newsapi.org/docs/get-started"> link</a> to make API
            key for your self, its easy and free. You also can chosse from
            diffrect category news
          </p>
        </Col>
      </Row>
    </Container>
  );
}
