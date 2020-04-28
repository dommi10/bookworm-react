import React from "react"
import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import * as actions from "../../actions/auth"
const HomePage = ({ isAuthenticated, logout }) => (
  <div className="ui container">
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <Button primary onClick={() => logout()}>
        Logout
      </Button>
    ) : (
      <div className="ui segment">
        <div className="ui very relaxed two column grid">
          <div className="column">
            <Link to="/login">Login</Link>
          </div>
          <div className="column">
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <div className="ui vertical divider">OR</div>
      </div>
    )}
  </div>
)

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    logout: PropTypes.func.isRequired,
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage)
