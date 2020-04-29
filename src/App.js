import React from "react"
import { Route } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import ConfirmationPage from "./components/pages/ConfirmationPage.js"
import LoginPage from "./components/pages/LoginPage"
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage"
import ResetPasswordPage from "./components/pages/ResetPasswordPage"
import SignUpPage from "./components/pages/SignUpPage"
import DashboardPage from "./components/pages/DashboardPage"
import UserRoute from "./components/routes/UserRoute"
import GuestRoute from "./components/routes/GuestRoute"

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/confirmation/:token" exact component={ConfirmationPage} />
    <Route path="/resetPassword/:token" exact component={ResetPasswordPage} />
    <GuestRoute path="/login" exact component={LoginPage} />
    <GuestRoute path="/forgot_password" exact component={ForgotPasswordPage} />
    <GuestRoute path="/signup" exact component={SignUpPage} />
    <UserRoute path="/dashboard" exact component={DashboardPage} />
  </div>
)

export default App
