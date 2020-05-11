import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from 'reactstrap'
import PropTypes from 'prop-types'

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react'
import logo from '/assets/img/brand/logo.svg'
import sygnet from '/assets/img/brand/sygnet.svg'
import avatar from '/assets/img/avatars/avatar.jpg'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

const Header = (props) => {
  const { children, ...attributes } = props

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
        minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <img
              src={avatar}
              className="img-avatar"
              alt="admin@bootstrapmaster.com"
            />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center">
              <strong>Account</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-user"></i> Profile
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-wrench"></i> Settings
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-file"></i> Projects
              <Badge color="primary">42</Badge>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
