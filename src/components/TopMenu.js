import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import {CartContext} from '../contexts/Cart';

function TopMenu() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">React App</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/products">Product</Link>
            </NavLink>
          </NavItem>
        </Nav>
       
            <NavLink>
              <CartContext.Consumer>
                {({cartItem}) => (<Link to="/products">Cart({cartItem.length})</Link>)}
              </CartContext.Consumer>
            </NavLink>
         
      </Collapse>
    </Navbar>
  );
}
export default TopMenu;
//   Navbar.propTypes = {
//     light: PropTypes.bool,
//     dark: PropTypes.bool,
//     fixed: PropTypes.string,
//     color: PropTypes.string,
//     role: PropTypes.string,
//     expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
//   }
