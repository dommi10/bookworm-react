import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const GuestRoute = ({ isAuthenticate, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticate ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
)

GuestRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticate: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token,
  }
}

export default connect(mapStateToProps)(GuestRoute)
