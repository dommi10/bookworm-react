import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import ConfirmationPage from "./components/pages/ConfirmationPage.js"
import LoginPage from "./components/pages/LoginPage"
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage"
import ResetPasswordPage from "./components/pages/ResetPasswordPage"
import SignUpPage from "./components/pages/SignUpPage"
import NewBookPage from "./components/pages/NewBookPage"
import TopNavigation from "./components/navigation/TopNavigation"
import DashboardPage from "./components/pages/DashboardPage"
import UserRoute from "./components/routes/UserRoute"
import GuestRoute from "./components/routes/GuestRoute"

const App = ({ isAuthenticated }) => (
  <div>
    {isAuthenticated && <TopNavigation />}
    <Route path="/" exact component={HomePage} />
    <Route path="/confirmation/:token" exact component={ConfirmationPage} />
    <Route path="/resetPassword/:token" exact component={ResetPasswordPage} />
    <GuestRoute path="/login" exact component={LoginPage} />
    <GuestRoute path="/forgot_password" exact component={ForgotPasswordPage} />
    <GuestRoute path="/signup" exact component={SignUpPage} />
    <UserRoute path="/dashboard" exact component={DashboardPage} />
    <UserRoute path="/books/new" exact component={NewBookPage} />
  </div>
)

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
  }
}

export default connect(mapStateToProps)(App)
