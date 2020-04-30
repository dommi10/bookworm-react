import React from "react"
import PropTypes from "prop-types"
import { Menu, Dropdown, Image, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import gravatarUrl from "gravatar-url"
import { logout } from "../../actions/auth"

const TopNavigation = ({ user, logout }) => {
  return (
    <Segment>
      <Menu secondary>
        <Menu.Item as={Link} to="/Dashboard">
          Dashboad
        </Menu.Item>
        <Menu.Menu  position="right">
          <Dropdown
            item
            trigger={<Image avatar src={gravatarUrl(user.email)}></Image>}
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
}
function mapStateToProps(state) {
  return {
    user: state.user,
  }
}
export default connect(mapStateToProps, { logout })(TopNavigation)
