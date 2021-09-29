import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProvideAuth } from "./components/auth/Auth";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";
import MainPage from "./pages/main/MainPage";
import Story from "./pages/story/Story";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <PrivateRoute path="/main">
              <MainPage />
            </PrivateRoute>
            <PrivateRoute
              path="/story/:id"
              render={(props) => <Story {...props} />}
            />
            {/* <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute> */}
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
