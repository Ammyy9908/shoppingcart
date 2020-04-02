import React, { Component } from "react";


class Header extends Component
{
      render(props)
      {
            return(<div>
                  <div className="hero is-warning is-large">
                  <div className="hero-body" id="hero">
                  <div className="container">
                  <h1 className="title is-size-1">Your Cart {this.props.cartcount}</h1>
                  
                  <p className="subtitle">This Project is Built in React to Demonstrating Implmentation of Shopping Cart Item Add using React State & setState,props.</p>
                  </div>
                  </div>
            </div>
            </div>)
      }
}

export default Header;