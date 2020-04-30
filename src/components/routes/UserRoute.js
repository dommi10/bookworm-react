import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const UserRoute = ({ isAuthenticate, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate ? <Component {...props} /> : <Redirect to="/" />
    }
  />
)

UserRoute.propTypes = {
  
  component: PropTypes.node.isRequired,
  isAuthenticate: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token,
  }
}

export default connect(mapStateToProps)(UserRoute)
