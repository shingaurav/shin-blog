import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './home'
import About from './About'
import Contact from './Contact'


const MainRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route
        exact
        path="/reset-password/:resetPasswordToken"
        component={ResetPassword}
      />
      <PrivateRoute exact path="/post/create" component={NewPost} />
      <Route exact path="/post/:postId" component={SinglePost} />
      <PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <PrivateRoute exact path="/user/edit/:userId" component={EditProfile} />
      <PrivateRoute exact path="/findpeople" component={FindPeople} /> */}
      {/* <PrivateRoute exact path="/user/:userId" component={Profile} /> */}
    </Switch>
  </div>
);

export default MainRouter;