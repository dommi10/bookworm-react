import React from "react"
import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const HomePage = ({ isAuthenticated }) => (
  <div className="ui container">
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <Button primary>Logout</Button>
    ) : (
      <Link to="/login">Login</Link>
    )}
  </div>
)

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  }
}

export default connect(mapStateToProps)(HomePage)
